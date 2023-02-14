import { Link } from "react-router-dom";
import "./newsitem.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";

export default function NewsItem({ e, favourite, setFavourite }) {
  const { source, title, description, url, urlToImage, publishedAt, content } =
    e;
  const letter = source.name.charAt(0);

  function save() {
    const saveItem = { title: title, url: url };
    const find = favourite.find((e) => e.title == title);
    if (find == undefined) {
      setFavourite((prev) => [...prev, saveItem]);
    } else {
      alert("already added");
    }
    console.clear();
  }
  useEffect(() => {
    localStorage.setItem("favouriteList", JSON.stringify(favourite));
    // console.table(favourite);
  });
  return (
    <div className="card">
      <Card>
        <CardHeader
          style={{ height: "40px" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {letter}
            </Avatar>
          }
          title={source.name}
          subheader={publishedAt}
          action={
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                save();
              }}
            >
              <FavoriteIcon />
            </IconButton>
          }
        />
        <a href={url} target="_blank">
          <CardMedia
            component="img"
            height="194"
            image={urlToImage}
            alt="image not found"
          />
          <CardContent style={{ height: "70px" }}>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </a>
      </Card>
    </div>
  );
}
