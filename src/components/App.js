import {connect} from 'react-redux';
import fetchCatURL from '../api/fetchCatURL';
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCatURL();
  }

  render() {
    //const dispatch = useDispatch();
    //const url = useSelector(state => state.image);
    return (
      <div className="App">
        <img src={this.props.image} alt="Image of an animal"/>
        <button onClick={() => this.props.fetchCatURL()}>Get Data</button>
      </div>
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
