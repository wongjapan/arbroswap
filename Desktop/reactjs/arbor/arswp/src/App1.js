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
              <li>Launchpad</li>
              <li>
                {" "}
                <img src="/img/Line 2.png" alt="" srcset="" />{" "}
              </li>
              <li>
                <a href="#" className="active">
                  Pools
                </a>
              </li>
            </ul>
            <p>Discover upcoming or live sales.</p>
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
            {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
          </div>

          <div className="clear"></div>
          {/* content1 slider */}

          <section id="demos">
            <div class="row">
              <div class="large-12 columns">
                <div class="owl-carousel owl-theme">
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>

                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (2).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img
                        src="/img/Rectangle 155994 (1).png"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="">
                      {" "}
                      <img src="/img/Rectangle 155994.png" alt="" srcset="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left">
              <div>
                <div className="inner_box1 fl-left">
                  {" "}
                  <a href="#">Live</a>{" "}
                </div>
                <div className="inner_box2 fl-left">
                  {" "}
                  <a href="#">Ended</a>{" "}
                </div>
                <div className="inner_box3 fl-left">
                  <a href="#">Upcoming</a>{" "}
                </div>
              </div>
            </div>
            <div className="outer_box_2 fl-left ">
              <div>
                <div className="inner_radio_text">My Pools</div>
              </div>
            </div>
            <div className="outer_box_3 fl-left">
              <select className="inner_option">
                <option value="Sort">Sort By</option>
                <option value="BTN">BTN</option>
                <option value="CDT">CDT</option>
                <option value="REE">REE</option>
              </select>
            </div>
            <div className="outer_box_4 fl-right">
              <form>
                <input type="text" placeholder="Search Coin" name="search" />
                <button type="submit">
                  <img src="/img/search-normal.png" alt="" srcset="" />
                </button>
              </form>
            </div>
          </div>

          <div className="outer_box">
            {/* box1 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo (1).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Arbor Project</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>Payment</span>
                      <span>Web3</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP.png" alt="" className="rip" /> 240,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">120,000 RBA</div>
                <div className="middle-title-right_ti fl-right">
                  240,000 RBA
                </div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">25%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            {/* box2 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo(6).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Venus</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>DEFI</span>
                      <span>DEX</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP (1).png" alt="" className="rip" /> 14,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">10,000 BNB</div>
                <div className="middle-title-right_ti fl-right">14,000 BNB</div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">80%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            {/* box3 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo (2).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Voyager Tokent</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>Payment</span>
                      <span>Web3</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP (2).png" alt="" className="rip" /> 72,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">7,200 ETH</div>
                <div className="middle-title-right_ti fl-right">72,000 ETH</div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">10%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            {/* box4 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo (3).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Waxp</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>NFT</span>
                      <span>Blockchain</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP (1).png" alt="" className="rip" /> 7,400
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">3,700 BNB</div>
                <div className="middle-title-right_ti fl-right">7,400 BNB</div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">25%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            {/* box5 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo (4).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>XSG Token</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>Blockchain</span>
                      <span>Meta</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP.png" alt="" className="rip" /> 240,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">200,000 RBA</div>
                <div className="middle-title-right_ti fl-right">
                  240,000 RBA
                </div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">85%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            {/* box6 */}
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/RIP_logo (3).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Gnosis</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>Payment</span>
                      <span>Web3</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP (3).png" alt="" className="rip" />{" "}
                  1,200,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">120,000 USDT</div>
                <div className="middle-title-right_ti fl-right">
                  1,200,000 USDT
                </div>
              </div>
              <div className="box3 clear">
                <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center">15%</div>
                </div>
                <br />
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
