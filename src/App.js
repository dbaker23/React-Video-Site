import React, {Component} from 'react';
import { SearchBar } from './SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD43JDNPlyD6Ta4mKHTvN3b3OolmGY3QGk';

YTSearch(
  {key: API_KEY, term: 'surboards'}, 
  function(data) { console.log(data) }
);

export class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>Hello World!</h1>
        <SearchBar />
      </div>
    );
  }
}
