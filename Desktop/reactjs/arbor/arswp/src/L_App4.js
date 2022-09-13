import React from "react";

import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Rightsec_btn_whl_list from "./Components/Right_sec_components/Rightsec_btn_whl_list";
import Locker_middle_sec from "./Components/Middle_contain_sec/Locker_middle_sec";
import Locker_Claim from "./Components/Right_sec_components/Locker_Claim";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllTwo title="Locked Assets" subtitle="WBNB/SXP" />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <Locker_middle_sec />
          {/* content2 */}
          <Locker_Claim />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
