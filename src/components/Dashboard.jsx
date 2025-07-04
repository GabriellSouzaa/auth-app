import { useAuth } from '../context/AuthContext';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#e0f7fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', padding: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Bem-vindo, {user?.fullName}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Email:</strong> {user?.email}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <strong>Criado em:</strong> {new Date(user?.createdAt).toLocaleString('pt-BR')}
          </Typography>
          <Button variant="contained" color="error" fullWidth onClick={logout}>
            Sair
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
