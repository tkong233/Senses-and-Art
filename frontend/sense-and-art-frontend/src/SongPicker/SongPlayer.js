import React from 'react';
import { hot } from 'react-hot-loader'
import ReactPlayer from 'react-player';
import Duration from './Duration';
import { PlayCircleOutlined, PauseCircleOutlined} from '@ant-design/icons';

// import './reset.css'
// import './defaults.css'
import './SongPickerPage.css'

class SongPlayer extends React.Component {
    state = {
        url: process.env.PUBLIC_URL + this.props.song_path,
        playing: false,
        controls: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
      }
    
      load = url => {
        this.setState({
          url,
          played: 0,
          loaded: 0,
          pip: false
        })
      }
    
      handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
      }
    
      handlePlay = () => {
        this.setState({ playing: true })
      }
    
      handlePause = () => {
        this.setState({ playing: false })
      }
    
      handleSeekMouseDown = e => {
        this.setState({ seeking: true })
      }
    
      handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
      }
    
      handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
      }
    
      handleProgress = state => {
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
          this.setState(state)
        }
      }
    
      handleDuration = (duration) => {
        this.setState({ duration })
      }
    
      ref = player => {
        this.player = player
      }
    
      render () {
        const { url, playing, controls, played, duration, playbackRate, pip } = this.state
    
        return (
          <div className='song-card'>
            <section className='section'>
              <div className='player-wrapper'>
                <ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='0%'
                  height='0%'
                  url={url}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  playbackRate={playbackRate}
                  onPlay={this.handlePlay}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration}
                />
              </div>

              <button onClick={this.handlePlayPause}
                      className="song-play-button">
                      {playing ? 'Pause' : 'Play'}
              </button>

              <Duration className="song-play-time" 
                        seconds={duration * played} 
              />

              <input className="slider"
                  type='range' min={0} max={0.999999} step='any'
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
              />

              <Duration className="song-play-time" 
                        seconds={duration * (1 - played)} 
              />
            </section>
          </div>
        )
      }
}

export default hot(module) (SongPlayer);