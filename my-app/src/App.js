import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
