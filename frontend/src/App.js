import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ContainerForm from "./Component/ContainerForm";
import VectorImg from "./Assets/vectorcom.jpg";
function App() {
  return (
    <Router>
      <div className="App">
        <ContainerForm>
          <div className="img-vector mid"></div>
          <div className="box-form-login-register">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/forgotpassword"
                element={<ForgotPassword />}
              />
              <Route
                exact
                path="/resetpassword/:resetToken"
                element={<ResetPassword />}
              />
            </Routes>
          </div>
        </ContainerForm>
      </div>
    </Router>
  );
}

export default App;
