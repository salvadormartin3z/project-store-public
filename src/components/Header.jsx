import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ language, setLanguage, seed, setSeed, handleSeedChange, likes, setLikes, reviews, setReviews }) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Book Store Generator</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                <div>
                    <label className="block font-medium text-gray-700">Language:</label>
                    <select
                        className="border rounded p-2"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="en">English (US)</option>
                        <option value="de">German (DE)</option>
                        <option value="fr">French (FR)</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Seed:</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            className="border rounded p-2"
                            value={seed}
                            onChange={(e) => setSeed(Number(e.target.value))}
                        />
                        <button
                            className="ml-2 bg-blue-500 text-white p-2 rounded"
                            onClick={handleSeedChange}
                        >
                            Random Seed
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Likes:</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={likes}
                        onChange={(e) => setLikes(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Reviews:</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        className="border rounded p-2"
                        value={reviews}
                        onChange={(e) => setReviews(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    seed: PropTypes.number.isRequired,
    setSeed: PropTypes.func.isRequired,
    handleSeedChange: PropTypes.func.isRequired,
    likes: PropTypes.number.isRequired,
    setLikes: PropTypes.func.isRequired,
    reviews: PropTypes.number.isRequired,
    setReviews: PropTypes.func.isRequired,
};

export default Header;
