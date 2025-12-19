
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Liste exhaustive des finalités possibles de collecte et traitement des données personnelles
export const purposes: {
    label: string;
    key: string;
    used: boolean;
    retention: string;
    legalBasis: string;
    description: string;
}[] = [
    {
        label: 'Gestion du compte utilisateur',
        key: 'account',
        used: true,
        retention: 'Durée de la relation contractuelle + 3 ans',
        legalBasis: 'Exécution du contrat (art. 6.1.b RGPD)',
        description: 'Gestion et l’accès à votre compte utilisateur sur le site.'
    },
    {
        label: 'Gestion des commandes et de la relation client',
        key: 'orders',
        used: true,
        retention: 'Durée de la relation contractuelle + 3 ans',
        legalBasis: 'Exécution du contrat (art. 6.1.b RGPD)',
        description: 'Gérer vos commandes, le suivi client, la facturation et la relation commerciale.'
    },
    {
        label: 'Tenue de la comptabilité',
        key: 'accounting',
        used: true,
        retention: '10 ans',
        legalBasis: 'Obligation légale (art. L123-22 code de commerce, art. 6.1.c RGPD)',
        description: 'Respecter les obligations comptables et fiscales imposées par la loi.'
    },
    {
        label: 'Sécurité du site et prévention de la fraude',
        key: 'security',
        used: true,
        retention: '13 mois',
        legalBasis: 'Intérêt légitime (art. 6.1.f RGPD)',
        description: 'Prévenir la fraude et détecter les activités suspectes.'
    },
    {
        label: 'Mesure et analyse du trafic',
        key: 'analytics',
        used: true,
        retention: '13 mois',
        legalBasis: 'Consentement ou intérêt légitime (art. 6.1.a/f RGPD)',
        description: 'Améliorer les performances grâce à des statistiques anonymes et proposer de nouvelles fonctionnalités.'
    },
    {
        label: 'Prospection commerciale et fidélisation',
        key: 'marketing',
        used: false,
        retention: '3 ans à compter du dernier contact',
        legalBasis: 'Consentement (art. 6.1.a RGPD)',
        description: 'Envoyer des offres commerciales, newsletters, fidéliser les clients et prospects.'
    },
    {
        label: 'Transmission aux partenaires commerciaux',
        key: 'partners',
        used: false,
        retention: '3 ans à compter du dernier contact',
        legalBasis: 'Consentement (art. 6.1.a RGPD)',
        description: 'Avec votre accord.'
    },
    {
        label: 'Gestion des réclamations et du support',
        key: 'support',
        used: true,
        retention: 'Durée du traitement de la demande + 3 ans',
        legalBasis: 'Exécution du contrat/intérêt légitime (art. 6.1.b/f RGPD)',
        description: 'Gérer vos demandes, réclamations et assurer le support client.'
    },
    {
        label: 'Affichage de publicités ciblées',
        key: 'ads',
        used: false,
        retention: '13 mois',
        legalBasis: 'Consentement (art. 6.1.a RGPD)',
        description: 'En fonction de votre navigation.'
    },
];
// Liste exhaustive des données personnelles potentielles collectées sur le site
export const collectedData: { label: string; key: string; collected: boolean; description?: string }[] = [
    { label: 'Nom', key: 'name', collected: false },
    { label: 'Prénom', key: 'firstname', collected: false },
    { label: 'Adresse email', key: 'email', collected: true, description: 'Essentielle pour l\'identification' },
    { label: 'Adresse postale', key: 'address', collected: false },
    { label: 'Numéro de téléphone', key: 'phone', collected: false },
    { label: 'Date de naissance', key: 'birthdate', collected: false },
    { label: 'Identifiant de connexion', key: 'login', collected: false },
    { label: 'Mot de passe (haché)', key: 'password', collected: true, description: 'Illisible pour nous' },
    { label: 'Adresse IP', key: 'ip', collected: true, description: 'Pour ce rappeler de vous' },
    { label: 'Données de navigation (pages visitées, clics, etc.)', key: 'navigation', collected: false },
    { label: 'Données de localisation', key: 'location', collected: false },
    { label: 'Historique de commandes', key: 'orders', collected: true, description: 'Pour gérer vos achats (obligation légale)' },
    { label: 'Informations de paiement', key: 'payment', collected: false },
    { label: 'Préférences utilisateur', key: 'preferences', collected: false },
    { label: 'Correspondances (emails, messages)', key: 'messages', collected: true },
    { label: 'Photo de profil', key: 'avatar', collected: true, description: 'Pour personnaliser votre compte (optionnel)' },
    { label: 'Consentements', key: 'consents', collected: true },
];

