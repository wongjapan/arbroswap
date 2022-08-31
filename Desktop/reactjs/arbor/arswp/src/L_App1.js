import React from "react";
import Aside from "./Components/Aside";
import Locker_sec_left from "./Components/Topnavbar_section/Locker_sec_left";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import My_Pools from "./Components/My_Pools";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import Live_end_upcom from "./Components/Live_end_upcom";
import Token_liqd from "./Components/Token_liqd";
import Icon_both from "./Components/Icon_both";
import GUSD from "./Components/Box_section/GUSD"
export default function L_App1() {
  return (
    <>
      <Aside />

      <div className="form-block">
        <Locker_sec_left />

        <div className="clear"></div>
        {/* content1 slider */}
        <Slider />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container">
          <Icon_both /> 
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
            {/* box1 */}
            <GUSD />
            {/* box2 */}
            {/* <Venus /> */}
            <GUSD />
            {/* box3 */}
            {/* <Voyagar /> */}
            <GUSD />
            {/* box4 */}
            {/* <Waxp /> */}
            <GUSD />
            {/* box5 */}
            {/* <Xsg_token /> */}
            <GUSD />
            {/* box6 */}
            {/* <Gnosis /> */}
            <GUSD />
          </div>
      </div>
    </>
  );
}
