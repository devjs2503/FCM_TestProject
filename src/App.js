import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { generateToken, messaging } from './notification/firebase';
import { onMessage } from 'firebase/messaging';
import { toast } from 'react-toastify';

function App() {
  useEffect(()=>{
    generateToken()
    onMessage(messaging,(payload)=>{
      console.log("payload", payload);
      toast.success(payload.notification.title + " - " + payload.notification.body)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
