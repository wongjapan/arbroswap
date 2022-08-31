import React from "react";
import Aside from "./Components/Aside";

import Poolswipe_nav_sec from "./Components/Topnavbar_section/Poolswipe_nav_sec";
import Rightsec_btn_on from "./Components/Right_sec_components/Rightsec_btn_on";
import Swipe_coin_secbig from "./Components/Middle_contain_sec.js/Swipe_coin_secbig";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block sec_2_header">
          <Poolswipe_nav_sec />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          <Swipe_coin_secbig />

          {/* content2 */}
          <Rightsec_btn_on />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
