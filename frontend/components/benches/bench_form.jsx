import React from 'react';

class BenchForm extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <form>
          Description: <input></input><br/>
          Number of Seats: <input></input><br/>
          Latitude: <input value={this.props.lat} disabled></input><br/>
          Longitutde: <input value={this.props.lng} disabled></input><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BenchForm;
