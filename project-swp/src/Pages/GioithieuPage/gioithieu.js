import React from "react";
import ContentUpperHomepage from "../../Components/contentUpperHomepage/ContentUpperHomepage";
import ContentMiddleHomepage from "../../Components/contentMiddleHomepage/ContentMiddleHomepage";
import ContentLowerHomepage from "../../Components/contentLowerHomepage.js/ContentLowerHomepage";

export default function Gioithieu() {
  return (
    <div className="homepage">
      <ContentUpperHomepage />
      <ContentMiddleHomepage />
      <ContentLowerHomepage />
    </div>
  );
}
