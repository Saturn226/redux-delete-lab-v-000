import React, { Component } from 'react';

class Bands extends Component {
const bands = this.props.bands
bands.map((band)=> {
  <li><Band band=band/></li>
})
 
  render() {
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
