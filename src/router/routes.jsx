import { createBrowserRouter, Link } from "react-router";
import { LayoutPage } from "../layout/LayoutPage";
import { GitHubCallback } from "../components/GitHubCallback";
import { RepositoriesPage } from "../pages/RepositoriesPage";
import { PrivateRouter } from "./PrivateRouter";
import { GitHubLogin } from "../components/GitHubLogin";
import { Profile } from "../pages/Profile";
import { UserSearchPage } from "../pages/UserSearchPage";
import { UserReposPage } from "../pages/UserReposPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <GitHubLogin />,
  },
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "/callback",
        element: <GitHubCallback />,
      },
      {
        path: "/repositories",
        element: (
          <PrivateRouter>
            <RepositoriesPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/user",
        element: (
          <PrivateRouter>
            <UserSearchPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/:login",
        element: (
          <PrivateRouter>
            <UserReposPage />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 Not Found</h1>
        <button>
          <Link to="/">Go to home</Link>
        </button>
      </div>
    ),
  },
]);
