import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

class WelcomePage extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Senses and Arts</h1>
                <p>
                    This time of isolation is resulting in losses beyond concerts and exhibitions. 
                </p>
                <p>
                Many of us experience less shared meaning. We are drifting from our stories.
                </p>
                <p>
                    The good news is that to engage with art is to engage with ourselves.
                </p>
                <p>
                    Perception is participation. Art and music soothe us, enliven us and heal us. 
                </p>
                <p>
                    By tuning in, we discern our unique perceptions reflected in a particular work. 
                </p>
                <p>
                Art deepens on our connection to our memories and our shared humanity.
                </p>
                <p>
                    This a place for you.
                </p>
                <p>
                    Come in, take up the role of observer and participant. 
                </p>
                <p>
                    Notice the calm when you bring an image together with  music to make an inner space which embraces your feelings.
                </p>
                <p>
                    Then, share your experience with the world.
                </p>

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