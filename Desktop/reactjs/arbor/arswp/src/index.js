import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Live from "./AirdropperAirdrop1";
import Ended from "./AirdropperAirdrop2";
import Timed from "./AirdropperAirdrop3";
import LaunchpadPool from "./LaunchpadPools1";
import LaunchpadPoolsBox from "./LaunchpadPools3";
import Launchpadpool2 from "./LaunchpadPools4";
import Launchpadpool3 from "./LaunchpadPools5";
import Launchpadpool4 from "./LaunchpadPools6";
import AirdropTypeTimed from "./AirdropperAirdrop4";
import AirdropTypeLive from "./AirdropperAirdrop5";
import AirdropTypeEnd from "./AirdropperAirdrop6";
import Createpageform from "./AirdropperAirdropForm7";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pools" element={<LaunchpadPool />} />
      <Route path="/pools/launchpoolbox" element={<LaunchpadPoolsBox />} />
      <Route path="/pools/launchpoolbox2" element={<Launchpadpool2 />} />
      <Route path="/pools/launchpoolbox3" element={<Launchpadpool3 />} />
      <Route path="/pools/launchpoolbox4" element={<Launchpadpool4 />} />
      <Route path="live" element={<Live />} />
      <Route path="ended" element={<Ended />} />
      <Route path="timed" element={<Timed />} />
      <Route path="/timed/boxlive" element={<AirdropTypeTimed />} />
      <Route path="/live/boxpage1" element={<AirdropTypeLive />} />
      <Route path="/ended/boxpage2" element={<AirdropTypeEnd />} />
      <Route path="/airdropform1" element={<Createpageform />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
