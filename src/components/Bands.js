import React, { Component } from 'react';

class Bands extends Component {
 
  render() {
      const bandsArray = this.props.bands
      bands = bandsArray.map((band)=> {
      <li><Band band={band} key={band.id}/></li>
    })
  
    return(
      <ul>
       {bands
      </ul>
    );
  }
};

export default Bands;
