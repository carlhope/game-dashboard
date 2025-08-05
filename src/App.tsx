
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '.././Components/layout';
import Home from '../Pages/Home';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Home />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App



