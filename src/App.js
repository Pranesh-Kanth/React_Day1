import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Let us see the output of JAVASCRIPT</h1>
       <button onClick={window['alertMsg']} > Click to call msgQAlert</button>
      </header>
    </div>
  );
}

export default App;