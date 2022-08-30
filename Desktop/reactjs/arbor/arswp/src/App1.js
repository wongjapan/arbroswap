import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Live_end_upcom from "./Components/Live_end_upcom";
import Sort_by from "./Components/Sort_by";
import My_Pools from "./Components/My_Pools";
import Search_sec from "./Components/Search_sec";
import Launchpad_pool from "./Components/Topnavbar_section/Launchpad_pool";
import Arbor_project from "./Components/Box_section.js/Arbor_project";
import Venus from "./Components/Box_section.js/Venus";
import Voyagar from "./Components/Box_section.js/Voyagar";
import Waxp from "./Components/Box_section.js/Waxp";
import Xsg_token from "./Components/Box_section.js/Xsg_token";
import Gnosis from "./Components/Box_section.js/Gnosis";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* content1 */}
        <Aside />
        {/*  */}
        <div className="form-block">
          <Launchpad_pool />

          <Topnavicon2 />

          <div className="clear"></div>
          {/* content1 slider */}

          <Slider />

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left">
              <Live_end_upcom />
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
            <Arbor_project />
            {/* box2 */}
            <Venus />
            {/* box3 */}
            <Voyagar />
            {/* box4 */}
            <Waxp />
            {/* box5 */}
            <Xsg_token />
            {/* box6 */}
            <Gnosis />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
