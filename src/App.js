import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { RequireAuth } from './context/RequireAuth';
import TopNavBar from './components/topnavbar/TopNavBar';
import SideBar from './components/sidebar/SideBar';
import Home from './containers/home/Home';
import Profile from './containers/profile/Profile';
import Login from './containers/login/Login';

import './App.css';


function App() {
  return (
    <div className="d-flex" id="wrapper">
      <AuthProvider>
        {/* side bar */}
        <SideBar />

        {/* page contents wrap */}
        <div id="page-content-wrapper">

          {/* top navigation */}
          <TopNavBar />

          {/* page contents */}
          <div className="container-fluid">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" elemement={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } />
              <Route path="/profile" element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              } />
              <Route path="/" element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } />
            </Routes>
          </div>
          {/* end page contents */}

        </div>
        {/* end page contents wrap */}
      </AuthProvider>
    </div>
  );
}

export default App;
