import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { generateBooks } from '../utils/dataGenerator';

const BooksTable = ({ seed, language, likes, reviews }) => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    // Efecto para regenerar datos al cambiar props
    useEffect(() => {
        const initialBooks = generateBooks(seed, language, likes, reviews, 20);
        setBooks(initialBooks);
        setPage(1); // Reiniciar la paginación
    }, [seed, language, likes, reviews]);

    // Cargar más datos para el infinite scroll
    const fetchMoreBooks = () => {
        const nextBatch = generateBooks(seed + page, language, likes, reviews, 10);
        setBooks((prevBooks) => [...prevBooks, ...nextBatch]);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <InfiniteScroll
            dataLength={books.length}
            next={fetchMoreBooks}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <table className="table-auto border-collapse w-full bg-white shadow-md rounded">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">#</th>
                        <th className="border p-2">ISBN</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Author</th>
                        <th className="border p-2">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border p-2 text-center">{index + 1}</td>
                            <td className="border p-2">{book.isbn}</td>
                            <td className="border p-2">{book.title}</td>
                            <td className="border p-2">{book.author}</td>
                            <td className="border p-2">{book.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </InfiniteScroll>
    );
};

BooksTable.propTypes = {
    seed: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
};

export default BooksTable;
