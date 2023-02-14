import { Fragment, useEffect, useState } from "react";
import NewsItem from "../newsitem/newsitem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function DisplayResult({
  search,
  setSearch,
  favourite,
  setFavourite,
  page,
  setPage,
}) {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const url1 =
      search != ""
        ? `https://newsapi.org/v2/everything?apiKey=794e8d64a0c54faea73079e75b51cef6&sortBy=publishedAt&q=${search}&searchIn=title&pageSize=10&page=${page}&language=en`
        : `https://newsapi.org/v2/top-headlines?country=my&apiKey=794e8d64a0c54faea73079e75b51cef6&sortBy=publishedAt&searchIn=title&pageSize=10&page=${page}&language=en`;

    try {
      const response = await axios.get(url1);
      if (page != 1) {
        setList((prev) => [...prev, ...response.data.articles]);
      } else {
        setList(response.data.articles);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   // fetch(
  //   //   "https://newsapi.org/v2/everything?apiKey=794e8d64a0c54faea73079e75b51cef6&sortBy=publishedAt&q=`${search}`&searchIn=title&pageSize=100&page=1d&language=en"
  //   // )
  //   //   .then((res) => {
  //   //     res.json().then((data) => {
  //   //       setList(data.articles);
  //   //     });
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // }, []);

  useEffect(() => {
    fetchData();
    console.log(search);
  }, [page, search]);
  // const filtered = list.filter(
  //   (e) =>
  //     e?.source.name.toLowerCase().includes(search.toLowerCase()) ||
  //     e?.title.toLowerCase().includes(search.toLowerCase()) ||
  //     (e?.description &&
  //       e?.description?.toLowerCase().includes(search.toLowerCase())) ||
  //     (e?.content && e?.content?.toLowerCase().includes(search.toLowerCase()))
  // );
  const item =
    list.length === 0
      ? []
      : list.map((e, index) => {
          return (
            <Grid item sm={5} lg={4} key={index}>
              <NewsItem
                e={e}
                favourite={favourite}
                setFavourite={setFavourite}
              />
            </Grid>
          );
        });

  return (
    <>
      <div>Search result: {item.length}</div>
      <Grid container direction={"row"} className="list">
        {item.length > 0 ? item : <h1>No results</h1>}
      </Grid>
      <div style={{ textAlign: "center", margin: "0 auto" }}>
        <Button
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Load More
        </Button>
      </div>
    </>
  );
}
