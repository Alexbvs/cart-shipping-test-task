import React from "react";
import ContentLoader from "react-content-loader";

const Preloader = (props) => (
    <ContentLoader 
    speed={2}
    width={820}
    height={500}
    viewBox="0 0 820 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%' }}
  >
    <rect x="120" y="110" rx="3" ry="3" width="200" height="33" /> 
    <rect x="120" y="75" rx="3" ry="3" width="200" height="8" /> 
    <circle cx="50" cy="110" r="50" /> 
    <rect x="340" y="60" rx="0" ry="0" width="480" height="100" /> 
    <rect x="120" y="270" rx="3" ry="3" width="200" height="33" /> 
    <rect x="120" y="235" rx="3" ry="3" width="200" height="8" /> 
    <circle cx="50" cy="270" r="50" /> 
    <rect x="340" y="220" rx="0" ry="0" width="480" height="100" /> 
    <rect x="120" y="430" rx="3" ry="3" width="200" height="33" /> 
    <rect x="120" y="395" rx="3" ry="3" width="200" height="8" /> 
    <circle cx="50" cy="430" r="50" /> 
    <rect x="340" y="380" rx="0" ry="0" width="480" height="100" />
  </ContentLoader>
)

export default Preloader;