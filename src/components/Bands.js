import React, { Component } from 'react';

class Bands extends Component {
 
  render() {
    const bands = this.props.bands
   bands = bands.map((band)=> {
      <li><Band band=band/></li>
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
