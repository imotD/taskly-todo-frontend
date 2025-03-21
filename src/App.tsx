import "./styles/global.css";
import { Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="container-app container-app__light">
      <Header>
        <Home />
      </Header>
    </div>
  );
}

export default App;
