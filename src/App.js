
import './App.css';
import AddedJournalist from './components/Added-Journalist/AddedJournalist';
import Header from './components/Header/Header';
import JournalistDetails from './components/Journalilst-Details/JournalistDetails';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <AddedJournalist></AddedJournalist>
     <JournalistDetails></JournalistDetails>
    </div>
  );
}

export default App;
