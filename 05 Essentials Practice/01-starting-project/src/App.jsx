import Header from "./assets/Components/Header";
import Userinput from "./assets/Components/Userinput";
// import Result from "./assets/Components/Result";
import ResultOutput from "./assets/Components/ResultOutput";
import { useState } from "react";
import calculateInvestmentResults from "./util/investment.js";
function App() {
  const [params, setParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function changeHandeler(param, paramNewvalue) {
    setParams((prevParam) => {
      let updatedParam = { ...prevParam };
      updatedParam[param] = parseInt(paramNewvalue);
      console.log(updatedParam);
      return updatedParam;
    });
  }
  console.log(params);
  let annualData;
  annualData = calculateInvestmentResults(params);
  console.log(annualData);
  return (
    <>
      <Header></Header>
      <Userinput onchangeHandeler={changeHandeler}></Userinput>
      <ResultOutput outputData={annualData}></ResultOutput>
    </>
  );
}

export default App;
