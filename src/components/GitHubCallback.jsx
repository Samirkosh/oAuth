import { useEffect } from "react";
import { useNavigate } from "react-router";

export const GitHubCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      fetch("http://localhost:4000/auth/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            navigate("/profile");
          } else {
            console.error("Ошибка токена:", data);
          }
        })
        .catch((err) => console.error("Ошибка авторизации", err));
    }
  }, []);

  return <p>Авторизация через GitHub...</p>;
};
