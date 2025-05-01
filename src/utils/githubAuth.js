import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_GITHUB_CLIENT_SECRET;

export const getAccessToken = async (code) => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token";

  const { data } = await axios.post(
    url,
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return data.access_token;
};
