import axios from "axios";

export const baseUrl = "https://bookshelves.p.rapidapi.com/books";

export const fetchApi = async (url, { setBooks }) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": ".d",
      "x-rapidapi-key": ".d",
    },
  });
  setBooks(data.Books);
};
