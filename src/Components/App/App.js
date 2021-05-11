import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';
import { Spotify } from '../../util/Spotify.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [{
                name: 'River Island Theme',
                artist: 'Sean Oldfield',
                album: 'Xmas Bangers',
                id: 1
            }],
            playListName: 'Banging Tunes',
            playListTracks: [{
                name: 'River Island Theme',
                artist: 'Sean Oldfield',
                album: 'Xmas Bangers',
                id: 1
            }],
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        let newPlayListTracks = this.state.playListTracks.push(track);
        this.setState({ playListTracks: newPlayListTracks });
    }

    removeTrack(track) {
        let currentTracks = this.state.playListTracks;
        let newPlayListTracks = currentTracks.filter(savedTrack => savedTrack.id !== track.id);
        this.setState({ playListTracks: newPlayListTracks });
    }

    updatePlaylistName(name) {
        this.setState({ playListName: name });
    }

    savePlaylist() {
        let trackURIs = [];
        let playListTracks = this.state.playListTracks;
        for (let i = 0; i < playListTracks.length; i++) {
            trackURIs.push(playListTracks[i].uri);
        }
    }

    search(term) {
        Spotify.search(term).then(searchResults => {
			this.setState({
				searchResults: searchResults
			})
		});
    }
        
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
