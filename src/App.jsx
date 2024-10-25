import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import PlayerContainer from "./components/PlayerContainer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [balance, setBalance] = useState(0);

  const handleClaimCredit = () => {
    setBalance(balance + 600000);
    toast.success("Credit claimed successfully", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  return (
    <div className="bg-base-100 min-h-screen p-2 md:p-0">
      <ToastContainer />
      <Header balance={balance} />
      <Banner creditHandle={handleClaimCredit} />
      <PlayerContainer balance={balance} setBalance={setBalance} />
      <Footer />
    </div>
  );
};

export default App;
