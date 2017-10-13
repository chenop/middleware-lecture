import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book}) => (
    <li>
		{ book.title }
        <div className="author">{ book.author.name }</div>
    </li>
);

Book.propTypes = {
	book: PropTypes.object.isRequired,
};

export default Book;