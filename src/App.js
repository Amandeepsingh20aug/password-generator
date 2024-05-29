import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [password, setPassword] = useState("Qwsdr@#");
  const [textCopy, setTextCopy] = useState("Copy");
  const [range, setRange] = useState(4);
  const copy = () => {
    setTextCopy("Copied");

    setTimeout(()=>{
     setTextCopy('Copy')
    },1000)
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-black my-4">
        Password Generator
      </h1>
      <div className="w-1/2 bg-black mx-auto rounded-md">
        <div className="header py-4 px-4 flex justify-between items-center">
          <p className="text-white text-2xl font-semibold">{password}</p>
          <CopyToClipboard text={password}>
            <Button
              text = {textCopy}
              customClass = "text-white p-2 bg-cyan-500 font-semibold rounded-lg uppercase"
              onClick={copy}
            />
          </CopyToClipboard>
        </div>
        <div className="character-lenght py-4 px-4">
          <div className="flex justify-between items-center">
            <p className="text-white font-semibold text-xl">
              Character Lenght:
            </p>
            <p className="text-white font-semibold text-xl">{range}</p>
          </div>
          <div className="py-4">
            <input
              type="range"
              className="w-full cursor-pointer"
              min="4"
              max="20"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
