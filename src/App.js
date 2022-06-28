import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builder from './Components/Builder';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './style.scss'

function App() {
  const [expandedActive, setExpandedActive] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar expandedSidebar={ expandedActive } setExpandedSidebar={ setExpandedActive } />
        <div className={ 'content_wrapper' + (expandedActive ? ' sidebarExpanded' : '') } expandedSidebar={ expandedActive }>
            <Routes>
              <Route path="/resume-builder/*" element={<Builder />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
