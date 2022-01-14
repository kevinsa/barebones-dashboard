import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import TopNavBar from './components/topnavbar/TopNavBar';
import SideBar from './components/sidebar/SideBar';
import Home from './containers/home/Home';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';
import './App.css';


function App() {
  return (
    <div className="wrapper">
      <AuthProvider>
        <SideBar />
        <div id="body">
          <TopNavBar />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/home" elemement={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
