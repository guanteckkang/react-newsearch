import { Link, useNavigate, Navigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Header({ search, setSearch }) {
  const navigate = useNavigate();

  function searchitem() {
    console.log(search);
    setSearch("");
  }

  return (
    <>
      <Link to="/">
        <Button style={{ textTransform: "capitalize" }}>MyNewsToday</Button>
      </Link>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          searchitem();
        }}
      >
        Search
      </Button>
      <Button
        onClick={() => {
          localStorage.setItem("isLogIn", JSON.stringify(false));
          navigate("/");
        }}
      >
        Logout
      </Button>
    </>
  );
}
