import React from "react";
import Aside from "./Components/Aside";
import Locker_sec_left from "./Components/Topnavbar_section/Locker_sec_left";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import My_Pools from "./Components/My_Pools";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import Live_end_upcom from "./Components/Live_end_upcom";
import Token_liqd from "./Components/Token_liqd2";
import Icon_bot from "./Components/Icon_Bot2";
import GUSD from "./Components/Box_section/GUSD";
import Box_section from "./Components/Box_section/Box_section";
import Box_sec_sol from "./Components/Box_section/Box_sec_sol";
import Box_sec_Rba from "./Components/Box_section/Box_sec_Rba";
import Box_sec_waxp from "./Components/Box_section/Box_sec_waxp";
import Box_sec_Husd from "./Components/Box_section/Box_sec_Husd";
import Box_sec_Vgx from "./Components/Box_section/Box_sec_Vgx";
import Box_sec_Wbnb from "./Components/Box_section/Box_sec_Wbnb";
import Box_sec_SLR from "./Components/Box_section/Box_sec_SLR";
import Box_sec_Cake from "./Components/Box_section/Box_sec_Cake";
import Box_sec_SXP from "./Components/Box_section/Box_sec_SXP";

export default function L_App2() {
  return (
    <>
      <Aside />

      <div className="form-block">
        <Locker_sec_left />

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
          <Box_section />

          <Box_sec_sol />

          <Box_sec_Rba />

          <Box_sec_waxp />

          <Box_sec_Husd />

          <Box_sec_Vgx />

          <Box_sec_Wbnb />

          <Box_sec_SLR />

          <Box_sec_Cake />

          <Box_sec_SXP />

          {/* <Box_section /> */}
        </div>
      </div>
    </>
  );
}
