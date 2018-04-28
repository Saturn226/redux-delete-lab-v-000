import React, { Component } from 'react';

class Bands extends Component {
 
  render() {
      const bandsArray = this.props.bands
      const bands = bandsArray.map((band)=> {
      return <li><Band/></li>
    })
  
    return(
      <ul>
      
      </ul>
    );
  }
};

export default Bands;
