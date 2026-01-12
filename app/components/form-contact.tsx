'use client'

import { Button, Paper, Stack, TextField, Alert } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Image from 'next/image'
import SectionHero from './section-hero'
import { sendMessage } from '../utils/send-message'
import { useState } from 'react'

export interface propMessage {
  email: string
  subject: string
  message: string
}

/** Formulaire de contact minimal */
export default function FormContact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async () => {
    setLoading(true)
    setAlert(null)
    try {
      await sendMessage({ email, subject, message })
      // Reset form
      setEmail('')
      setSubject('')
      setMessage('')
      setAlert({
        type: 'success',
        message: 'Votre message a été envoyé avec succès!',
      })
    } catch (error) {
      setAlert({
        type: 'error',
        message: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Paper elevation={24} sx={{ minWidth: { xs: '100%', md: 400 } }}>
      <Stack direction="column" spacing={2}>
        <SectionHero
          component="div"
          title="Envoyez-moi un message"
          description="Remplissez le formulaire ci-dessous et je vous répondrai au plus vite."
          icon_title={
            <Image
              src="/logo_SP_contour_20250831.png"
              alt="Logo"
              width={40}
              height={40}
            />
          }
        />
        {alert && (
          <Alert
            severity={alert.type}
            onClose={() => setAlert(null)}
          >
            {alert.message}
          </Alert>
        )}
        {/* Input email */}
        <TextField
          label="Votre email"
          fullWidth={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Input subject */}
        <TextField
          label="Sujet"
          fullWidth={true}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {/* Input message */}
        <TextField
          label="Votre message"
          multiline={true}
          rows={4}
          fullWidth={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </Button>
      </Stack>
    </Paper>
  )
}
