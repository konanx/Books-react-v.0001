import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Search from "./Search";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import { Link } from "react-router-dom";

const Result = () => {
  const [text, setText] = useState("");

  const [books, setBooks] = useState([]);
  const [content, setContent] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    fetchApi(baseUrl, { setBooks });
  }, []);

  useEffect(() => {
    if (content.length === 0) {
      setContent(books);
    }
  }, [books]);

  useEffect(() => {
    setEmpty(false);
    if (text !== "") {
      const newContent = books.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setContent(newContent);
      if (newContent.length === 0) {
        setEmpty(true);
      }
    } else {
      setContent(books);
    }
  }, [text]);

  return (
    <>
      <Search text={text} setText={setText} />
      <Container
        maxWidth="lg"
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {empty && (
          <Typography variant="h3" sx={{ marginTop: 1 }}>
            Nie znaleziono wyników dla wyszukiwania
          </Typography>
        )}
        {content &&
          content.map((book, index) => (
            <Box
              key={book.id}
              sx={{
                width: 360,
                height: 410,
                backgroundColor: "#085E7D",
                m: 1,
              }}
            >
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  width: "100%",

                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    book.imgUrl ||
                    "https://images-na.ssl-images-amazon.com/images/I/51yzXRsP89L._SX319_BO1,204,203,200_.jpg"
                  }
                  alt=""
                  width="80%"
                  height="230px"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", p: 1 }}>
                <Typography variant="h6">
                  {book.title.length > 25
                    ? `${book.title.slice(0, 25)}...`
                    : book.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "right", marginLeft: "auto" }}
                >
                  {book.price}
                </Typography>
              </Box>
              <Typography
                color="lightgray"
                variant="subtitle2"
                sx={{ paddingX: 1 }}
              >
                {book.description.length > 120
                  ? `${book.description.slice(0, 120)}...`
                  : book.description}
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 1,
                }}
              >
                <Link to={`details/${book.id}`}>
                  <Button variant="contained" color="success">
                    ZOBACZ SZCZEGÓŁY!
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
      </Container>
    </>
  );
};

export default Result;
