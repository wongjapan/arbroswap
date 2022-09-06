import React from "react";
import Locker_coin from "./Components/Topnavbar_section/Locker_coin";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Airdrop_arbor from "./Components/Middle_contain_sec/Airdrop_arbor";
import Airdrops_arbor_right_sec from "./Components/Right_sec_components/Airdrops_arbor_right_sec";
import Air_arbor from "./Components/Topnavbar_section/Air_arbor";
import Form from "./Form/Form";
import Airdrop_create from "./Components/Topnavbar_section/Airdrop_create";
import Project_details from "./Form/Project_details";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Airdrop_create />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <Form />
          {/* <Project_details /> */}
          {/* content2 */}
          {/* <Airdrops_arbor_right_sec /> */}
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
