import React from "react";
import styles from "./modalstyleAirdropper.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btn-close">
          close <img src="/img/close-circle.png" alt="" />
        </button>

        {/* set */}
        <>
          <div className="container_app7">
            <div className="app7_contain_section">
              {/* section1 */}
              <div className="app7_contain_section_block_1 clear">
                <div className="app7_join_pool fl-left ">Set Time</div>
                {/* <div className="app7_close fl-right ">
              <a href="#">
                close <img src="/img/close-circle.png" alt="" />
              </a>
            </div> */}
              </div>
              {/* section2 */}

              <div className="app7_contain_section_block_3 clear">
                <div className="app7_amount air_app10_mgtp_10 fl-left ">
                  Ends On (UTC) <span>*</span>{" "}
                  <img src="/img/Ques.png" alt="" />
                </div>
              </div>
              <form action="#">
                <input
                  type="datetime-local"
                  id="birthdaytime"
                  name="birthdaytime"
                />
              </form>
              <div className="app7_contain_section_block_3 clear">
                <div className="app7_amount air_app10_mgtp_10 fl-left ">
                  {/* <img src="/img/Mark (1).png" alt="" /> End Now instead */}
                  <label class="container21">
                    End Now instead
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="app7_contain_bottom_section clear ">
              <div className="app7_contain_bottom_section_middle">
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </>
        {/* set */}
      </div>
    </div>
  );
};

export default Modal;
