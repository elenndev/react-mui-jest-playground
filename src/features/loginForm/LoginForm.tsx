import React, { useEffect } from "react"
import { TextField, Button, Box, Typography, Paper } from "@mui/material"
import { useLoginForm } from "./useLoginForm";

const LoginForm: React.FC = () => {
  const { email, password, error, handleEmailChange, handlePasswordChange, handleSubmit } = useLoginForm()

  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          inputProps={{ "data-testid": "email-input" }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Senha"
          type="password"
          value={password}
          error={!!error}
          helperText={error}
          onChange={handlePasswordChange}
          inputProps={{ "data-testid": "password-input" }}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          data-testid="login-button"
        >
          Entrar
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm
