import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate(); // Use useNavigate hook
    const { title, price, image, rating,  } = product;
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating.rate);
        const hasHalfStar = rating.rate % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" />);
        }

        return stars;
    };

    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img
                className='p-2 img-fluid'
                variant="top"
                src={image}
                alt={title}
            />
            <Card.Body>
                <div className='d-flex align-item-center justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex">
                        {renderStars()}
                    </div>
                </div>
                <Card.Text>
                    Price: ${price}
                </Card.Text>
                <div className="btns d-flex justify-content-around">
                    <Button variant="primary">Add to Cart</Button>
                    <Button variant="primary" onClick={() => {
                        navigate(`/details`)
                    }}>Description</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
