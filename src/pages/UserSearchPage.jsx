import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

export const UserSearchPage = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    if (!q) return setUsers([]);

    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/search/users`, {
        params: { q, per_page: 10 },
      });
      setUsers(res.data.items);
      setTotalCount(res.data.total_count);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Поиск пользователей
      </Typography>
      <TextField
        fullWidth
        label="Введите имя пользователя"
        value={query}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="body1">
            Найдено пользователей: {totalCount}
          </Typography>
          <List>
            {users.map((user) => (
              <ListItem
                key={user.id}
                button
                onClick={() => navigate(`/user/${user.login}`)}
              >
                <ListItemText primary={user.login} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};
