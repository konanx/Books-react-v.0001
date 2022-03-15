import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Result from "./components/Result";
import BookDetails from "./components/BookDetails.jsx";
function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Routes>
          <Route exact path="/" element={<Result />} />
          <Route path="/details/:id" element={<BookDetails />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
