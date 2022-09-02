import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import Airdrop_venus from "./Components/Box_section/Airdrop_venus";
import Airdrop_arborswap from "./Components/Box_section/Airdrop_arborswap";
import Airdrop_arbors_live from "./Components/Box_section/Airdrop_arbors_live";
import Live_end_timed from "./Components/Live_end_timed";
import My_Airdrop from "./Components/My_Airdrop";
import Airdrop_airdrops from "./Components/Topnavbar_section/Airdrop_airdrops";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* content1 */}
        <Aside />
        {/*  */}
        <div className="form-block">
          <Airdrop_airdrops />

          <Topnavicon2 />

          <div className="clear"></div>
          {/* content1 slider */}

          <Slider />

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left">
              <Live_end_timed />
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
            <Airdrop_venus />
            <Airdrop_arbors_live />
            <Airdrop_arborswap />
            <Airdrop_venus />
            <Airdrop_arbors_live />
            <Airdrop_arborswap />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
