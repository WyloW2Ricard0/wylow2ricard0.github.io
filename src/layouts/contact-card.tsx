import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import Paperhead from '../components/paper-head';

const ContactCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Intégrer avec un service d'email (EmailJS, Supabase Functions, etc.)
      // Pour maintenant, on simule juste l'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setStatus('success');
      setMessage('Merci ! Votre message a été envoyé avec succès.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <Paperhead
      content={[
        <Box key="header" sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h4">
            Envoyez-moi un message
          </Typography>
          <Typography variant="body2">
            Remplissez le formulaire ci-dessous et je vous répondrai au plus vite.
          </Typography>
        </Box>,
        message && (
          <Alert
            key="alert"
            severity={status === 'success' ? 'success' : 'error'}
          >
            {message}
          </Alert>
        ),
        <Box key="form" component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 600 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            placeholder="jean.dupont@email.com"
            InputLabelProps={{ shrink: true }}
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Sujet"
            name="subject"
            placeholder="Collaboration sur un projet"
            InputLabelProps={{ shrink: true }}
            value={formData.subject}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            placeholder="Bonjour, je souhaiterais échanger à propos de..."
            InputLabelProps={{ shrink: true }}
            value={formData.message}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
            multiline
            rows={6}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={status === 'loading'}
            sx={{ mt: 3 }}
          >
            {status === 'loading' ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Envoi en cours...
              </>
            ) : (
              'Envoyer le message'
            )}
          </Button>
        </Box>,
      ]}
    />
  );
};

export default ContactCard;
