import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function LockerLockerAsset5() {
  const navigate = useNavigate();
  const [data, setData] = useState("LPToken");
  const handleChange = (value) => {
    setData(value);
  };
  return (
    <>
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/lockerlogotop.png"
            title="Locker"
            subtitle="Token Locker"
            mainpara="Lock your assets for proof of lock."
          />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}

          <div className="form_section_radio">
            <div className="inner_form_seting">
              <form>
                <p>Choose Presale Type</p>
                <div class="label fl-left clear lappadpoolactive">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Standard"
                    name="Presale"
                    value="LPToken"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Standard
                  </label>
                  <br />
                </div>
                <div class="label fl-right">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Fairlaunch"
                    name="Presale"
                    value="LPToken"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Reward
                  </label>
                  <br />
                </div>
                {/* <div class="label fl-left">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Private"
                    name="Presale"
                    value="Private"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Private
                  </label>
                  <br />
                </div> */}
              </form>
              <div className="clear"></div>
              <div className="L_app5_section_points">
                <ul>
                  <li>Best for tokens with rewards.</li>
                  <li>Withdraw rewards anytime.</li>
                </ul>
              </div>
              <div className="clear"></div>
              <div className="app6_form_section_button fl-right">
                <button onClick={() => navigate(`/Createsalelocker/${data}`)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </>
  );
}
