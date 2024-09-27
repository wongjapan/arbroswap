import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

import Modal from "./PopupcomAirdropper/ModalEnds";

export default function App({ onClose }) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="app9_contain2 fl-right">
        <div className="contain3_section_heading clear">
          Admin Panel
          <hr />
        </div>
        <div className="contain3_section_inner_block app9_pdtp_10 clear">
          <div className="admin_airdrop_part1 fl-left">Address Whitelisted</div>
          <div className="admin_airdrop_part2  fl-right">105</div>
          <div className="airdir_hr">
            <hr />
          </div>
          <div className="clear"></div>
          <div className="admin_airdrop_part1 fl-left">Participants</div>
          <div className="admin_airdrop_part2  fl-right">54</div>
          <div className="airdir_hr">
            <hr />
          </div>
          <div className="clear"></div>
          <div className="admin_airdrop_part1 fl-left">Tokens Remaining</div>
          <div className="admin_airdrop_part2  fl-right">7,475,478</div>
          <div className="airdir_hr">
            <hr />
          </div>
        </div>

        <div className="contain3_section clear">
          <div className="admin_endedbtn_contain3_section_middle_done air_drop_mar_9">
            <button onClick={() => setShow(true)}>End Airdrop</button>
          </div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </>
  );
}
