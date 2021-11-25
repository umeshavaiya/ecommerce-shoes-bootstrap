import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button, Image, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../redux/action'
import { Link } from 'react-router-dom'
import Hed from '../components/Shoes/hed';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const checkout = () => {
    history.push('/login?redirect=shipping');
  }

  return (
    <>
      <Hed />
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <p>Your products</p>
          {cartItems.length === 0 ? (
            <h2>Your Cart is Empty!
              <Link to="/">Go Back</Link>
            </h2>
          ) : (
            <ListGroup variant="flush">
              {
                cartItems.map(item => (
                  <ListGroupItem>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()]
                            .map((x) => (
                              <option key={x + 1} value={x + 1}>{x + 1}</option>
                            ))}
                        </Form.Control>
                        <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                          <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>
                  subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
                $ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
              </ListGroupItem>
              <Button type="button" variant="dark" className="btn-block" disabled={
                cartItems.length === 0} onClick={checkout}>Procedd to Checkout</Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen;
