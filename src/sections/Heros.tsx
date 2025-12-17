import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigationActions } from '../hooks/use-navigation-actions';

interface HeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    image?: React.ReactNode;
}

export default function Hero({
  title = 'Structurer pour Avancer',
  subtitle = 'Inscrivez-vous gratuitement et accédez à des applications interactives.\nTransformez vos idées en réalité dès maintenant !',
  description = '',
  ctaText = 'Commencer',
  image,
}: HeroProps) {

  const { goSignUp } = useNavigationActions();

  // Extraire le dernier mot du titre
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const titleWithoutLastWord = titleWords.join(' ');
    return (
        <Stack
            id="hero"
            data-section-label="Hero"
            sx={{ scrollMarginTop: '80px' }}
            m={4}
            flexDirection="row"             // disposition en ligne
            alignItems="center"             // centrer verticalement
            justifyContent="space-around"   // espacement symétrique autour des éléments
        >
            {image}
            <Box
                display={"flex"}
                flexDirection={"column"}
            >
                <Typography
                    variant="h2"        // titre principal
                    textAlign="center"  // centrer le texte
                >
                    {titleWithoutLastWord}{' '}
                    <Box component="span" color="secondary.main" fontWeight="inherit">
                        {lastWord}
                    </Box>
                </Typography>
                <Stack
                    alignItems="center"     // centrer verticalement
                    justifyContent="center" // centrer horizontalement
                    flex={1}                // occuper tout l'espace disponible
                >
                    <Typography
                        variant="subtitle1"     // sous-titre
                        textAlign="center"      // centrer le texte
                        whiteSpace="pre-wrap"   // conserver les sauts de ligne
                    >
                        {subtitle}
                    </Typography>
                    {ctaText && (
                        <Button
                            variant="contained"            // bouton principal
                            onClick={goSignUp}             // naviguer vers la page d'inscription
                        >
                            {ctaText}
                        </Button>
                    )}
                    <Typography
                        variant="body2"               // texte de description
                        textAlign="center"            // centrer le texte
                    >
                        {description}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    );
}
