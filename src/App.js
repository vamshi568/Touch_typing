import React, { useEffect, useState } from "react";
import KeyVisualization from "./components/KeyVisualization";
import Statistics from "./components/Statistics";
import TypingBox from "./components/TypingBox";
import Keyboard from "./components/Keyboard";
import { useSelector } from "react-redux";
import MyLoader from "./components/Loader";

const TouchTypingApp = () => {
  const [typedText, setTypedText] = useState("");
  const [repitation, setrepitation] = useState(1);
  const [nextKeys, setNextKeys] = useState([
    "sad",
    "lad",
    "flask",
    "ask",
    "a",
    "lad",
    "fad",
    "lads",
    "flask",
    "flask",
    "lad",
    "asks",
    "lads",
    "fad",
    "ask",
  ]);
  const [sentance, setsentace] = useState("");
  const [keysPressed, setKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [letters, setLetter] = useState("");
  const [length, setLength] = useState(2);
  const [count, setCount] = useState(0);
  const [isloading,setisloading] = useState(false)
  const inputValue1=useSelector((state) => state.counter.value)
  let [starttime,settime]=useState(0)
  let [wpm,setwpm]=useState(0)

  useEffect(() => {
   
    setsentace(generatesentace(nextKeys, length, repitation));
  }, [nextKeys, length, repitation]);

  const startcount=()=>{
    let date=new Date();
    settime(date.getTime())
  }
  
  const handleInputChange = (e) => {
    
    const inputValue=e.target.value
    setCount((p) => (p += 1));
    setTypedText(inputValue);
    if (e.target.value.trim() === sentance.trim()) {
      if (starttime>=0){

        let date = new Date()
        let some=date.getTime()
        setwpm(Math.round((length/((some-starttime)/1000))*60))
        startcount()
      }
      setsentace(generatesentace(nextKeys, length, repitation));
      setTypedText("");
      setAccuracy(Math.floor((typedText.length / count) * 100));

      setCount(0);
    }

    setKeysPressed(keysPressed + 1);
  };
  function convertStringToList(inputString) {
    inputString = inputString.trim();

    const sentences = inputString.split("\n");

    sentences.shift();

    const sentenceList = sentences.map((e) => e.trim().toLowerCase().slice(3));

    return sentenceList;
  }
  const rendersentance = () => {
    setisloading(true)
    const apiKey =  `${process.env.REACT_APP_SECRET_KEY}`;
    
    const prompt = `Generate 20 words with only using the letters ${letters}.`;

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.7,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const completion = data.choices[0].text;
        const listofword = convertStringToList(completion);
        setNextKeys(listofword);
        setLetter("");
        setisloading(false)
      })
      .catch((error) => {
        setNextKeys([
          "sad;",
          "lad",
          "flask;",
          "ask",
          "a",
          "lad",
          "fad",
          "lads;",
          "flask",
          "flask",
          "lad",
          "asks;",
          "lads",
          "fad",
          "ask",
        ]);
        setLetter("");
        setisloading(false)
      });
  };

  const generatesentace = (array, length, repitation) => {
    let sentance = "";
    let sent = "";
    for (let i = 0; i < length; i++) {
      sentance += array[Math.floor(Math.random() * array.length)].trim() + " ";
    }
    for (let i = 0; i < repitation; i++) {
      sent += sentance;
    }
    return sent;
  };

  if (isloading){
    return <MyLoader/>
  }
  return (
    <div className="flex justify-center items-center  h-screen bg-[#DDE6ED]">
      <div className="w-11/12 ">
        <div className="flex justify-around items-center ">
          <div className="flex flex-col gap-3">
            <label className="text-[#27374D] text-xl" htmlFor="letters">Practice Letters</label>
            <input
              id="letters"
              className="p-4 bg-[#9DB2BF] rounded-lg placeholder-[#2d3e56d5]"
              type="text"
              onBlur={rendersentance}
              placeholder="default asdfjkl;"
              onChange={(e) => setLetter(e.target.value)}
              value={letters}
            />
          </div>
          <div className="flex gap-5">

          
          <div className="flex flex-col gap-3">
            <label className="text-[#27374D] text-xl" htmlFor="word">No.of words</label>
            <input
              id="words"
              className="p-2 text-center bg-[#9DB2BF] pl-4 text-lg rounded-lg placeholder-[#334764d3]"
              type="number"
              placeholder="no.of words"
              onChange={(e) => setLength(e.target.value)}
              value={length}
              min={1}
              max={10}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-gray-700 text-xl" htmlFor="repitation">Repitation</label>
            <input
              id="repitation"
              className="p-2 pl-4 bg-[#9DB2BF] text-lg text-center rounded-lg "
              type="number"
              placeholder="repitation"
              onChange={(e) => setrepitation(e.target.value)}
              value={repitation}
              min={1}
              max={5}
            />
          </div>
          </div>
        </div>
        <KeyVisualization nextKeys={sentance} />
        <TypingBox
          typedText={typedText}
          handleInputChange={handleInputChange}
          nextKeys={sentance}
          startcount={startcount}
        />
        <Statistics keysPressed={keysPressed} wpm={wpm} accuracy={accuracy} />
      <Keyboard inputValue={inputValue1}/>
      </div>
    </div>
  );
};

export default TouchTypingApp;
