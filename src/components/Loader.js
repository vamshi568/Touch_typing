import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <div className="flex w-screen justify-center">

  <ContentLoader 
    speed={2}
    width={1140}
    height={800}
    viewBox="0 0 1040 800"
    backgroundColor="#DDE6ED"
    foregroundColor="#9DB2BF"
    {...props}
    >
    <rect x="100" y="133" rx="0" ry="0" width="188" height="73" /> 
    <rect x="450" y="133" rx="0" ry="0" width="188" height="73" /> 
    <rect x="750" y="133" rx="0" ry="0" width="188" height="73" /> 
    <rect x="400" y="259" rx="0" ry="0" width="304" height="28" /> 
    <rect x="197" y="303" rx="0" ry="0" width="700" height="74" /> 
    <rect x="350" y="403" rx="0" ry="0" width="413" height="17" /> 
    <rect x="270" y="488" rx="0" ry="0" width="600" height="162" />
  </ContentLoader>
      </div>
)

export default MyLoader