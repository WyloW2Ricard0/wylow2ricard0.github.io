import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm';

// TODO: Remplacez par l'URL de votre projet Supabase (ex: https://abcxyz.supabase.co)
const SUPABASE_URL = window.SUPABASE_URL;
// TODO: Utilisez la clef "anon public" et non la clef service role (ne jamais exposer sb_secret_* au client)
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY;

let supabase;
try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        throw new Error('Supabase URL/anon key manquants');
    }
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (err) {
    console.warn('Supabase non initialisé :', err.message);
}
const state = { session: null };

const qs = (selector) => document.querySelector(selector);
let authBar, statusEl, loginBtn, logoutBtn, modal, modalClose, form;
let emailInput, passwordInput, signupBtn, messageEl, guard, guardBtn, protectedLinks;

const setStatus = (text, tone = 'muted') => {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.dataset.tone = tone;
};

const emitSessionChange = () => {
    window.dispatchEvent(new CustomEvent('supabase-auth-changed', { detail: { session: state.session } }));
};

const showMessage = (text, tone = 'info') => {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.dataset.tone = tone;
};

const toggleModal = (open) => {
    if (!modal) return;
    modal.classList.toggle('open', open);
    if (open && emailInput) emailInput.focus();
};

const syncUI = () => {
    const loggedIn = Boolean(state.session);
    if (authBar) authBar.dataset.state = loggedIn ? 'auth' : 'anon';
    if (logoutBtn) logoutBtn.style.display = loggedIn ? 'inline-flex' : 'none';
    if (loginBtn) loginBtn.style.display = loggedIn ? 'none' : 'inline-flex';
    if (guard) guard.classList.toggle('hidden', loggedIn);
    if (loggedIn) {
        const email = state.session?.user?.email || 'Utilisateur connecté';
        setStatus(`Connecté en tant que ${email}`, 'success');
    } else {
        setStatus('Connexion requise pour accéder aux projets.', 'warning');
    }
    emitSessionChange();
};

const refreshSession = async () => {
    if (!supabase) {
        showMessage('Configurez SUPABASE_URL et SUPABASE_ANON_KEY.', 'warning');
        return;
    }
    const { data, error } = await supabase.auth.getSession();
    if (error) {
        console.error('Supabase session error', error);
        showMessage('Erreur de session, réessayez.', 'error');
    }
    state.session = data?.session || null;
    syncUI();
};

const handleLogin = async (event) => {
    event.preventDefault();
    if (!supabase) {
        showMessage('Supabase non configuré.', 'error');
        return;
    }
    if (!emailInput || !passwordInput) return;
    showMessage('Connexion en cours...', 'info');
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.value.trim(),
        password: passwordInput.value
    });
    if (error) {
        console.error(error);
        showMessage('Connexion impossible. Vérifiez vos identifiants.', 'error');
        return;
    }
    state.session = data.session;
    toggleModal(false);
    showMessage('Connexion réussie.', 'success');
    syncUI();
};

const handleSignup = async () => {
    if (!supabase) {
        showMessage('Supabase non configuré.', 'error');
        return;
    }
    if (!emailInput || !passwordInput) return;
    showMessage('Création du compte...', 'info');
    const { data, error } = await supabase.auth.signUp({
        email: emailInput.value.trim(),
        password: passwordInput.value
    });
    if (error) {
        console.error(error);
        showMessage('Inscription impossible. Email déjà utilisé ?', 'error');
        return;
    }
    state.session = data.session;
    showMessage('Compte créé. Vérifiez votre email si la confirmation est activée.', 'success');
    toggleModal(false);
    syncUI();
};

const handleLogout = async () => {
    if (!supabase) {
        state.session = null;
        syncUI();
        return;
    }
    await supabase.auth.signOut();
    state.session = null;
    syncUI();
};

const requireAuth = () => {
    if (state.session) return true;
    toggleModal(true);
    showMessage('Connexion requise pour continuer.', 'warning');
    return false;
};

const wireProtectedLinks = () => {
    protectedLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (!requireAuth()) {
                e.preventDefault();
            }
        });
    });
};

const wireEvents = () => {
    if (loginBtn) loginBtn.addEventListener('click', () => toggleModal(true));
    if (modalClose) modalClose.addEventListener('click', () => toggleModal(false));
    if (form) form.addEventListener('submit', handleLogin);
    if (signupBtn) signupBtn.addEventListener('click', handleSignup);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (guardBtn) guardBtn.addEventListener('click', () => toggleModal(true));
};

const init = async () => {
    // Sélectionner les éléments DOM après le chargement
    authBar = qs('#auth-bar');
    statusEl = qs('#auth-status');
    loginBtn = qs('#btn-auth-open');
    logoutBtn = qs('#btn-auth-logout');
    modal = qs('#auth-modal');
    modalClose = qs('#auth-close');
    form = qs('#auth-form');
    emailInput = qs('#auth-email');
    passwordInput = qs('#auth-password');
    signupBtn = qs('#auth-signup');
    messageEl = qs('#auth-message');
    guard = qs('#auth-guard');
    guardBtn = qs('#guard-login');
    protectedLinks = document.querySelectorAll('[data-requires-auth]');
    
    wireEvents();
    wireProtectedLinks();
    await refreshSession();
    if (supabase) {
        supabase.auth.onAuthStateChange(async (_event, session) => {
            state.session = session;
            syncUI();
        });
    }
};

document.addEventListener('DOMContentLoaded', init);

// Expose helper for other scripts if needed
window.__supabaseAuth = { supabase, requireAuth };
