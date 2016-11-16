import React, 
       { Component } from 'react';
import { connect }   from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <span>{this.props.example}</span>
      </div>
    )
  }
}
function mapStateToProps({example}){
  return { example }
}
export default connect(mapStateToProps)(App);