export const thirdParties: { label: string; key: string; collected: boolean; description?: string; name: string; address?: string }[] = [
      { label: 'Hébergeur du site', key: 'heberger-site', collected: true, description: 'Affichage', name: 'Github', address: '' },
      { label: 'Hébergeur code', key: 'heberger-code', collected: true, description: '', name: 'Github', address: '' },
      { label: 'Stockage', key: 'stockage', collected: true, description: 'Authentification et base de données', name: 'Supabase', address: '' },
      { label: 'API de contact et mail', key: 'api-contact-mail', collected: true, description: 'API de contact et mail', name: 'Azure', address: '' },
];

interface PrivacyProps {
    lastUpdate: string;
    contactAddress: string;
    contactEmail: string;
    cookiesPageUrl?: string;
    domain: string;
    dpoEmail?: string;
    editorName: string;
    editorAddress: string;
    siteName: string;
    thirdParties?: { name: string; role: string; address?: string }[];
}


// Chargement des valeurs par défaut depuis les variables d'environnement
const defaultPrivacyProps: PrivacyProps = {
    domain: process.env.MYCOMPANY_DOMAIN || '#',
    dpoEmail: process.env.MYCOMPANY_EMAIL || '#',
    contactAddress: process.env.MYCOMPANY_ADDRESS || '#',
    contactEmail: process.env.MYCOMPANY_EMAIL || '#',
    cookiesPageUrl: '/cookies',
    editorAddress: process.env.EDITOR_ADDRESS || '#',
    editorName: process.env.EDITOR_NAME || '#',
    lastUpdate: process.env.PRIVACY_LAST_UPDATE || '#',
    siteName: process.env.MYCOMPANY_NAME_SITE || '#',
};

