import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";

export const UserReposPage = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/repos`, {
        params: { per_page: 100 },
      })
      .then((res) => setRepos(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [login]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Публичные репозитории: {login}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : repos.length === 0 ? (
        <Typography>Нет публичных репозиториев</Typography>
      ) : (
        repos.map((repo) => (
          <Card key={repo.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">
                <Link href={repo.html_url} target="_blank" underline="hover">
                  {repo.name}
                </Link>
              </Typography>
              <Typography variant="body2">{repo.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};
