import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Debatefeed from "./components/Debatefeed";
import AiJudgeSection from "./components/AiJudgeSection";
// import homepage from "./components/homepage";
// import Hero from "./components/hero";
// import Toppanel from "./components/toppanel";
// import Sidebar from "./components/sidebar";
// import Centerfeed from "./components/centerfeed";
// import Rightpanel from "./components/rightpanel";
function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <Debatefeed/>
      <AiJudgeSection/>
      {/* <Hero />
      <homepage />
      <Toppanel />
      <div className="flex">
        <Sidebar />
        <Centerfeed className="flex-1"/>
        <Rightpanel/> 
      </div> */}
    </>
  ); 
}
export default App;