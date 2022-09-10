import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Form from "./Lapad_form_saletype_Standard/Form";
import Airdrop_create from "./Components/Topnavbar_section/Airdrop_create";
import Launchpad_create_sale from "./Components/Topnavbar_section/Launchpad_create_sale";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Launchpad_create_sale />

          <Topnavicon2 />

          <div className="clear mar-22"></div>

          <Form />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
