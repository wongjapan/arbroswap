import React from "react";
import { Link } from "react-router-dom";

export default function Live_endon_time() {
  return (
    <>
      {/* <div>
        <div className="inner_box3 fl-left">
          {" "}
          <Link to="/">Live</Link>{" "}
        </div>
        <div className="inner_box1 fl-left">
          {" "}
          <Link to="/">Ended</Link>{" "}
        </div>
        <div className="inner_box2 fl-left">
          <Link to="/">Timed</Link>{" "}
        </div>
      </div> */}
      <div>
        <div className="inner_box3 fl-left">
          {" "}
          <Link to="/live">Live</Link>{" "}
        </div>
        <div className="inner_box1 fl-left">
          {" "}
          <Link to="/ended">Ended</Link>{" "}
        </div>
        <div className="inner_box2 fl-left">
          <Link to="/timed">Timed</Link>{" "}
        </div>
      </div>
    </>
  );
}
