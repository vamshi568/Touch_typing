import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <div className="flex w-screen h-screen justify-center">

  <ContentLoader 
    speed={2}
    width={1140}
    height={600}
    viewBox="0 0 1040 800"
    backgroundColor="#DDE6ED"
    foregroundColor="#9DB2BF"
    {...props}
    >
    <rect x="100" y="100" rx="0" ry="0" width="188" height="73" /> 
    <rect x="550" y="100" rx="0" ry="0" width="188" height="73" /> 
    <rect x="750" y="100" rx="0" ry="0" width="188" height="73" /> 
    <rect x="380" y="300" rx="0" ry="0" width="350" height="28" /> 
    <rect x="140" y="350" rx="0" ry="0" width="800" height="90" /> 
    <rect x="350" y="400" rx="0" ry="0" width="413" height="17" /> 
    <rect x="200" y="480" rx="0" ry="0" width="700" height="302" />
  </ContentLoader>
      </div>
)

export default MyLoader