import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import My_Airdrop from "./Components/My_Airdrop";
import Airdrop_venus_b from "./Components/Box_section/Airdrop_venus_b";
import Airdrop_arbor_b from "./Components/Box_section/Airdrop_arbor_b";
import Airdrop_venus_c from "./Components/Box_section/Airdrop_venus_c";
import Airdrop_arbor_c from "./Components/Box_section/Airdrop_arbor_c";
import Liveon_end_time from "./Components/Liveon_end_time";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* content1 */}
        <Aside />
        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            title="Airdropper"
            subtitle="Airdrops"
            mainpara="Airdrop to multiple users in few clicks."
          />
          <Topnavicon2 />

          <div className="clear"></div>
          {/* content1 slider */}

          <Slider />

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left">
              <Liveon_end_time />
            </div>
            <div className="outer_box_2 fl-left ">
              <My_Airdrop />
            </div>
            <Sort_by />
            <div className="outer_box_4 fl-right">
              <Search_sec />
            </div>
          </div>

          <div className="outer_box">
            <Airdrop_venus_b />

            <Airdrop_arbor_b />

            <Airdrop_venus_c />
            <Airdrop_venus_b />

            <Airdrop_arbor_c />

            <Airdrop_venus_b />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
