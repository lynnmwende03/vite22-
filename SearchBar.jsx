import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    onSearch(input.trim());
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '10px', padding: '8px', width: '200px' }}
      />
      <button onClick={handleClick} style={{ padding: '8px 16px' }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
