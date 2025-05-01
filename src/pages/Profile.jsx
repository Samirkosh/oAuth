import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    bio: "",
    company: "",
    location: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    fetch("https://api.github.com/user", {
      headers: { Authorization: `token ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setEditData({
          name: data.name || "",
          bio: data.bio || "",
          company: data.company || "",
          location: data.location || "",
        });
      })
      .catch(console.error);
  }, []);

  const handleChange = (field) => (e) => {
    setEditData({ ...editData, [field]: e.target.value });
  };

  const handleSave = () => {
    const token = localStorage.getItem("access_token");
    fetch("https://api.github.com/user", {
      method: "PATCH",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setUser(updatedUser);
        alert("Профиль обновлён");
      })
      .catch((err) => {
        console.error(err);
        alert("Ошибка обновления профиля");
      });
  };

  if (!user) return <Typography align="center">Загрузка профиля...</Typography>;

  return (
    <ProfileContainer elevation={4}>
      <Row>
        <Avatar
          src={user.avatar_url}
          alt="avatar"
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h6">{user.login}</Typography>
          <MuiLink href={user.html_url} target="_blank" rel="noreferrer">
            Перейти в GitHub
          </MuiLink>
        </Box>
      </Row>

      <Row>
        <Label>Имя</Label>
        <TextField
          fullWidth
          value={editData.name}
          onChange={handleChange("name")}
        />
      </Row>

      <Row>
        <Label>Описание</Label>
        <TextField
          fullWidth
          multiline
          value={editData.bio}
          onChange={handleChange("bio")}
        />
      </Row>

      <Row>
        <Label>Компания</Label>
        <TextField
          fullWidth
          value={editData.company}
          onChange={handleChange("company")}
        />
      </Row>

      <Row>
        <Label>Местоположение</Label>
        <TextField
          fullWidth
          value={editData.location}
          onChange={handleChange("location")}
        />
      </Row>

      <Row style={{ justifyContent: "flex-end", marginTop: "12px" }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </Row>

      <Typography>Email: {user.email || "Нет данных"}</Typography>
    </ProfileContainer>
  );
};

const ProfileContainer = styled(Paper)(() => ({
  maxWidth: "600px",
  margin: "40px auto",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderRadius: "12px",
}));

const Row = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const Label = styled(Typography)({
  minWidth: "120px",
  fontWeight: 500,
  color: "#555",
});
