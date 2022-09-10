import React from "react";

export default function Presale() {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            <span class="dot_green"></span> Presale
          </a>
          <a href="">Project Details</a>
          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          <form className="form_are">
            <p className="Airdropinfo_right_title_block_1">
              Choose Currency <span>*</span>
            </p>
            <div class="label fl-left clear">
              <input
                type="radio"
                className="fl-right"
                id="Standard"
                name="Presale"
                value="Standard"
              />
               {" "}
              <label for="html" className="fl-left">
                <img src="/img/Binance Coin (BNB)_formla.png" alt="" />
                <span className="cur_name">BNB</span>

                <span className="cur_logo_nm ">Binance</span>
              </label>
              <br />
            </div>
            <div class="label fl-right ">
              <input
                type="radio"
                className="fl-right"
                id="html"
                name="Presale"
                value="HTML"
              />
               {" "}
              <label for="html" className="fl-left">
                <img src="/img/ARB_formla.png" alt="" />
                <span className="cur_name">Rba</span>
                <span className="cur_logo_nm ">Roburna</span>
              </label>
              <br />
            </div>
            <div class="label fl-left">
              <input
                type="radio"
                className="fl-right"
                id="html"
                name="HTMl"
                value="HTML"
              />
               {" "}
              <label for="html" className="fl-left">
                <img src="/img/GUSD_formla.png" alt="" />
                <span className="cur_name">GUSD</span>
                <span className="cur_logo_nm ">Gnosis</span>
              </label>
              <br />
            </div>
            <div class="label fl-right ">
              <input
                type="radio"
                className="fl-right"
                id="html"
                name="Presale"
                value="HTML"
              />
               {" "}
              <label for="html" className="fl-left">
                <img src="/img/Tether (USDT)_formla.png" alt="" />
                <span className="cur_name">USDT</span>
                <span className="cur_logo_nm ">Tether</span>
              </label>
              <br />
            </div>
          </form>
          <div className="clear"></div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Presale Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>

          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
            <p>
              Soft Cap <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="200"
              />
              <img src="/img/RIP.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
            <p>
              Hard Cap <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="1000"
              />
              <img src="/img/RIP.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
            <p>
              Min Allocation <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="10"
              />
              <img src="/img/RIP.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
            <p>
              Max Allocation <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="100"
              />
              <img src="/img/RIP.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
            <p>Enable Whitelisting</p>
          </div>
          <div class="Airdropinfo_right_title_block_1_note form_mb_2 form_app6 fl-left">
            Note : When turned on Only Users you submit there address can
            participate
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">Time Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div id="amt_lis">
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
              <p>
                Starts On (UTC) <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <form action="#">
                  <input
                    type="datetime-local"
                    id="birthdaytime_locker"
                    name="birthdaytime"
                  />
                </form>
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
              <p>
                Ends On (UTC) <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <form action="#">
                  <input
                    type="datetime-local"
                    id="birthdaytime_locker"
                    name="birthdaytime"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              First Release on sale <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="40"
              />

              <span className="sp_val">%</span>
            </div>
          </div> */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Token Vesting Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div id="amt_lis">
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>
                First Release on sale <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="40"
                />

                <span className="sp_val">%</span>
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
              <p>
                Vesting period each cycle <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="20"
                />
                <span className="sp_val">Days</span>
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
              <p>
                Vesting Release each Cycle <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="30"
                />
                <span className="sp_val">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
