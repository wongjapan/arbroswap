import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState(false);
  // let user = [(newlink = "/launchpad")];
  return (
    <>
    <nav className="slider" style={{ width: isOpen ? "200px" : "50px" }}>
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
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
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

                  <span className="text nav-test">Launchpad </span>
                  <i
                    class="bi bi-chevron-down toggle_btn_aside"
                    onClick={() => setOpen(!open)}
                  ></i>
                </a>
              </li>
              <div class="sidebar_contain_aside">
                {/* <div class="open-menu open1"> */}

                <Link to="/pools">Pools</Link>
                {/* <a href="">Swap</a>
                <a href="">Liquitity</a>
                <a href="">Limit Order</a> */}
              </div>
              <li className="nav-link">
                <a href="#">
                  <img
                    src="images/Group 427319472.png"
                    className="icon"
                    alt=""
                  />

                  <span className="text nav-test">Locker</span>
                  <i
                    class="bi bi-chevron-down toggle_btn_aside"
                    onClick={() => setOpen(!open)}
                  ></i>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                  <img src="images/lock.png" className="icon" alt="" />

                  <span className="text nav-test">Airdropper</span>
                  <i
                    class="bi bi-chevron-down toggle_btn_aside"
                    onClick={() => setOpen(!open)}
                  ></i>
                </a>
              </li>
              <div class="sidebar_contain_aside">
                {/* <div class="open-menu open1"> */}

                <Link to="/live">Airdrops</Link>
                <br />
                <Link to="/airdropform1">Create Airdrop</Link>
                {/* <a href="">Swap</a>
                <a href="">Liquitity</a>
                <a href="">Limit Order</a> */}
              </div>
              <li className="nav-link">
                <a href="#">
                  {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                  <img src="images/menu.png" className="icon" alt="" />

                  <span className="text nav-test">More Products</span>
                  <i
                    class="bi bi-chevron-down toggle_btn_aside"
                    onClick={() => setOpen(!open)}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
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
