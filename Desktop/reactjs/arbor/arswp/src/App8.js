import React from "react";
import Aside from "./Components/Aside";
import Rightsec_btn_on from "./Components/Right_sec_components/Rightsec_btn_on";
import Swipe_coin_secbig from "./Components/Middle_contain_sec/Swipe_coin_secbig";
import Poolswipe_nav_sec from "./Components/Topnavbar_section/Poolswipe_nav_sec";
import Topnavicon_admin_mode from "./Components/Topnavbar_section/Topnavicon_admin_mode";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Poolswipe_nav_sec />

          <Topnavicon_admin_mode />

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
