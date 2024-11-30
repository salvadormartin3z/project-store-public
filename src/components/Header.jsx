
const Header = ({ language, setLanguage, seed, setSeed, handleSeedChange, likes, setLikes, reviews, setReviews }) => {
    return (
        <div>
            <label>
                Language:
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en">English (US)</option>
                    <option value="de">German (DE)</option>
                    <option value="fr">French (FR)</option>
                </select>
            </label>
            <label>
                Seed:
                <input type="number" value={seed} onChange={(e) => setSeed(Number(e.target.value))} />
                <button onClick={handleSeedChange}>Random Seed</button>
            </label>
            <label>
                Likes:
                <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={likes}
                    onChange={(e) => setLikes(Number(e.target.value))}
                />
            </label>
            <label>
                Reviews:
                <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={reviews}
                    onChange={(e) => setReviews(Number(e.target.value))}
                />
            </label>
        </div>
    );
};

export default Header;
