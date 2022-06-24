import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builder from './Components/Builder';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import TopHeader from './Components/TopHeader';
import './style.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className='content_wrapper'>
          <TopHeader />
          <div className='main_content'>
            <Routes>
              <Route path="/resume-builder/*" element={<Builder />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
