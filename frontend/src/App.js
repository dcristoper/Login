import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";

// prettier-ignore
function App() {

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />}/>
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
