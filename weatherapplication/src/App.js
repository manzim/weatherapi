import React from 'react';

import './index.css'

const api = {
  key: "877f657465bd8ca9f9d68fc9420eb65c",
  base: "http://api.weatherstack.com/"
}

function App() {
  return (
    <div className="app">
      <section>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          // onChange={e => setQuery(e.target.value)}
          // value={query}
          // onKeyPress={search}
          />
        </div>
        <div className="">
          <div className="location-box">
            <div className="location">
              <div className="date">
                {new Date().toLocaleTimeString()}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
