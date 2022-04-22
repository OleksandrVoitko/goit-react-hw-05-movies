import { Outlet } from "react-router";
import { Link, Header } from "./Navigation.styled";

const Navigation = () => (
  <Header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    <Outlet />
  </Header>
);

export default Navigation;
