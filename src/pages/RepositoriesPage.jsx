import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import axios from "axios";

export const RepositoriesPage = () => {
  const [tab, setTab] = useState("public");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchedTabs, setFetchedTabs] = useState({});

  const token = localStorage.getItem("access_token");

  const fetchRepos = async (type) => {
    if (fetchedTabs[type]) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/user/repos`, {
        headers: { Authorization: `token ${token}` },
        params: {
          visibility: type,
          affiliation: "owner",
          per_page: 100,
        },
      });
      setRepos(res.data);
      setFetchedTabs((prev) => ({ ...prev, [type]: true }));
    } catch (e) {
      console.error("Ошибка при загрузке репозиториев:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(tab);
  }, [tab]);

  const handleChange = (_, newTab) => {
    setTab(newTab);
    setRepos([]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Репозитории
      </Typography>
      <Tabs value={tab} onChange={handleChange}>
        <Tab label="Публичные" value="public" />
        <Tab label="Приватные" value="private" />
      </Tabs>

      {loading ? (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mt: 3 }}>
          {repos.length === 0 ? (
            <Typography>Нет репозиториев</Typography>
          ) : (
            repos.map((repo) => (
              <Card key={repo.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      underline="hover"
                    >
                      {repo.name}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    Владелец:{" "}
                    <Link
                      href={repo.owner.html_url}
                      target="_blank"
                      underline="hover"
                    >
                      {repo.owner.login}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};
