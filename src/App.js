import React, {Component} from 'react';
import { SearchBar } from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyD43JDNPlyD6Ta4mKHTvN3b3OolmGY3QGk';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'starcraft 2' }, ( videos ) => { 
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
    console.log(this.state.videos);
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>Hello World!</h1>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );
  }
}
