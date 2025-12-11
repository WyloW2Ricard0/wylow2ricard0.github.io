// GitHub Repository Explorer - Dedicated Page
document.addEventListener('DOMContentLoaded', () => {
    const OWNER = 'WyloW2Ricard0';
    const REPO = 'Enseignement';
    const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}`;
    let defaultBranch = 'master';
    let booted = false;
    
    let currentPath = '';
    let currentFileData = null;

    const requireAuth = window.__supabaseAuth?.requireAuth || (() => true);
    
    // DOM Elements
    const repoMeta = document.getElementById('repo-meta');
    const breadcrumb = document.getElementById('breadcrumb');
    const fileTree = document.getElementById('file-tree');
    const viewerBody = document.getElementById('viewer-body');
    const fileName = document.getElementById('file-name');
    const fileIcon = document.getElementById('file-icon');
    const editBtn = document.getElementById('btn-edit');
    const refreshBtn = document.getElementById('btn-refresh');

    // Utility Functions
    const humanSize = (bytes) => {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${(bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
    };

    const getFileIcon = (filename) => {
        const ext = filename.split('.').pop().toLowerCase();
        const iconMap = {
            'md': '📝',
            'txt': '📄',
            'pdf': '📕',
            'js': '📜',
            'json': '📋',
            'html': '🌐',
            'css': '🎨',
            'py': '🐍',
            'jpg': '🖼️',
            'png': '🖼️',
            'gif': '🖼️',
            'zip': '📦',
            'xml': '📰',
            'sh': '⚙️',
            'ps1': '⚙️'
        };
        return iconMap[ext] || '📄';
    };

    // Load Repository Metadata
    const loadRepoMeta = async () => {
        try {
            const res = await fetch(API_BASE);
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            defaultBranch = data.default_branch || defaultBranch;
            repoMeta.innerHTML = `
                <span>⭐ ${data.stargazers_count}</span>
                <span>🍴 ${data.forks_count}</span>
                <span>📝 ${data.open_issues_count} issues</span>
                <span>📅 MàJ: ${new Date(data.pushed_at).toLocaleDateString('fr-FR')}</span>
            `;
        } catch (err) {
            console.error(err);
            repoMeta.textContent = 'Impossible de charger les métadonnées';
        }
    };

    // Update Breadcrumb Navigation
    const updateBreadcrumb = (path) => {
        const parts = path ? path.split('/') : [];
        let html = '<button class="breadcrumb-item" data-path="">🏠 Racine</button>';
        let accPath = '';
        parts.forEach((part, idx) => {
            accPath += (idx > 0 ? '/' : '') + part;
            html += `<button class="breadcrumb-item" data-path="${accPath}">${part}</button>`;
        });
        breadcrumb.innerHTML = html;
        breadcrumb.querySelectorAll('.breadcrumb-item').forEach(btn => {
            btn.addEventListener('click', () => {
                loadContents(btn.dataset.path);
            });
        });
    };

    // Load Directory Contents
    const loadContents = async (path) => {
        currentPath = path;
        updateBreadcrumb(path);
        fileTree.innerHTML = '<div class="loading">Chargement...</div>';
        
        try {
            const url = `${API_BASE}/contents${path ? '/' + path : ''}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            
            if (Array.isArray(data)) {
                renderFileList(data);
            } else {
                // Single file case
                fileTree.innerHTML = '<div class="error-message">Ce chemin pointe vers un fichier unique</div>';
            }
        } catch (err) {
            console.error(err);
            fileTree.innerHTML = '<div class="error-message">Erreur lors du chargement. Limite API atteinte ou chemin invalide.</div>';
        }
    };

    // Render File/Folder List
    const renderFileList = (items) => {
        fileTree.innerHTML = '';
        const dirs = items.filter(i => i.type === 'dir').sort((a, b) => a.name.localeCompare(b.name));
        const files = items.filter(i => i.type === 'file').sort((a, b) => a.name.localeCompare(b.name));
        
        [...dirs, ...files].forEach(item => {
            const div = document.createElement('div');
            div.className = 'file-item';
            const icon = item.type === 'dir' ? '📁' : getFileIcon(item.name);
            const size = item.type === 'dir' ? '' : `<span class="size">${humanSize(item.size)}</span>`;
            div.innerHTML = `
                <span class="icon">${icon}</span>
                <span class="name">${item.name}</span>
                ${size}
            `;
            div.addEventListener('click', () => {
                document.querySelectorAll('.file-item').forEach(el => el.classList.remove('active'));
                div.classList.add('active');
                if (item.type === 'dir') {
                    loadContents(item.path);
                } else {
                    loadFile(item);
                }
            });
            fileTree.appendChild(div);
        });

        if (items.length === 0) {
            fileTree.innerHTML = '<div class="loading">Dossier vide</div>';
        }
    };

    // Load and Display File Content
    const loadFile = async (fileItem) => {
        currentFileData = fileItem;
        fileName.textContent = fileItem.name;
        fileIcon.textContent = getFileIcon(fileItem.name);
        editBtn.style.display = 'block';
        viewerBody.innerHTML = '<div class="loading">Chargement du fichier...</div>';
        
        try {
            const res = await fetch(fileItem.url);
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            
            if (data.encoding === 'base64' && data.content) {
                const decoded = atob(data.content.replace(/\n/g, ''));
                renderFileContent(decoded, fileItem.name);
            } else if (data.download_url) {
                const contentRes = await fetch(data.download_url);
                const text = await contentRes.text();
                renderFileContent(text, fileItem.name);
            } else {
                viewerBody.innerHTML = '<div class="error-message">Format de fichier non supporté</div>';
            }
        } catch (err) {
            console.error(err);
            viewerBody.innerHTML = '<div class="error-message">Erreur lors du chargement du fichier</div>';
        }
    };

    // Render File Content with Appropriate Formatting
    const renderFileContent = (content, filename) => {
        const ext = filename.split('.').pop().toLowerCase();
        
        if (ext === 'md' || ext === 'markdown') {
            viewerBody.innerHTML = `<div class="file-content markdown">${simpleMarkdown(content)}</div>`;
        } else {
            // Detect language for syntax highlighting
            const languageMap = {
                'js': 'javascript',
                'py': 'python',
                'ps1': 'powershell',
                'sh': 'bash',
                'json': 'json',
                'yml': 'yaml',
                'yaml': 'yaml',
                'html': 'markup',
                'xml': 'markup',
                'css': 'css',
                'txt': 'none'
            };
            
            const language = languageMap[ext] || 'none';
            
            if (language !== 'none' && typeof Prism !== 'undefined') {
                const highlighted = Prism.highlight(content, Prism.languages[language], language);
                viewerBody.innerHTML = `<pre class="file-content language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
            } else {
                const pre = document.createElement('pre');
                pre.className = 'file-content';
                pre.textContent = content;
                viewerBody.innerHTML = '';
                viewerBody.appendChild(pre);
            }
        }
    };

    // Simple Markdown Parser
    const simpleMarkdown = (text) => {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[huplb])/gm, '<p>')
            .replace(/(?<![>])$/gm, '</p>');
    };

    // Open GitHub edit page for the current file
    const openEditOnGitHub = () => {
        if (!currentFileData || !currentFileData.path) return;
        const editUrl = `https://github.com/${OWNER}/${REPO}/edit/${defaultBranch}/${currentFileData.path}`;
        window.open(editUrl, '_blank');
    };

    // Event Listeners
    if (editBtn) {
        editBtn.addEventListener('click', openEditOnGitHub);
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            loadContents(currentPath);
        });
    }

    // Initialize
    const boot = () => {
        if (booted) return;
        booted = true;
        loadRepoMeta();
        loadContents('');
    };

    if (requireAuth()) {
        boot();
    }

    window.addEventListener('supabase-auth-changed', (evt) => {
        if (evt.detail?.session) {
            boot();
        }
    });
});
