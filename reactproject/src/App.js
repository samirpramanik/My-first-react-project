import logo from './logo.svg';
// import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
// import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';

function App() {
  return (
    <div className="App">
      {/* <Profile name="Samir" lastname="React">
        <h5>Child component</h5>
      </Profile>
      <Message messagecontent="This is a message from props" messagecode="100"/>*/}
      <Counter />
    </div>
  );
}

export default App;
