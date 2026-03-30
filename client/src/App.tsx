import './App.css';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';

function NavigationButton({icon, text, link}:{icon: string, text: string, link: string}) {
  const location = useLocation();
  const currentPathname = location.pathname;
  const active = currentPathname === link;

  return <NavLink to={link} className={`navigationButton ${active && "active"}`}>
    <i className={`bi bi-${icon}`}></i>
    <div className="text">{text}</div>
  </NavLink>
}

function App() {
  return (
    <div style={{paddingTop: 50}}>
      {/* Navigation Bar */}
      <header className="navigationBar">
        <NavigationButton link='/' icon='house' text='Home'/>
      </header>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;