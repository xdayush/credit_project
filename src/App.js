
import './App.css';
import CibilScoreGuide from './components/CibilScoreGuide/CibilScoreGuide';
import CreditHealthReport from './components/CreditHealthReport/CreditHealthReport';
import CreditInfoSection from './components/CreditInfo/CreditInfo';
import CreditJourney from './components/CreditJourney/CreditJourney';
import JoinCredit from './components/JoinCredit/JoinCredit';

function App() {
  return (
    <div className="App">
     <CreditJourney/>
     <br/>
     <JoinCredit/>
     
     <CreditInfoSection/>
     <br/>
     <CibilScoreGuide/>
     <br/>
     <CreditHealthReport/>
    </div>
   


  );
}

export default App;
