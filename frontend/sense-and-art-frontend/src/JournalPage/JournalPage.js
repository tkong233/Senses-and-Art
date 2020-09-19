import {FormControl, InputLabel, Input, FormHelperText,TextField, Container,Grid, Paper, Button} from '@material-ui/core';
import React from 'react';
import './JournalPage.css';
import {makeStyles} from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';


const muiTheme = createMuiTheme({});
const useStyles = makeStyles((theme) => {
    return {
      root: {
        margin: '0 auto',
      },
    };
  });
class JournalPage extends React.Component {
    
    render() {
        const {imagePath,musicSrc} = this.props; 
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Container >
                        <Grid item xs={12}>
                            <div>
                                <img src={imagePath} width="300px"/>
                            </div>
                        </Grid>



                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container className="audio-player">
                        <ThemeProvider theme={muiTheme}>
                            <AudioPlayer
                                elevation={1}
                                width="300px"
                                variation="default"
                                // spacing={3}
                                // download={true}
                                autoplay={true}
                                order="standart"
                                preload="auto"
                                useStyles={useStyles}
                                // loop={true}
                                src={musicSrc}
                            />
                        </ThemeProvider>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container className="form-item">
                        <FormControl className="form-wrapper" >
                            <TextField id="outlined-basic" label="What it made you feel" variant="outlined" />
                        </FormControl>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Container className="form-item">
                            <FormControl className="form-wrapper" >
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </FormControl>
                        </Container>
                    </Grid>
                </Grid>
                <Grid className="form-wrapper" item xs={12}>
                    <Container className="form-item">
                        <FormControl className="form-wrapper" >
                            <TextField id="outlined-basic" label="Location" variant="outlined" />
                        </FormControl>
                    </Container>
                </Grid>
                <Grid className="form-wrapper" item xs={12}>
                    <Container className="form-item">
                        <Button variant="contained" color="primary" href="#contained-buttons">
                            submit
                        </Button>
                    </Container>
                </Grid>

            </Grid>

        )
    }
}

export default JournalPage; 