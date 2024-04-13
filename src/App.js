import './App.css';
import DateManager from './components/DateManager';
import Header from './components/Header';
import LanguageManager from './components/LanguageManager';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="manager-container">
         <LanguageManager />
         <DateManager />
      </div>
    </div>
  );
}

export default App;
