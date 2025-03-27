"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Container,
  Alert,
} from "@mui/material";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error, openSnackbar, handleCloseSnackbar } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: 2,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" mb={3}>
          Iniciar sesión
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Iniciar sesión
          </Button>

          <Typography mt={2} align="center">
            ¿No tienes una cuenta?{" "}
            <a href="/signup" style={{ textDecoration: "underline" }}>
              Crea una aquí
            </a>
          </Typography>
        </Box>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Login;
