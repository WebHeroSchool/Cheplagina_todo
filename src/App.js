import logo from './logo.svg';
import './App.css';

const flag = true;
const count = 23;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'red',
          fontSize: 46
        }}>
        Hello World!
        </p>
        <p>
        {count}
        </p>
        <p>
        {flag && "Flag is true"}
        {undefined}
        {null}
        {false}
        {true}
        <p>
        {flag ? "true" : "false"}
        </p>
        <p>
        {58}
        </p>
        <p>
        {58-16}
        </p>
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
