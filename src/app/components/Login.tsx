"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Depurando
    console.log("Login con:", { email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.8rem", sm: "2rem" } }}>
        Iniciar sesión
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "90%", sm: "400px" },
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <TextField
          label="Correo electrónico"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          Iniciar sesión
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        ¿No tienes una cuenta?{" "}
        <Link href="/register" underline="always" sx={{ fontWeight: "bold" }}>
          crea una aquí
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
