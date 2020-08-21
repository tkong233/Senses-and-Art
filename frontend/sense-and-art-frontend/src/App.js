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
