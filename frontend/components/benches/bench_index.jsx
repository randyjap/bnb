import React from 'react';

class BenchIndex extends React.Component{
  componentDidMount(){
  }

  benches(){
    const benchArray = [];
    const benches = this.props.benches;
    for (var key in benches) {
      if (benches.hasOwnProperty(key)) {
        benchArray.push(benches[key]);
      }
    }
    return benchArray.map((bench, idx) => {
      return (
        <ul key={idx}>
          <li>Description: {bench.description}</li>
          <li>Lat: {bench.lat}</li>
          <li>lng: {bench.lng}</li>
        </ul>
      );
    });
  }

  render(){
    return(
      <div>
        {this.benches()}
      </div>
    );
  }
}

export default BenchIndex;
