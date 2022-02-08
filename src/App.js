import React from 'react';
import Calculator from './components/Calculator';
import './styles/app.css';

// As required for this project, components will be defined class based
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
