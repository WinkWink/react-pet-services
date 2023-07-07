// import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CustomerAccessPage } from './containers/HomePage/customerAccessPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/customer/access/:action" element={<CustomerAccessPage/>} />
      </Routes>
      </Router>

  </div>
  );
}

export default App;
