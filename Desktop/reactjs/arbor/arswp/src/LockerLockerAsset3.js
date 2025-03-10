import React from "react";
import Aside from "./Components/Aside";
import Locker_sec_left from "./Components/Topnavbar_section/Locker_sec_left";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import My_Pools from "./Components/My_Pools";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";

import Token_liqd from "./Components/Token_liqd2";
import Icon_bot from "./Components/Icon_Bot2";
import GUSD from "./Components/Box_section/LockerLockedAssets";
import LocLocAsstLiqBox from "./Components/Box_section/LocLocAsstLiqBox2";
import Box2 from "./Components/Box_section/Box2";
import Box3 from "./Components/Box_section/Box3";
import Box4 from "./Components/Box_section/Box4";
import Box5 from "./Components/Box_section/Box5";
import Box6 from "./Components/Box_section/Box6";
import Box7 from "./Components/Box_section/Box7";
import Box8 from "./Components/Box_section/Box8";
import Box9 from "./Components/Box_section/Box9";
import Box10 from "./Components/Box_section/Box10";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";

export default function L_App4() {
  return (
    <>
      <Aside />

      <div className="form-block">
        <TopNavAllThree
          title="Locker"
          subtitle="Locked assets"
          mainpara="Lock your assets for proof of lock."
        />

        <Locker_sec_right />
        <div className="clear"></div>
        {/* content1 slider */}
        <Slider />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container">
          <Icon_bot />
          <div className="outer_box_1 fl-left">
            <Token_liqd />
          </div>
          <div className="outer_box_2 fl-left ">
            <My_Pools />
          </div>

          <Sort_by />
          <div className="outer_box_4 fl-right">
            <Search_sec />
          </div>
        </div>

        <div className="outer_box">
          <LocLocAsstLiqBox
            coinimg="/img/Component 1.png"
            coinname="GUSD/RBA"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (2).png"
            coinname="WBNB/SLR"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (1).png"
            coinname="USDT/RBA"
            amount="7,144,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (3).png"
            coinname="GUSD/SXP"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (4).png"
            coinname="SXP/ARB"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (5).png"
            coinname="USDT/DODO"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (6).png"
            coinname="XSG/SLR"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (7).png"
            coinname="WBNB/WAXP"
            amount="99,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (8).png"
            coinname="GUSD/ARB"
            amount="1,000,454"
            date="2022-09-08"
          />

          <LocLocAsstLiqBox
            coinimg="/img/Component 1 (9).png"
            coinname="WBNB/VGX"
            amount="10,454"
            date="2022-09-08"
          />
        </div>
      </div>
    </>
  );
}
