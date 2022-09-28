import './App.css';
import Activities from './components/Activities/Activities';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <div className='main-body-area'>
        <div className="content-area">

          <Activities />
        </div>
        <div className="sidebar-area bg-light">
          <Sidebar />
        </div>

      </div>
    </>

  );
}

export default App;
