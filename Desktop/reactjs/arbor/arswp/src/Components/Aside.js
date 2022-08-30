import React from "react";

export default function Aside() {
  return (
    <>
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
    </>
  );
}
