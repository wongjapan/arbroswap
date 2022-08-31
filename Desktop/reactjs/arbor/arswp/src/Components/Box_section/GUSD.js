import React from "react";

export default function Arbor_project() {
  return (
    <>
      <div className="L_app1_In_box">
        <div class="box_1 clear">
          <div class="img_top_right fl-left">
            <img src="/img/GUSD.png" alt="" />
          </div>

          <div class="L_App1_img_top_right_title  fl-right">
            <p>GUSD</p>
            <div class="L_App1_img_top_right clear">
              <div class="L_App1_img_bottom_right top_back">
                <span>Gnosis-USD</span>
              </div>
            </div>
            
          </div>
          
          <div className="L_App1_view_left fl-right">
            <span>View</span>
            <a href="#">
                <img src="/img/arrow-left.png" alt="" />
            </a>
            
          </div>
        </div>
        <div className="L_app10_hr">
            <hr />
        </div>

        <div className="box2 L_app1_pd_10  clear">
          <div className="middle-title-left fl-left">Amount</div>
          <div className="middle-title-right fl-right">
            {" "}
            1,000,454
          </div>
        </div>

        <div className="box3 L_app1_pd_10 clear">
          <div className="L_App1_middle-title-left fl-left">Amount ($)</div>
          <div className="L_App1_middle-title-right fl-right">
            {" "}
            474,080,454
          </div>
        </div>
        <div className="box4 L_app1_pd_10  clear">
          <div className="middle-title-left fl-left">Unlock date</div>
          <div className="middle-title-right fl-right">
            {" "}
            2022-09-08
          </div>
        </div>
        
        <div className="L_app1_box6  clear">
          <div className="L_app1_bottom-title-left_bi fl-left">Unlocks In</div>
          <div className="bottom-title-right_bi fl-right">
            02h : 45Min : 40s
          </div>
        </div>
      </div>
    </>
  );
}
