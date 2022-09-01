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
import Box1 from "./Components/Box_section/Box1";
import Box2 from "./Components/Box_section/Box2";
import Box3 from "./Components/Box_section/Box3";
import Box4 from "./Components/Box_section/Box4";
import Box5 from "./Components/Box_section/Box5";
import Box6 from "./Components/Box_section/Box6";
import Box7 from "./Components/Box_section/Box7";
import Box8 from "./Components/Box_section/Box8";
import Box9 from "./Components/Box_section/Box9";
import Box10 from "./Components/Box_section/Box10";

export default function L_App4() {
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
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
          <Box5 />
          <Box6 />
          <Box7 />
          <Box8 />
          <Box9 />
          <Box10 />
        </div>
      </div>
    </>
  );
}
