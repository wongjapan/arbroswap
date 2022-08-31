import React from "react";
import Aside from "./Components/Aside";
import Poolswipe_nav_sec from "./Components/Topnavbar_section/Poolswipe_nav_sec";
import More_det_claims from "./Components/Right_sec_components/More_det_claims";
import Rightsec_btn_off from "./Components/Right_sec_components/Rightsec_btn_off";
import Swipe_coin_secbig from "./Components/Middle_contain_sec.js/Swipe_coin_secbig";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Poolswipe_nav_sec />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          <Swipe_coin_secbig />

          {/* content2 */}
          <div className="contain-right fl-right">
            <Rightsec_btn_off />
            <div className="clear"></div>

            {/* content3 */}
            <More_det_claims />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
