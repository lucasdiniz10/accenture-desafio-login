import Routes from "./routes";
import NavBar from "./components/NavBar";

import './styles/app.scss';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
