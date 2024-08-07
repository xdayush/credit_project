import "./App.css";
import CibilScoreGuide from "./components/CibilScoreGuide/CibilScoreGuide";
import CreditHealthReport from "./components/CreditHealthReport/CreditHealthReport";
import CreditInfoSection from "./components/CreditInfo/CreditInfo";
import CreditJourney from "./components/CreditJourney/CreditJourney";
import JoinCredit from "./components/JoinCredit/JoinCredit";
import Card from "./components/Plans/card";
import UnlockFinancialFreedom from "./components/UnlockFinancialFreedom/UnlockFinancialFreedom";
import Card2 from "./components/Plans-pg2/card2";
import CIC from "./components/4CIC/CIC";
// import GandA from "./components/GandA/GandA";
// import PF from "./components/PF/PF";
// import SRC from "./components/SRC/SRC";
import JoinCreditcheck from "./components/SucessRate/SucessRate";
import PlanFeatures from "./components/PlanFeatures/PlanFeatures";
import GuaranteAssurance from "./components/GuaranteeAssurance/GuaranteeAssurance";
function App() {
  return (
    <div className="App">
      <CreditJourney />
      <br />
      <JoinCredit />
      <CreditInfoSection />
      <br />
      <CibilScoreGuide />
      <br />
      <CreditHealthReport />
      <br />
      <Card />
      <br/>
      <UnlockFinancialFreedom/>
      <br/>
      <Card2/>
      <br/>
      <CIC/>
      <br/>
      <div className="">
      <GuaranteAssurance/>  
      <PlanFeatures/>
      {/* <GandA/>
      <br/>
      <PF/>
      <br/>
      <SRC/> */}
      
      <JoinCreditcheck/>
      <br/>
      
      </div>
      
    </div>
  );
}

export default App;
