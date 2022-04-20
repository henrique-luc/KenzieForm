import "./App.css";
import Routes from "./Routes";
import GlobalStyle from "./Components/Styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">{<Routes />}</header>
    </div>
  );
}

export default App;
