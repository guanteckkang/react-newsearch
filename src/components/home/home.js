import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./home.css";

import Header from "../header/header";
import Favourite from "../favourite/favourite";
import DisplayResult from "../displayresult/displayresult";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogIn = JSON.parse(localStorage.getItem("isLogIn"));
    if (isLogIn === false) {
      navigate("/");
    }
  }, []);

  const [search, setSearch] = useState("");
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item lg={1} className="header">
          <Header search={search} setSearch={setSearch} />
        </Grid>
        <Grid item lg={11} className="content">
          <Grid container direction={"row"}>
            <Grid item lg={2.5} className="favourite">
              <Favourite />
            </Grid>
            <Grid item lg={9.5} className="displayresult">
              <DisplayResult search={search} setSearch={setSearch} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
