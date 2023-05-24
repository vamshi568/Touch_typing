import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changevalue } from "./Universal";

const TypingBox = ({ typedText, handleInputChange, nextKeys,startcount }) => {
  const dispatch=useDispatch()
  const correctKeys = nextKeys.trim();
  const renderTypedText = () => {
    const characters = typedText.split("");

    return characters.map((char, index) => {
      
      if (char === correctKeys[index]) {
dispatch(changevalue(correctKeys[index+1]));
        return (
          <span key={index} className="font-semibold" style={{ color: "#002B5B" }}>
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} className="font-semibold" style={{ color: "#EA5455" }}>
            {char}
          </span>
        );
      }
    });
  };
  useEffect(()=>{
    dispatch(changevalue(correctKeys[0]));

  },[dispatch,correctKeys])

  return (
    <div className="flex relative  justify-center">
      <input 
        type="text"
        value={typedText}
        onChange={handleInputChange}
        placeholder="Type here to practice.."
        className="text-transparent z-10 bg-transparent cursor-auto text-center caret-black placeholder-[#334764d3] text-2xl h-[90px] w-[800px]"
        onFocus={startcount}
      />
      <div className="absolute flex items-center bg-[#9DB2BF] rounded-lg justify-center h-[90px] text-2xl  text-center z-0 w-[800px]"><h1 className="text-2xl ">{renderTypedText()}</h1></div>
    </div>
  );
};

export default TypingBox;
