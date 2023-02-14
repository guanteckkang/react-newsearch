import { Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import orangeButton from "../orangeButton";
import "./header.css";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Header({ search, setSearch, page, setPage }) {
  const [isLogIn, setIsLogIn] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogIn(JSON.parse(localStorage.getItem("isLogIn")));
  }, []);

  function searchitem() {
    setSearch(text);
    setPage(1);
  }

  return (
    <div className="header">
      <div>
        <Link to="/" className="logo">
          <Button style={{ textTransform: "capitalize" }}>MyNewsToday</Button>
        </Link>
      </div>
      <div className="input">
        <TextField
          style={{ color: "white" }}
          id="standard_basic"
          label="Search..."
          variant="standard"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
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
            setText("");
            setSearch("");
            setPage(1);
          }}
        >
          X
        </Button>
      </div>
      <div className="loginout">
        <Stack direction="row" spacing={1}>
          {isLogIn == true ? (
            <Chip label="admin" />
          ) : (
            <Chip label="guest" variant="outlined" />
          )}
        </Stack>
        <Button
          onClick={() => {
            localStorage.setItem("isLogIn", JSON.stringify(false));
            navigate("/");
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
