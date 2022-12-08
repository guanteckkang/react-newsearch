import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>PAGES NOT FOUND</h1>
      <Link to="/">
        <Button>
          <HomeIcon color="primary" />
        </Button>
      </Link>
    </>
  );
}
