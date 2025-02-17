import "./styles/global.css";
import { Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header>
        <Home />
      </Header>
    </>
  );
}

export default App;
