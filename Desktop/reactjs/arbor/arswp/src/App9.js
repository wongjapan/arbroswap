import React from "react";
import Aside from "./Components/Aside";
import Swipe_coin_edit_on from "./Components/Middle_contain_sec/Swipe_coin_edit_on";
import Admin_addre_whli from "./Components/Right_sec_components/Admin_addre_whli";
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
          <Swipe_coin_edit_on />

          {/* content2 */}
          <Admin_addre_whli />
          <div className="clear"></div>

          {/* content3 */}
        </div>
      </div>
    );
  }
}

export default Home;
