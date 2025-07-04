import { useState } from 'react';
import { register } from '../services/AuthService';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      enqueueSnackbar("Usuário registrado com sucesso!", { variant: 'success' });
      navigate('/login');
    } catch (err) {
      const message = err?.response?.data?.message || "Erro ao registrar.";
      enqueueSnackbar(message, { variant: 'error' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Card sx={{ width: 400, padding: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Registro
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome"
              fullWidth
              margin="normal"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
             disabled={!form.email || !form.password || !form.fullName}
            >
              Registrar
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Já tem uma conta?{' '}
            <Link to="/login" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Faça login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
