import React from "react";
import { Container, Typography} from "@mui/material";

interface CGVProps {
  companyName: string;
  siteName: string;
  siteUrl: string;
  tribunal?: string;
  mediator?: string;
  mediatorEmail?: string;
}

const defaultCGVProps: CGVProps = {
    companyName: process.env.MYCOMPANY_NAME || "#",
    siteName: process.env.MYCOMPANY_NAME_SITE || "#",
    siteUrl: process.env.MYCOMPANY_DOMAIN || "#",
    tribunal: process.env.LEGAL_TRIBUNAL || "#",
    mediator: process.env.LEGAL_MEDIATOR || "#",
    mediatorEmail: process.env.LEGAL_MEDIATOR_EMAIL || "#",
};

const CGV: React.FC<Partial<CGVProps>> = (props) => {
    const {
        companyName,
        siteName,
        siteUrl,
        tribunal,
        mediator,
        mediatorEmail,
    } = { ...defaultCGVProps, ...props };
    return (
    <Container maxWidth="md">
        <Typography variant="h3" align="center">
            CONDITIONS GÉNÉRALES DE VENTE
        </Typography>
        <Typography align="center" variant="subtitle1">
            En vigueur au {new Date().toLocaleDateString()}
        </Typography>
        <Typography variant="body2" align="center">
            Réalisé sur https://www.legalplace.fr – Ce modèle doit être adapté à l'activité.
        </Typography>

        {/* Introduction */}
        <Typography id="application" data-section-label="Application" variant="h5">
            ARTICLE 1 – Champ d’application
        </Typography>
        <Typography>
            Les présentes Conditions Générales de Vente (dites « CGV ») s’appliquent, sans restriction ni réserve,
            à l’ensemble des ventes conclues par {companyName} auprès d’acheteurs non professionnels (« Les Clients »),
            désirant acquérir les produits proposés à la vente sur le site {siteName} ({siteUrl}).
        </Typography>
        <Typography>
            Les caractéristiques principales des produits sont présentées sur le site.
            Le Client est tenu d’en prendre connaissance avant toute commande.
            Le choix et l’achat d’un produit sont de la seule responsabilité du Client.
        </Typography>
        <Typography>
            Les offres de produits s’entendent dans la limite des stocks disponibles.
        </Typography>
        <Typography>
            Les présentes CGV sont accessibles à tout moment sur le site {siteUrl} et prévaudront sur tout autre document.
        </Typography>
        <Typography>
            Le Client déclare avoir pris connaissance des présentes CGV et les avoir acceptées en cochant la case prévue à cet effet avant la mise en œuvre de la procédure de commande en ligne.
        </Typography>

        {/* Prix */}
        <Typography id="prix" data-section-label="Prix" variant="h5">
            ARTICLE 2 – Prix
        </Typography>
        <Typography>
            Les produits sont fournis aux tarifs en vigueur figurant sur le site {siteUrl}, lors de l’enregistrement de la commande par le Vendeur.
            Les prix sont exprimés en Euros, HT et TTC. Les tarifs tiennent compte d’éventuelles réductions consenties par le Vendeur sur le site.
        </Typography>
        <Typography>
            Les prix ne comprennent pas les frais de traitement, d’expédition, de transport et de livraison, facturés en supplément, dans les conditions indiquées sur le site et calculés préalablement à la commande.
        </Typography>
        <Typography>
            Le paiement demandé au Client correspond au montant total de l’achat, y compris ces frais.
            Une facture est établie par le Vendeur et remise au Client lors de la livraison.
        </Typography>

        {/* Commandes */}
        <Typography id="commande" data-section-label="Commande" variant="h5">
            ARTICLE 3 – Commandes
        </Typography>
        <Typography>
            Il appartient au Client de sélectionner sur le site {siteUrl} les produits qu’il désire commander, selon les modalités indiquées.
            La vente ne sera considérée comme valide qu’après paiement intégral du prix. Toute commande passée sur le site constitue la formation d’un contrat conclu à distance entre le Client et le Vendeur.
        </Typography>
        <Typography>
            Le Vendeur se réserve le droit d’annuler ou de refuser toute commande d’un Client avec lequel il existerait un litige relatif au paiement d’une commande antérieure.
        </Typography>
        <Typography>
            Le Client pourra suivre l’évolution de sa commande sur le site.
        </Typography>

        {/* Conditions */}
        <Typography id="condition" data-section-label="Condition" variant="h5">
            ARTICLE 4 – Conditions de paiement
        </Typography>
        <Typography>
            Le prix est payé par voie de paiement sécurisé, selon les modalités proposées sur le site.
            Les paiements effectués par le Client ne seront considérés comme définitifs qu’après encaissement effectif par le Vendeur des sommes dues.
        </Typography>
        <Typography>
            Le Vendeur ne sera pas tenu de procéder à la délivrance des produits commandés par le Client si celui-ci ne lui en paye pas le prix en totalité.
        </Typography>

        {/* Livraisons */}
        <Typography id="livraison" data-section-label="Livraison" variant="h5">
            ARTICLE 5 – Livraisons
        </Typography>
        <Typography>
            Les livraisons interviennent dans un délai de X jours à l’adresse indiquée par le Client lors de sa commande.
            Sauf cas particulier, les produits commandés seront livrés en une seule fois.
        </Typography>
        <Typography>
            Le Vendeur s’engage à faire ses meilleurs efforts pour livrer les produits commandés dans les délais précisés.
            En cas de retard, le Client pourra demander la résolution de la vente dans les conditions prévues par la loi.
        </Typography>
        <Typography>
            Le Client est tenu de vérifier l’état des produits livrés.
            Il dispose d’un délai de X jours à compter de la livraison pour formuler des réclamations, accompagnées de tous les justificatifs y afférents.
        </Typography>

        {/* Transfert de propriété */}
        <Typography id="propriete" data-section-label="Propriété" variant="h5">
            ARTICLE 6 – Transfert de propriété
        </Typography>
        <Typography>
            Le transfert de propriété des produits du Vendeur au Client ne sera réalisé qu’après complet paiement du prix par ce dernier, et ce quelle que soit la date de livraison desdits produits.
        </Typography>

        {/* Droit de rétractation */}
        <Typography id="retractation" data-section-label="Rétractation" variant="h5">
            ARTICLE 7 – Droit de rétractation
        </Typography>
        <Typography>
            Conformément à la législation en vigueur,
            le Client dispose d’un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation et retourner le produit au Vendeur pour échange ou remboursement sans pénalité,
            à l’exception des frais de retour.
        </Typography>

        {/* Garanties */}
        <Typography id="garantie" data-section-label="Garantie" variant="h5">
            ARTICLE 8 – Garanties
        </Typography>
        <Typography>
            Les produits fournis bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés, dans les conditions prévues par la loi.
        </Typography>
        <Typography>
            Toute réclamation, demande d’échange ou de remboursement doit s’effectuer par voie postale à l’adresse du Vendeur dans un délai de 30 jours après livraison.
        </Typography>

        {/* Litiges */}
        <Typography id="litige" data-section-label="Litige" variant="h5">
            ARTICLE 9 – Litiges et médiation
        </Typography>
        <Typography>
            En cas de litige relatif à l’exécution ou à l’interprétation des présentes Conditions Générales de Vente,
            le Client est invité à contacter le service client de {companyName} afin de rechercher une solution amiable.
        </Typography>
        <Typography>
            Si aucun accord amiable n’est trouvé, le Client peut recourir gratuitement à un médiateur de la consommation, conformément aux articles L.612-1 et suivants du Code de la consommation.
            Le médiateur compétent est&nbsp;: {mediator} ({mediatorEmail}).
        </Typography>
        <Typography>
            À défaut de résolution amiable ou de médiation, tout litige sera soumis à la compétence exclusive des tribunaux du ressort de {tribunal},
            même en cas de pluralité de défendeurs ou d’appel en garantie.
        </Typography>
    </Container>
    );
};

export default CGV;
