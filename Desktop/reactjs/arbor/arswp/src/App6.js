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
                  Create sale
                </a>
              </li>
            </ul>
            <p>Launch your project with Arborswap.</p>
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

          <div className="clear mar-22"></div>
          {/* content1  */}

          <div className="form_section_radio">
            <div className="inner_form_seting">
              <form>
                <p>Choose Presale Type</p>
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
                    Standard
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
                    Standard
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
                    Standard
                  </label>
                  <br />
                </div>
              </form>
              <div className="clear"></div>
              <div className="app6_form_section_button fl-right">
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
