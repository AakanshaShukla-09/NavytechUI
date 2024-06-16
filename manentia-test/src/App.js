import "./App.css";
import MyHeader from "./component/header/MyHeader";
import Footer from "./component/footer/Footer";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./component/layout/Dashboard";
import { MyRoutes } from "./component/router/MyRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
        {/* <MyHeader />

				<Dashboard />
				<p></p>
				<Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
