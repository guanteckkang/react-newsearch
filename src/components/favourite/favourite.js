import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./favourite.css";

export default function Favourite({ favourite, setFavourite }) {
  function clear() {
    setFavourite([]);
    localStorage.setItem("favouriteList", []);
  }

  const list = favourite.map((e, index) => {
    const { url, title } = e;
    return (
      <div key={index} className="box" style={{ marginBottom: "20px" }}>
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
    );
  });

  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignContent="center"
          >
            <Grid item>Favourite: {favourite.length}</Grid>
            <Grid item>
              <Button className="clear" onClick={clear}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {favourite.length === 0 || favourite === null || favourite === [] ? (
            <>No list</>
          ) : (
            list
          )}
        </Grid>
      </Grid>
    </>
  );
}
