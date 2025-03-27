import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const errorMessages: Record<string, string> = {
  "Invalid credentials":
    "Credenciales inválidas. Por favor, verifica tu nombre de usuario y contraseña.",
  "User not found":
    "Usuario no encontrado. Asegúrate de que el nombre de usuario sea correcto.",
  "Internal server error": "Error interno del servidor. Intenta más tarde.",
  "Network Error": "Error de red. Verifica tu conexión a internet.",
  default:
    "Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo.",
};

const useAuth = () => {
  const [error, setError] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      setError("Por favor, ingresa todos los campos.");
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.data?.access_token) {
        localStorage.setItem("jwtToken", response.data.access_token);
        router.push("/dashboard");
      } else {
        setError("No se pudo iniciar sesión. Intenta de nuevo.");
        setOpenSnackbar(true);
      }
    } catch (error: any) {
      const errorDetail =
        (error.response?.data?.detail as keyof typeof errorMessages) ||
        "default";
      const errorMessage =
        errorMessages[errorDetail] || errorMessages["default"];

      setError(errorMessage);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return {
    handleLogin,
    error,
    openSnackbar,
    handleCloseSnackbar,
  };
};

export default useAuth;
