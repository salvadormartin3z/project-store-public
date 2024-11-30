import React, { useState } from 'react';
import Header from './components/Header';
import BooksTable from './components/BooksTable';

const App = () => {
    const [language, setLanguage] = useState('en');
    const [seed, setSeed] = useState(42);
    const [likes, setLikes] = useState(3.7);
    const [reviews, setReviews] = useState(4.7);

    const handleSeedChange = () => setSeed(Math.floor(Math.random() * 1000000));

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white text-center p-8 rounded-lg shadow-lg w-full max-w-4xl">
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
                <BooksTable
                    seed={seed}
                    language={language}
                    likes={likes}
                    reviews={reviews}
                />
            </div>
        </div>
    );
};

export default App;
