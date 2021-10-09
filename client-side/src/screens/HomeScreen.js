import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, err, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : err ? (
        <h3>{err}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
