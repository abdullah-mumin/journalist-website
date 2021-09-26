
import './App.css';
import Header from './components/Header/Header';
import JournalistDetails from './components/Journalilst-Details/JournalistDetails';

function App() {
  return (
    <div className="App">
      {/* header area */}
     <Header></Header>
     
     {/* Journalist Details area */}
     <JournalistDetails></JournalistDetails>
    </div>
  );
}

export default App;
