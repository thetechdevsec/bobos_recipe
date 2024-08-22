import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DashBoard from './components/dashboard/DashBoard';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<DashBoard />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;