import { Card } from "react-bootstrap";
import Rating from "./Rating";

export default function Product({ product }) {
  return (
    <Card className="p-3 my-3 rounded">
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong className="text-primary">{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.reviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Rating.defaultProps = {
  color: "#f8e825",
};
