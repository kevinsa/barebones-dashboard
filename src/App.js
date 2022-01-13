import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import TopNavBar from './components/topnavbar/TopNavBar';
import SideBar from './components/sidebar/SideBar';
import './App.css';


function App() {
  return (
    <div className="wrapper">

      <SideBar />

      <div id="body">
        <TopNavBar />
        <Outlet />
      </div>

    </div>
  );
}

export default App;
