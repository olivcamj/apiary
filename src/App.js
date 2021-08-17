import "./App.css";
import { Wrapper } from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper>Wrapper</Wrapper>
      <Wrapper neutral>Neutral</Wrapper>
      <Wrapper dark>Dark</Wrapper>
    </div>
  );
}

export default App;
