import {connect} from 'react-redux';
import fetchCatURL from '../api/fetchCatURL';
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonSection from './ButtonSection';


class App extends Component {

  componentDidMount(){

    this.props.fetchCatURL();
  }

  render() {
    let display;
    if(this.props.image.includes(".mp4")){
      display = <video autoplay="autoplay">
        <source src={this.props.image} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
    }
    else if(this.props.image.includes(".webm")){
      display = <video autoplay="autoplay" loop>
        <source src={this.props.image} type="video/webm"/>
        Your browser does not support the video tag.
        </video>
    }
    else{
      display = <img src={this.props.image} alt="animal that is selected"/>;
    }
    return (
      <Grid  className="App" container spacing={3}>
        <Grid item xs={9}>
          {display}
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" >
          See a cute image of a dog, cat or a fox to cheer you up!
          </Typography>
          <ButtonSection/>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    image: state.image
  }
}

const mapDispatchToProps = () => {
  return {fetchCatURL}
}

export default connect(mapStateToProps, mapDispatchToProps())(App);
