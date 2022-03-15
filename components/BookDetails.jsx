import { useParams } from "react-router-dom";

const BookDetails = () => {
  let id = useParams();
  return <div>{id.id}</div>;
};

export default BookDetails;
