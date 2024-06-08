import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/Index";

const App = () => {
  return (
      <>
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
       </Router>
      </>
  );
};

export default App;