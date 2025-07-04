import { useState } from 'react';
import { login as loginRequest } from '../services/AuthService';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSnackbar } from 'notistack';

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginRequest(form);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      const message = err?.response?.data?.message || "Credenciais inválidas.";
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
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
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
            disabled={!form.email || !form.password}
          >
            Entrar
          </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Não tem uma conta?{' '}
            <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Registre-se
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
