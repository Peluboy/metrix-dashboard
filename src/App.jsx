import Scrollbars from "react-custom-scrollbars-2";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <Layout />
      </Scrollbars>
    </div>
  );
}

export default App;
