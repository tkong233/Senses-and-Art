// libraries
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

// compnents
import ImageGrid from './ImagePicker/ImageGrid';
import ZoomedImagePage from './ImagePicker/ZoomedImagePage';

// css
import './App.css';
import 'antd/dist/antd.css'

// test images
//import img1 from './testImages/1.png';
//import img2 from './testImages/2.png';
//import img3 from './testImages/3.png';
//import img4 from './testImages/4.png';
//import img5 from './testImages/5.png';
//import img6 from './testImages/6.png';
//import img7 from './testImages/7.png';
//import img8 from './testImages/8.png';

class App extends React.Component {
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
/* 
    state = {
      images : [
          {
              id : 0,
              image : img1,
              title : "A Tent in the Rockies",
              artist : "John Singer Sargent",
              date : "1916",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 1,
              image : img2,
              title : "El Jaleo",
              artist : "John Singer Sargent",
              date : "1882",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 2,
              image : img3,
              title : "Nocturne, Blue and Silver: Battersea Reach",
              artist : "James McNeil Whistler",
              date : "",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 3,
              image : img4,
              title : "YoYo Falls",
              artist : "John Singer Sargent",
              date : "1916",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 4,
              image : img5,
              title : "Scenes from the Tale of Genji ",
              artist : "Kano Tsunenobu",
              date : "1677"
          },
          {
              id : 5,
              image : img6,
              title : "Porpoises",
              artist : "Charles Herbert Woodbury",
              date : "1916",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 6,
              image : img7,
              title : "The Lido",
              artist : "Paul H. Tilton",
              date : "1894",
              contributor : "Isabella Stewart Gardner Museum",
          },
          {
              id : 7,
              image : img8,
              title : "The Terrace, St. Tropez",
              artist : "Henri Matisse",
              date : "1904",
              contributor : "Isabella Stewart Gardner Museum",
          },
      ]
  } */

    render() {
      return (
        <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact render={() => <ImageGrid images={this.state.images}/>}/>
                  <Route path="/:imageId" render={(props) => <ZoomedImagePage images={this.state.images} {...props}/>}/>
              </Switch>
          </Router>
        </div>
      );
    }
  }

export default App;
