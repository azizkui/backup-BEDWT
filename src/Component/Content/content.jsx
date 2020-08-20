import React from "react";

import Ability from "../Ability/ability";
import Destination from "../Destination/destination";

export default function Content() {
  return (
    <div>
      <Ability />
      <div className="group-tour">Group Tour </div>
      <Destination />
    </div>
  );
}
