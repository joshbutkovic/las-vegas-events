import React from "react";

const Event = ({ ...props }) => {
  // aggregate and filter event here

  return (
    <div class="container is-widescreen">
      <div class="notification">
        EVENT NAME: {props.event.name || "no event"}
      </div>
    </div>
  );
};

export default Event;
