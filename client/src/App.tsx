import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
      <>
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
       </Router>
      </>
  );
};

export default App;