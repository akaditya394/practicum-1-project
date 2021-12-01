
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: 'top center',
  timeout: 2000,
  type: "success",
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);