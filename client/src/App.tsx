import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/Index";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
      <>
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
       </Router>
      </>
  );
};

export default App;