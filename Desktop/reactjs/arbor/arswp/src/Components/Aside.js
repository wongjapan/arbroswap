import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState(false);
  // let user = [(newlink = "/launchpad")];
  return (
    <>
      <nav
        className="slider"
        style={{
          width: isOpen ? "270px" : "80px",
        }}
      >
        <header>
          <div className="group_all">
            <div className="image-text">
              <span className="image">
                <img src="assets/images/logo.png" alt="" />
              </span>

              <div
                className="text header-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <img src="assets/images/logo_2.png" className="name" alt="" />
                {/* --> */}
              </div>
            </div>
          </div>
          <span onClick={toggle}>
            {/* className="toggle" */}
            <img src="assets/images/arrow-left.png" alt="" srcset="" />
          </span>
        </header>

        <div className="menu-bar">
          <div>
            {/* <div className={open ? "sidebar-item open" : "sidebar-item"}> */}
            <div className="menu">
              <ul className="menu-links">
                <div>
                  <li className="nav-link ">
                    <a href="#">
                      {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                      {/* <!-- <i className='bx bxs-grid-alt bx-rotate-180 icon' style='color:#a69f9f' ></i> --> */}
                      <img src="/img/element-3.png" alt="" />
                      {/* <img src="/img/AirdropRIP.png" alt="" /> */}
                      <span
                        className="text nav-test"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        Dashboard
                      </span>
                    </a>
                  </li>
                </div>
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                  <li className="nav-link">
                    <a href="#">
                      {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                      <img src="/img/trade.png" className="icon" alt="" />

                      <span
                        className="text nav-test"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        Launchpad{" "}
                      </span>
                      <i
                        class="bi bi-chevron-down toggle_btn_aside"
                        onClick={() => setOpen(!open)}
                        style={{ display: isOpen ? "block" : "none" }}
                      ></i>
                    </a>
                  </li>
                  <div
                    class="sidebar_contain_aside"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    <Link to="/pools">Pools</Link>
                  </div>
                </div>
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                  <li className="nav-link">
                    <a href="#">
                      <img
                        src="/img/Group 427319472.png"
                        className="icon"
                        alt=""
                      />

                      <span
                        className="text nav-test"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        Locker
                      </span>
                      <i
                        class="bi bi-chevron-down toggle_btn_aside"
                        onClick={() => setOpen(!open)}
                        style={{ display: isOpen ? "block" : "none" }}
                      ></i>
                    </a>
                  </li>
                  <div class="sidebar_contain_aside">
                    <Link to="">Locked Assets</Link>
                    <br />
                    <Link to="">Token Locker</Link>
                    <br />
                    <Link to="">LP Locker</Link>
                  </div>
                </div>
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                  <li className="nav-link">
                    <a href="#">
                      {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                      <img src="/img/lock.png" className="icon" alt="" />

                      <span
                        className="text nav-test"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        Airdropper
                      </span>
                      <i
                        class="bi bi-chevron-down toggle_btn_aside"
                        onClick={() => setOpen(!open)}
                        style={{ display: isOpen ? "block" : "none" }}
                      ></i>
                    </a>
                  </li>
                  <div class="sidebar_contain_aside">
                    <Link to="/live">Airdrops</Link>
                    <br />
                    <Link to="/airdropform1">Create Airdrop</Link>
                  </div>
                </div>
                <div>
                  <li className="nav-link">
                    <a href="#">
                      {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                      <img src="/img/menu.png" className="icon" alt="" />

                      <span
                        className="text nav-test"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        More Products
                      </span>
                      <i
                        class="bi bi-chevron-down toggle_btn_aside"
                        onClick={() => setOpen(!open)}
                        style={{ display: isOpen ? "block" : "none" }}
                      ></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="bottom-content">
            <li className=""></li>
            <li class="mode">
              <div class="moon-sun">
                {/* <!-- <i class='bx bx-moon icon moon' ></i>
                        <i class='bx bx-sun icon sun' ></i> --> */}
                <img src="/img/Sun.png" alt="" srcset="" />
              </div>
              {/* <!-- <span class="mode-text text">Dark Mode</span> --> */}

              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>
            <ul
              className="menu-links"
              style={{ display: isOpen ? "block" : "none" }}
              id="social-icons"
            >
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
            <div className="clear"></div>
            <p
              class="copy-right"
              style={{ display: isOpen ? "block" : "none" }}
            >
              @2022 Arborswap. All right Reserved.{" "}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
