// libraries
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';


// compnents
import WelcomePage from './WelcomePage/WelcomePage';
import ImageGridPage from './ImagePicker/ImageGridPage';
import ZoomedImagePage from './ImagePicker/ZoomedImagePage';
import SongPickerPage from './SongPicker/SongPickerPage';
import MeditationPage from './MeditationPage/MeditationPage';
import SharePage from './SharePage/SharePage';
import MapPage from './MapPage/MapPage';


// layout
import NavBar from './Layout/NavBar';
import SideBar from './Layout/SideBar';
import Footer from './Layout/Footer';
import Line from './Layout/Line';
import { Layout} from 'antd'; 

// css
import './App.css';
import 'antd/dist/antd.css'

class App extends React.Component {
  /*
    state = {
        images:[]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/images')
            .then(response => {
                let images = response.data.images;
                this.setState({images});
                console.log(response);
            });
    }
    */
    state = {
        imageSelectEnabled : true,

        selectedImageId : 0,
        selectedSongId : 1,
        journal : null,
        songs : [
            {
                id : 1,
                title : "Air on the G String",
                performer : "",
                composer : "Johann Sebastian Bach",
                instrument : "Flute, Harpsichord",
                contributor : "Isabella Stewart Gardner Museum",
                song_contributor_url: "",
                song_path : "/songs/Air on the G String.mp3"
            },
            {
                id : 2,
                title : "Alone",
                performer : "Tomas Vallejo",
                composer : "Tomas Vallejo",
                instrument : "Guitar",
                contributor : "Tomas Vallejo",
                song_path : "/songs/Alone.wav"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            ,
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            }
        ],

        images : [
            // image_path = id + 1
            {
                id : 0,
                image_path : '/images/1.png',
                title : "A Tent in the Rockies",
                artist : "John Singer Sargent",
                date : "1916",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 1,
                image_path : '/images/2.png',
                title : "El Jaleo",
                artist : "John Singer Sargent",
                date : "1882",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 2,
                image_path : '/images/3.png',
                title : "Nocturne, Blue and Silver: Battersea Reach",
                artist : "James McNeil Whistler",
                date : "",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 3,
                image_path : '/images/4.png',
                title : "YoYo Falls",
                artist : "John Singer Sargent",
                date : "1916",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 4,
                image_path : '/images/5.png',
                title : "Scenes from the Tale of Genji ",
                artist : "Kano Tsunenobu",
                date : "1677"
            },
            {
                id : 5,
                image_path : '/images/6.png',
                title : "Porpoises",
                artist : "Charles Herbert Woodbury",
                date : "1916",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 6,
                image_path : '/images/7.png',
                title : "The Lido",
                artist : "Paul H. Tilton",
                date : "1894",
                contributor : "Isabella Stewart Gardner Museum",
            },
            {
                id : 7,
                image_path : '/images/8.png',
                title : "The Terrace, St. Tropez",
                artist : "Henri Matisse",
                date : "1904",
                contributor : "Isabella Stewart Gardner Museum",
            },
        ]
    }

//   componentDidMount() {
//     let new_image_path = this.state.images.map((image) => {
//         let path = image.image_path;
//         return ( { ...image, image_path : process.env.PUBLIC_URL + path } );
//     })
//     this.setState(new_image_path);
//   }

  selectImageHandler(id) {
      this.setState({
          selectedImageId : id
      })
  }

  toggleImageSelectEnabled() {
        let curIamgeSelectEnabled = this.state.imageSelectEnabled;
        this.setState({
            imageSelectEnabled : !curIamgeSelectEnabled
        })
  }

  onClickSelectImageButton(id) {
      this.selectImageHandler(id);
      this.toggleImageSelectEnabled();
  }

  onClickSelectSongButton(id) {
      this.setState({
          selectedSongId : id
      })
  }

    render() {
    
      return (
        <div className="App">
        <Layout>
            <Router>
            <Line height="10px" color="#C75E94"/>
                <NavBar/>
                <Layout>
                    <SideBar/>
                    <Switch className="main">
                            <Route path="/" exact render={() => <WelcomePage/>}/>
                            <Route path="/map" exact render={() => <MapPage/>}/>
                            <Route path="/songs" exact render={() => <SongPickerPage songs={this.state.songs}
                                                                            image={this.state.images[this.state.selectedImageId]}
                                                                            onClickSelectSongButton={this.onClickSelectSongButton.bind(this)}
                                                                            />}/>
                            <Route path="/images" exact render={() => <ImageGridPage images={this.state.images}
                                                                        imageSelectEnabled={true}/>}/>
                            <Route path="/meditation" exact render={() => <MeditationPage song={this.state.songs[this.state.selectedSongId - 1]}
                                                                                        image={this.state.images[this.state.selectedImageId]}/>}/>
                            <Route path="/share" exact render={() => <SharePage/>}/>
                            <Route path="/:imageId" render={(props) => <ZoomedImagePage images={this.state.images}
                                                                                        onClickSelectImageButton={this.onClickSelectImageButton.bind(this)}
                                                                                        toggleImageSelectEnabled={this.toggleImageSelectEnabled.bind(this)}
                                                                                {...props}/>}/>
                    </Switch>
                </Layout>
            </Router>
          <Line height="10px" color="white"/>
          <Line height="10px" color="#EFBB40"/>
          <Line height="5px" color="white"/>
          <Line height="10px" color="#C75E94"/>
          <Footer/>
          </Layout>
        </div>
      );
    }
  }

export default App;
