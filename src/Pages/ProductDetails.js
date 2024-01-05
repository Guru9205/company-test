// ProductDetails.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductDetails = () => {
    // const { name, price, imageUrl, description, rating } = product;
    const product = {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
            "rate": 3.6,
            "count": 145
        }
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.title} fluid />
                </Col>
                <Col md={6}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    {product.rating && (
                        <p>
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </p>
                    )}
                    <Button variant="primary">Add to Cart</Button>
                    <Button variant="primary">Buy now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