export default function Privacy(props: Partial<PrivacyProps>) {
    const {
        domain,
        dpoEmail,
        contactAddress,
        contactEmail,
        cookiesPageUrl,
        editorAddress,
        editorName,
        lastUpdate,
        siteName,
    } = { ...defaultPrivacyProps, ...props };

    return (
        <Container maxWidth="md" >

            {/* Introduction */}
            <Typography id="intro" data-section-label="Intro" variant="h1" align="center">
                Politique de confidentialité
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
                {siteName} accorde une grande importance à la protection de votre vie privée (Application du règlement UE 2016/679 RGPD).<br />
                Ce document vous informe sur l’utilisation et la protection de vos données personnelles,
                ainsi que sur les raisons de leur traitement.<br />
                Politique à jour au {lastUpdate} pour le site internet <b>{domain}</b>.
            </Typography>

            {/* Propriété intellectuelle */}
            <Typography variant="h5">Propriété intellectuelle et identité</Typography>
            <Typography variant="body1">
                Le contenu original du site (textes, images, graphismes, logo, design, etc.) est protégé par le droit d’auteur et la propriété intellectuelle.
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie de ces applications est interdite sans l’autorisation écrite préalable de l’éditeur.
            </Typography>
            <Typography variant="body1">
                Le code source du site peut inclure des composants open source soumis à leurs propres licences, que vous pouvez réutiliser dans le respect de ces licences.
                L’usurpation d’identité, la contrefaçon de marque ou la copie de contenus originaux du site à des fins de tromperie ou de confusion est strictement interdite.
            </Typography>
            <Typography variant="body1">
                Pour toute question sur la réutilisation du code ou des contenus, contactez-nous à l’adresse indiquée.
            </Typography>
            <Typography variant="body1">
                Je serai heureux de collaborer avec toute personne souhaitant améliorer ce site ou ses applications.
                N’hésitez pas à me <Link href="/home#contact">contacter</Link> pour toute suggestion, contribution ou proposition d’amélioration.
                Une rétribution ou une reconnaissance pourra être envisagée selon la nature de l’apport.
            </Typography>

            {/* Modification de la politique */}
            <Typography variant="h5" >Modification de la politique</Typography>
            <Typography variant="body1" >
                <ul>
                    <li>Nous nous réservons le droit de modifier la présente politique à tout moment.</li>
                    <li>Toute modification sera publiée sur cette page avec la date de mise à jour.</li>
                    <li>Nous vous informerons de toute modification substantielle.</li>
                    <li>Toute reproduction du site est interdite sans autorisation.</li>
                    <li>Tous les applications du site sont protégés par le droit d’auteur.</li>
                </ul>
            </Typography>
            <Typography variant="body1" >
                Des informations complémentaires pourront vous être communiquées si nécessaire dans le cas d’une commande particulière.
            </Typography>

            {/* Définitions et références légales */}
            <Typography variant="h5" >Définitions et références légales</Typography>
            <ul>
                <li><b>Données personnelles</b> : toute information permettant d’identifier une personne physique.</li>
                <li><b>Données d’utilisation</b> : informations collectées automatiquement (adresse IP, navigateur, etc.).</li>
                <li><b>Cookie</b> : petit fichier texte stocké sur votre appareil.</li>
                <li><b>Traqueur</b> : technologie permettant de suivre l’utilisateur (cookies, balises, etc.).</li>
                <li><b>Service</b> : service fourni par ce site.</li>
            </ul>

            {/* Responsable et collecteur des données */}
            <Typography variant="h5" >Coordonnées</Typography>
            <Typography variant="body1" >
                Cette politique s’applique à toutes les prestations apportées par {editorName}.<br/>
                <b>Demeurant :</b>{editorAddress}<br/>
                <b>Email :</b> {contactEmail}<br/>
                <b>Adresse :</b> {contactAddress}
            </Typography>
            <Typography variant="body1">
                <b>Nom de l’entreprise :</b> [Votre Entreprise]<br/>
                <b>Forme juridique :</b> [SAS/SARL/Auto-entrepreneur/etc.]<br/>
                <b>Adresse du siège :</b> [Votre adresse]<br/>
                <b>SIRET :</b> [Votre SIRET]<br/>
                <b>RCS :</b> [Votre RCS]<br/>
                <b>Capital social :</b> [Votre capital]<br/>
                <b>Directeur de la publication :</b> [Nom du responsable]<br/>
                <b>Contact :</b> <Link href="mailto:[Votre email]">[Votre email]</Link>
            </Typography>
            <Typography variant="body1" >
                {editorName} peut collecter des informations vous concernant même si vous n’êtes pas client (prospects, donneurs d’ordres, employés de prestataires, réseau de distribution partenaires, etc.).
            </Typography>

            {/* Mode et lieu de traitement */}
            <Typography id="mode" data-section-label="Mode" variant="h3" >
                Mode et lieu de traitement des données
            </Typography>
            <Typography variant="body1" >
                Les données sont traitées à notre siège et dans tout lieu où sont situées les parties impliquées dans le traitement.
                Nous mettons en œuvre des mesures de sécurité appropriées pour empêcher l’accès, la divulgation, la modification ou la destruction non autorisée des données.
            </Typography>
            <Typography variant="body1" >
                Les données peuvent être accessibles à certains membres de notre équipe (administration, marketing, support, etc.) et à des sous-traitants désignés.
                La liste à jour des sous-traitants peut être demandée à tout moment.
            </Typography>
            <Typography variant="body1" >
                Vos informations peuvent être transmises à nos sous-traitants techniques
                (hébergement, maintenance, paiement, statistiques, etc.) ou à nos partenaires commerciaux avec votre consentement.
            </Typography>
            <Typography variant="body1" >
                Les informations recueillies ne sont pas vendues sans votre consentement, sauf nécessité pour répondre à une demande ou transaction.
                Elles peuvent être transmises à des tiers techniques (paiement, expédition, etc.).
            </Typography>
            <Typography variant="body1" >
                La transmission de vos informations s’effectue toujours sur la base de contrats respectant la réglementation en matière de protection des données personnelles.
            </Typography>

            {/* Utilisation des cookies */}
            <Typography variant="h5" >Utilisation des cookies</Typography>
            <Typography variant="body1" >
                Lorsque vous consultez notre site, des cookies ou traceurs peuvent être enregistrés sur votre appareil.
                Ils servent à améliorer votre navigation et votre expérience sur le site.
                Vous pouvez limiter leur utilisation dans les paramètres de votre navigateur ou en utilisant la navigation privée.
            </Typography>
            <Typography variant="body1" >
                Nous utilisons des cookies pour améliorer l’accès au site et identifier les visiteurs réguliers.
                Un bandeau d’alerte vous permet d’accepter ou refuser les cookies.
                Les cookies ne contiennent aucune information confidentielle.
            </Typography>
            <Typography variant="body1">
                <b>Gestion des cookies :</b> <a href={cookiesPageUrl}>{cookiesPageUrl}</a>
            </Typography>

            {/* Sécurité des données */}
            <Typography variant="h5" >Sécurité des données personnelles</Typography>
            <Typography variant="body1" >
                Nous utilisons des mesures de sécurité pour protéger vos informations personnelles transmises en ligne (cryptage, serveurs sécurisés, accès restreint aux employés habilités).
            </Typography>


            {/* Services tiers et partenaires */}
            <Typography variant="h5" >Services tiers et partenaires</Typography>
            <Typography variant="body1">
                Les données personnelles recueillies sont traitées selon des protocoles sécurisés. Elles peuvent être transmises à :
            </Typography>
            <ul>
                <li>Prestataires de services et sous-traitants réalisant des prestations pour notre compte</li>
                <li>Mandataires indépendants, intermédiaires, réseau de distribution</li>
                <li>Autorités financières, judiciaires ou agences d’État, organismes publics sur demande</li>
                <li>Professions réglementées (avocats, notaires, commissaires aux comptes, huissiers)</li>
            </ul>
            <Typography variant="body1" paragraph>
                Nous utilisons des services tiers susceptibles de collecter des données (ex : Google Analytics, Google Fonts, formulaires de contact, etc.).
            </Typography>
            <ul>
                <li><b>Google Analytics</b> : analyse du trafic, cookies et données d’utilisation. <Link href="https://business.safety.google/privacy/" target="_blank">Politique Google</Link> | <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank">Opt-out</Link></li>
                <li><b>Google Fonts</b> : affichage de polices, données d’utilisation. <Link href="https://business.safety.google/privacy/" target="_blank">Politique Google</Link></li>
                <li><b>Formulaire de contact</b> : nom, prénom, email, message.</li>
                {/* Ajoutez ici d'autres services utilisés */}
            </ul>
            {thirdParties.filter(item => item.collected).length > 0 && (
                <>
                    <Typography variant="h5" >Traitement des données avec des tiers</Typography>
                    <Typography variant="body1" >
                        Liste des prestataires :
                    </Typography>
                    <ul>
                        {thirdParties.filter(item => item.collected).map((partner, index) => (
                            <li key={index}>
                                <b>{partner.name}</b> - {partner.label}{partner.address ? ` - ${partner.address}` : ''}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* Types de données collectées */}
            <Typography id="donnees" data-section-label="Données" variant="h3" >Type de données personnelles collectées</Typography>
            <Typography variant="body1">
                Nous collectons les informations relatives à votre identité (civilité, nom, prénom, adresse...)
                que vous acceptez de nous communiquer lorsque vous complétez un formulaire sur le site, créez un compte,
                effectuez une commande ou nous contactez directement.
                Le caractère obligatoire des informations à fournir est indiqué par un astérisque.
            </Typography>
            <Typography variant="body1" >
                Nous collectons également les informations relatives aux transactions (numéro de transaction, détail de la commande),
                au suivi de la relation commerciale (commandes, factures, correspondances) et aux règlements effectués.
            </Typography>
            <Typography variant="body1" >
                Nous utilisons aussi des dispositifs et technologies d'observation de l'activité pour recueillir automatiquement des informations sur votre connexion et votre navigation sur le site
                (adresse IP, géolocalisation, type de navigateur, temps passé sur chaque page, liens cliqués, etc.).
                Ces informations sont anonymisées et nous aident à améliorer et personnaliser votre expérience, sécuriser le site et résoudre les problèmes techniques.
            </Typography>
            <Typography variant="body1" >
                Pour les besoins du site, nous collectons les informations suivantes :
            </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Données collectées :</Typography>
                <ul>
                    {collectedData.filter(item => item.collected).map((item) => (
                        <li key={item.key}><b>{item.label}</b>{item.description ? ` : ${item.description}` : ''}</li>
                    ))}
                </ul>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Données non collectées :</Typography>
                <ul>
                    {collectedData.filter(item => !item.collected).map((item) => (
                        <li key={item.key}><b>{item.label}</b>{item.description ? ` : ${item.description}` : ''}</li>
                    ))}
                </ul>
            <Typography variant="body1">
                Ces données sont essentielles pour l’exécution du contrat ou de mesures précontractuelles (art. 6.b RGPD).
            </Typography>
            <Typography variant="body1" >
                Nous nous engageons à mettre en œuvre un traitement de ces informations et données
                respectueux de votre vie privée et conforme à la législation en vigueur en France et en Europe.
                Nous utilisons des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos informations.
            </Typography>

            {/* Finalités et bases légales */}
            <Typography id="finalites" variant="h5" sx={{ mt: 4 }}>Finalités et bases légales</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Finalités utilisées :</Typography>
            <ul>
                {purposes.filter(item => item.used).map((item) => (
                    <li key={item.key}>
                        <b>{item.label}</b>{item.description ? ` : ${item.description}` : ''}<br/>
                        <i>Durée de conservation :</i> {item.retention}<br/>
                        <i>Base légale :</i> {item.legalBasis}
                    </li>
                ))}
            </ul>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Finalités non utilisées :</Typography>
            <ul>
                {purposes.filter(item => !item.used).map((item) => (
                    <li key={item.key}>
                        <b>{item.label}</b> : {item.description}<br/>
                        <i>Durée de conservation :</i> {item.retention}<br/>
                        <i>Base légale :</i> {item.legalBasis}
                    </li>
                ))}
            </ul>

            {/* Vos droits */}
            <Typography id="droits" data-section-label="Droits" variant="h3" >Vos droits</Typography>
            <Typography variant="body1" >
                Vous pouvez accéder à vos données, demander leur rectification ou leur suppression, limiter ou vous opposer à leur traitement,
                retirer votre consentement à tout moment, demander la portabilité de vos données, et définir des directives sur leur sort après votre décès.
            </Typography>
            <ul>
                <li>Retirer votre consentement à tout moment pour les données non essentielles</li>
                <li>Droit d’accès (copie des données sur demande)</li>
                <li>Droit de rectification</li>
                <li>Droit d’opposition au traitement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit à l’oubli (effacement sous conditions légales)</li>
                <li>Droit d’introduire une réclamation auprès d’une autorité de contrôle</li>
                <li>Droit de connaître les mesures de sécurité</li>
            </ul>
            <Typography variant="body1" >
                Pour exercer vos droits ou pour toute question sur le traitement de vos informations,
                Vous pouvez contacter notre Délégué à la Protection des Données (DPO) : <b>{dpoEmail}</b>
            </Typography>
            <Typography variant="body1" paragraph>
                En cas de litige, vous pouvez saisir la CNIL (www.cnil.fr) ou l’autorité de contrôle compétente.
            </Typography>
        </Container>
    );
}
