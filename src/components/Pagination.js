// Pagination.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
    const items = [];

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="d-flex justify-content-center mt-4">
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default ProductPagination;
