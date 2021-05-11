import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: [{
            name: 'River Island Theme',
            artist: 'Sean Oldfield',
            album: 'Xmas Bangers',
            id: 1
        }] };
    }
        
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    {/* Add a SearchBar component */}
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        {/* Add a Playlist component */}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
