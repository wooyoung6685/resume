import React from "react";
import FullPage, { FullPageSections, FullpageNavigation, FullpageSection } from "@ap.cx/react-fullpage";
import VisualPage from "./components/Section1/VisualPage";

function FullPageScroll() {
  const SectionStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <VisualPage />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <h1>스크린 2</h1>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <h1>스크린 3</h1>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
}

export default FullPageScroll;
