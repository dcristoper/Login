import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Private from "./Pages/Private/Private";

// prettier-ignore
function App() {

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Private/>}/>
          </Route>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route exact path="/resetpassword/:resetToken" element={<ResetPassword/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
