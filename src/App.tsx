import Home from "./components/Home";
import { AudioProvider } from "./context/AudioContext";

function App() {
  return (
    <AudioProvider>
      <Home />
    </AudioProvider>
  );
}

export default App;
