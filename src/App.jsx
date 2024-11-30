import { useState } from 'react';
import Header from './components/Header';
import BooksTable from './components/BooksTable';
import { generateBooks } from './utils/dataGenerator';

const App = () => {
    const [language, setLanguage] = useState('en');
    const [seed, setSeed] = useState(42);
    const [likes, setLikes] = useState(3.7);
    const [reviews, setReviews] = useState(4.7);

    const handleSeedChange = () => setSeed(Math.floor(Math.random() * 1000000));

    const books = generateBooks(seed, language, likes, reviews, 20);

    return (
        <div>
            <Header
                language={language}
                setLanguage={setLanguage}
                seed={seed}
                setSeed={setSeed}
                handleSeedChange={handleSeedChange}
                likes={likes}
                setLikes={setLikes}
                reviews={reviews}
                setReviews={setReviews}
            />
            <BooksTable books={books} seed={seed} language={language} likes={likes} reviews={reviews} />
        </div>
    );
};

export default App;
