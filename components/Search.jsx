import React from "react";
import { Container, TextField, Box, Toolbar } from "@mui/material";
import { ContentPasteSearch } from "@mui/icons-material";

const Search = ({ text, setText }) => (
  <Container maxWidth="lg" sx={{ marginTop: 2, backgroundColor: "#FFD32D" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        py: 2,
      }}
    >
      <ContentPasteSearch sx={{ fontSize: 25, mb: 0.2 }} />
      <TextField
        sx={{ marginLeft: 1 }}
        label="Wyszukaj..."
        variant="standard"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Box>
  </Container>
);

export default Search;
