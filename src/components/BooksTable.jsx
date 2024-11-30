import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { generateBooks } from '../utils/dataGenerator';

const BooksTable = ({ seed, language, likes, reviews }) => {
    const [books, setBooks] = useState(generateBooks(seed, language, likes, reviews, 20));
    const [page, setPage] = useState(1);

    const fetchMoreBooks = () => {
        const newBooks = generateBooks(seed + page, language, likes, reviews, 10);
        setBooks((prevBooks) => [...prevBooks, ...newBooks]);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <InfiniteScroll dataLength={books.length} next={fetchMoreBooks} hasMore={true} loader={<h4>Loading...</h4>}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </InfiniteScroll>
    );
};

export default BooksTable;
