import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import TopNavBar from './components/topnavbar/TopNavBar';
import SideBar from './components/sidebar/SideBar';
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
              <Outlet />
            </div>
          </div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
