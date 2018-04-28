import React, { Component } from 'react';

class Bands extends Component {
 
  render() {
      const bandsArray = this.props.bands
      bands = bandsArray.map((band)=> {
      <li><Band band={band} key={band.id}/></li>
    })
  
    return(
      <ul>
      
      </ul>
    );
  }
};

export default Bands;
