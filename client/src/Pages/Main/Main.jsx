import React from "react";
import "../../asset/css/bootstrap.css";
import "../../asset/css/styles.css";
import Alert from "../../components/Alert/Alert";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3";
import Section4 from "../../components/Section4/Section4";
import Section5 from "../../components/Section5/Section5";
import Section6 from "../../components/Section6/Section6";
// import YoutubesVideos from "../../components/YoutubesVideos/YoutubesVideos";

function Main() {
  return (
    <>
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <YoutubesVideos /> */}
    </>
  );
}

export default Main;
