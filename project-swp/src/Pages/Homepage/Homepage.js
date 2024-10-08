import React from "react";
import Carousel from "../../Components/carousel/Carousel";
import "./Homepage.css";
import ContentUpperHomepage from "../../Components/contentUpperHomepage/ContentUpperHomepage";
import ContentMiddleHomepage from "../../Components/contentMiddleHomepage/ContentMiddleHomepage";
import ContentLowerHomepage from "../../Components/contentLowerHomepage.js/ContentLowerHomepage";
import BaoGiaDuKien from "../../Components/baogiadukien/BaoGiaDuKien";
import Feedback from "../../Components/feedback/Feedback/Feedback";

export default function Homepage() {
  return (
    <div className="homepage">
      <Carousel />

      <ContentMiddleHomepage />
      <BaoGiaDuKien />
      <Feedback />
      <ContentLowerHomepage />
    </div>
  );
}
