import { useState } from "react";
import { Button, Typography, TextField, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;

export const GitHubLogin = () => {
  const [clientSecret, setClientSecret] = useState("");

  const handleLogin = () => {
    if (!clientSecret.trim()) {
      alert("Пожалуйста, введите client_secret");
      return;
    }

    localStorage.setItem("client_secret", clientSecret);

    const loginUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user%20repo`;
    window.location.href = loginUrl;
  };

  return (
    <MainBlock>
      <PaperBlock elevation={4}>
        <>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            GitHub OAuth
          </Typography>

          <TextField
            label="Client Secret"
            type="password"
            fullWidth
            value={clientSecret}
            onChange={(e) => setClientSecret(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            onClick={handleLogin}
          >
            Войти через GitHub
          </StyledButton>
        </>
      </PaperBlock>
    </MainBlock>
  );
};

const MainBlock = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f2f5",
});

const PaperBlock = styled(Paper)({
  padding: "32px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  textTransform: "none",
  fontSize: "16px",
  width: "100%",
});
