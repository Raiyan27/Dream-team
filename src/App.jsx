import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {
  const [balance, setBalance] = useState(0);
  const handleClaimCredit = () => {
    setBalance(balance + 600000);
  };
  return (
    <div className="bg-base-100 min-h-screen">
      <Header balance={balance} />
      <Banner creditHandle={handleClaimCredit} />
    </div>
  );
};

export default App;
