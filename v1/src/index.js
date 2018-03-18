import _ from 'lodash';
import React, { Component } from 'react'; 
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Get a youtube api key
const API_KEY = 'AIzaSyCHpua9hCNlXdg45Nn53m8BrFxAfDT8AN0';



//Create new component
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState ({ 
            videos:videos,
            selectedVideo: videos[0]
             });  // equivalent to videos: videos
        });

    }

    render() {
    console.log('index.App');
    // only call videoSearch once every 300msec.
    const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);

    return (
        <div> 
         <SearchBar onSearchTermChange= {videoSearch} />
         <VideoDetail video = {this.state.selectedVideo}/>
         <VideoList 
            onVideoSelect= {selectedVideo =>this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
    );
   }
}


// put generated component on the page.

React.render(<App />, document.querySelector('.container'));