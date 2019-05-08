import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BTC',
      startDate: '2019-04-01',
      endDate: '2019-04-30',
      prices: {}
    };
  }

  componentDidMount() {
    this.fetchPrices(this.state.startDate, this.state.endDate);
  }

  fetchPrices(startDate, endDate) {
    Axios.post('/prices', { startDate: startDate, endDate: endDate }).then(
      response => {
        console.log(
          `response.data for fetchPrices in app.jsx looks like --> ${
            response.data
          }`
        );
        this.setState({ prices: response.data });
      }
    );
  }
}



