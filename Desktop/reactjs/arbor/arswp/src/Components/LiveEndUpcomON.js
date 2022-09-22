import React from "react";
import { Link } from "react-router-dom";

export default function Live_endon_time() {
  return (
    <>
      <div>
        <div className="inner_box3 fl-left">
          {" "}
          <Link to="/LaunchpadPool/pools/Live">Live</Link>{" "}
        </div>
        <div className="inner_box2 fl-left">
          {" "}
          <Link to="/LaunchpadPool/pools/Ended">Ended</Link>{" "}
        </div>
        <div className="inner_box1 fl-left">
          <Link to="/LaunchpadPool/pools/Upcoming">Upcoming</Link>{" "}
        </div>
      </div>
    </>
  );
}
