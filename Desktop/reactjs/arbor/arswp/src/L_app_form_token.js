import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Form from "./Locker_Token_Locker.js/Form";
import Locker_lp_token_green from "./Components/Topnavbar_section/Locker_lp_token_green";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Locker_lp_token_green />

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
