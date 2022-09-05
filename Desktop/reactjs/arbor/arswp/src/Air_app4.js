import React from "react";
import Locker_coin from "./Components/Topnavbar_section/Locker_coin";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Airdrop_arbor from "./Components/Middle_contain_sec/Airdrop_arbor";
import Airdrops_arbor_right_sec from "./Components/Right_sec_components/Airdrops_arbor_right_sec";
import Air_arbor from "./Components/Topnavbar_section/Air_arbor";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Air_arbor />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <Airdrop_arbor />
          {/* content2 */}
          <Airdrops_arbor_right_sec />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
