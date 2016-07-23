import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class TwitterChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Twitter Chart Data</h2>
        <VictoryChart height={200} width={300}/>
      </div>
    );
  }
}

export default TwitterChart;
