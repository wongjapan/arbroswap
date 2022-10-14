import React from "react";
import { Link } from "react-router-dom";

export default function Liveon_end_time() {
  return (
    <>
      <div>
        <div className="inner_box1 mob_res_active fl-left">
          {" "}
          <Link to="/live">Live</Link>{" "}
        </div>
        <div className="inner_box2 mob_res_off fl-left">
          {" "}
          <Link to="/ended">Ended</Link>{" "}
        </div>
        <div className="inner_box3 mob_res_off fl-left">
          <Link to="/timed">Timed</Link>{" "}
        </div>
      </div>
    </>
  );
}
