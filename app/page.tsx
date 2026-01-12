import { Avatar, Container, Divider } from '@mui/material'
import Image from 'next/image'
import SectionFeature from './components/section-feature'
import SectionHero from './components/section-hero'
import SectionContact from './components/section-contact'
import SectionHighlight from './components/section-highlight'
import SectionFooter from './components/section-footer'
import { ITEMS_FEATURES } from './items-feature'
import { ITEMS_HIGHLIGHT } from './items-highlight'
import SectionHeader from './components/section-header'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

/** Page d&apos;accueil */

export default function PageHome() {
  return (
    <Container
      sx={{
        maxWidth: { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      }}
    >
      <SectionHeader
        items={[
          { title: 'Haut', href: '#haut' },
          { title: 'Piliers', href: '#piliers' },
          { title: 'Contact', href: '#contact' },
          { title: 'Avantages', href: '#avantages' },
          { title: 'Bas', href: '#bas' },
        ]}
      />
      <div id="haut">
        <SectionHero
          component="title"
          title="Structurer pour Avancer"
          subtitle={
            <>
              Inscrivez-vous gratuitement et accédez à des applications
              interactives.
              <br />
              Transformez vos idées en réalité dès maintenant !
            </>
          }
          text_contained="Commencer"
          icon_contained={<PlayArrowIcon />}
          image={
            <Image
              src="/logo_SP_contour_20250831.png"
              alt="Logo"
              width={150}
              height={150}
            />
          }
        />
      </div>
      <Divider />
      <div id="piliers">
        <SectionFeature
          title="Les Trois Piliers"
          subtitle="Cliquez sur chaque carte pour avoir une visualisation et découvrir plus de détails sur les piliers."
          items={ITEMS_FEATURES}
        />
      </div>
      <Divider />
      <div id="contact">
        <SectionContact
          title="Qui suis-je ?"
          subtitle={
            <>
              Je suis RICHARD Wilfried Programmeur statisticien,
              <br />
              créateur d&apos;applications interactives
            </>
          }
          description={
            <>
              Expert en statistiques, je suis convaincu qu&apos;un projet réussi
              commence toujours par une analyse rigoureuse et des données
              fiables.
              <br />
              <br />
              J&apos;imagine et développe des solutions numériques innovantes
              pour combler les manques, optimiser vos processus et transformer
              vos idées en résultats concrets.
              <br />
              <br />
              N&apos;hésitez pas à me contacter pour toute collaboration ou
              question.
            </>
          }
          image={
            <Avatar
              src="/perso_kerbal.png"
              alt="Photo de Wilfried RICARD"
              sx={{ width: 150, height: 150 }}
            />
          }
          text_outlined="Prendre rendez-vous"
        />
      </div>
      <Divider />
      <div id="avantages">
        <SectionHighlight
          title="Les Avantages"
          subtitle={
            <>
              Une plateforme construite pour vous offrir une expérience fiable,
              sécurisée et intuitive.
              <br />
              Explorez comment chaque élément a été pensé pour votre succès.
            </>
          }
          text_outlined="Accéder au blog"
          items={ITEMS_HIGHLIGHT}
        />
      </div>
      <Divider />
      <div id="bas">
        <SectionFooter />
      </div>
    </Container>
  )
}
