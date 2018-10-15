import _ from 'lodash';
import React, {Component} from 'react';
import { SearchBar } from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video_detail';
import './index.css';

const API_KEY = 'AIzaSyD43JDNPlyD6Ta4mKHTvN3b3OolmGY3QGk';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch( term ) {
    YTSearch({ key: API_KEY, term: term }, ( videos ) => { 
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <h1>Youtube Video Search:</h1>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );
  }
}
