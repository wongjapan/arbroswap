import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="slider open">
          <header>
            <div className="group_all">
              <div className="image-text">
                <span className="image">
                  <img src="assets/images/logo.png" alt="" />
                </span>

                <div className="text header-text">
                  <img src="assets/images/logo_2.png" className="name" alt="" />
                  {/* --> */}
                </div>
              </div>
            </div>
            <span className="toggle">
              <img src="assets/images/arrow-left.png" alt="" srcset="" />
            </span>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    {/* <!-- <i className='bx bxs-grid-alt bx-rotate-180 icon' style='color:#a69f9f' ></i> --> */}
                    <img src="images/element-3.png" className="icon" alt="" />
                    <span className="text nav-test">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/trade.png" className="icon" alt="" />

                    <span className="text nav-test">Launchpad</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <img
                      src="images/Group 427319472.png"
                      className="icon"
                      alt=""
                    />

                    <span className="text nav-test">Locker</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/lock.png" className="icon" alt="" />

                    <span className="text nav-test">Airdropper</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/menu.png" className="icon" alt="" />

                    <span className="text nav-test">More Products</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className=""></li>
              <li className="mode">
                <div className="moon-sun">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                {/* <!-- <span className="mode-text text">Dark Mode</span> --> */}

                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-telegram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-twitter social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-instagram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-dribbble social_media"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <div className="top-nav">
            <ul className="breadcrumb">
              <li>Pools</li>
              <li>
                {" "}
                <img src="/img/Line 2.png" alt="" srcset="" />{" "}
              </li>
              <li>
                <a href="#" className="activ">
                  Swipe coin
                </a>
              </li>
            </ul>
          </div>

          <div className="top-right-nav">
            <button className="button_name">
              <img className="icon-001" src="assets/images/mask group.png" />{" "}
              0xdd....ahs4
              <img className="icon-002" src="assets/images/bullet.jpeg" />{" "}
            </button>
            <a href="">
              <img src="assets/images/notification-bing.png" />
            </a>
            <div className="app8_button_admin_edit">
              <button>
                Admin Mode
                <label class="swih">
                  <input type="checkbox" />
                  <span class="slid round"></span>
                </label>
              </button>
            </div>

            {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
          </div>
          {/* <div className="app8_top-right-nav">
            <div className="inner_app8_op-right-nav">Admin Mode</div>
          </div> */}

          <div className="clear mar-22"></div>
          {/* content1  */}
          <div className="contain fl-left">
            <div className="block_section_1">
              <div className="contain_block_1 fl-left">
                <div className="img_top_right_block_1 fl-left">
                  <img src="/img/RIP_logo (1).png" alt="" />
                </div>
                <div class="img_top_right_title_block_1 fl-right">
                  <p>Arbor Project</p>

                  <span class="inner_img_top_right_button_block_1 fl-right">
                    Private
                  </span>

                  <div class="img_top_right_button_block_1 clear">
                    <div class="img_bottom_right_title_block_1 top_back">
                      <span>Payment</span>
                      <span>Web3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contain_block_1 block-right fl-right">
                <img src="/img/Vector (6).png" alt="" srcset="" />
                <img src="/img/dribbble.png" alt="" srcset="" />
                <img src="/img/Tel.png" alt="" srcset="" />
              </div>
            </div>
            <div className="block_section_2 block_middle-2 clear">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor Lorem ipsum dolor sit amet, consectetur
                adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor.
              </p>
            </div>
            <div className="block_section_3_bg clear">
              <div className="fl-left tet_dec contain1_block_section_3">
                <a href="#">Sale details</a>
              </div>
              <div className="fl-left tet_dec contain2_block_section_3">
                <a href="#">Tokenomics</a>
              </div>
              <div className="fl-left  tet_dec contain3_block_section_3">
                <a href="#">Team</a>
              </div>
            </div>

            <div className="block_section_4 clear">
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">
                  Presale Starts on
                </div>
                <div className="inner_section_4_b fl-right">
                  9:30 (UTC) <span>2022-09-04</span>
                </div>
              </div>

              <div className="clear hr_inner">
                <hr />
              </div>
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">Presale Ends on</div>
                <div className="inner_section_4_b fl-right">
                  {" "}
                  10:30 (UTC) <span>2022-09-05</span>
                </div>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">Soft Cap</div>
                <div className="inner_section_4_b fl-right">240,000 RBA</div>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">Tokens on Sale</div>
                <div className="inner_section_4_b fl-right">4,000,000 SXP</div>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">To be Listed on</div>
                <div className="inner_section_4_b fl-right">
                  {" "}
                  <img src="/img/PancakeSwap (CAKE).png" alt="" /> Pancakeswap
                </div>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>
              <div className="section_set_1">
                <div className="inner_section_4_a fl-left">Presale Address</div>
                <div className="inner_section_4_b fl-right">
                  0xc197......42bbde <img src="/img/copy.png" alt="" />{" "}
                </div>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>
            </div>
          </div>

          {/* content2 */}
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
