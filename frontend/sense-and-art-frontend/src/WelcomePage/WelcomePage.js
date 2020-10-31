import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

class WelcomePage extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Senses and Art</h1>
                <p>
                    This time of isolation is resulting in losses beyond concerts and exhibitions. 
                    Many of us experience less shared meaning. We are drifting from our stories.
                    The good news is that to engage with art is to engage with ourselves.
                    Perception is participation. Art and music soothe us, enliven us and heal us. 
                    By tuning in, we discern our unique perceptions reflected in a particular work. 
                    Art deepens on our connection to our memories and our shared humanity.
                </p>
                <p>
                    This is a place for you.
                </p>
                <p>
                    Come in, take up the role of observer and participant. 
                    Notice the calm when you bring an image together with  music to make an inner space which embraces your feelings.
                    Then, share your experience with the world.
                </p>

                <img className='image' src='/welcome.png'/>

                <div className="explore-button">
                    <Button id="button" shape="round" size="large" href="/images">
                            Explore
                    </Button>
                </div>
            </div>
        );
    }
}

export default WelcomePage;