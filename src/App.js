import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";
import Button from "./components/Button";
import usePassword from "./hooks/usePassword";
import ErrorMessage from "./components/ErrorMessage";
import PasswordStrength from "./components/PasswordStrength";
import CheckBox from "./components/CheckBox";
function App() {
  const [textCopy, setTextCopy] = useState("Copy");
  const [range, setRange] = useState(4);
  const [checkBoxes, setCheckBoxes] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const handleCheckbox = (i) => {
    const chnageCheckbox = [...checkBoxes];
    chnageCheckbox[i].state = !chnageCheckbox[i].state;
    setCheckBoxes(chnageCheckbox);
  };

  const copy = () => {
    setTextCopy("Copied");

    setTimeout(() => {
      setTextCopy("Copy");
    }, 1000);
  };

  const { pass, err, generatePassword } = usePassword();
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-black my-4">
        Password Generator
      </h1>
      <div className="w-1/2 bg-black mx-auto rounded-md">
        {pass && (
          <div className="header py-4 px-4 flex justify-between items-center">
            <p className="text-white text-2xl font-semibold">{pass}</p>
            <CopyToClipboard text={pass}>
              <Button
                text={textCopy}
                customClass="text-white p-2 bg-cyan-500 font-semibold rounded-lg uppercase"
                onClick={copy}
              />
            </CopyToClipboard>
          </div>
        )}
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
              className="w-full"
              min="4"
              max="20"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
        </div>
        <div className="checkboxes px-4 pb-4 grid grid-cols-2 gap-4">
          {checkBoxes.map((item, index) => (
            <CheckBox
              title={item.title}
              state={item.state}
              key={index}
              onChange={() => handleCheckbox(index)}
            />
          ))}
        </div>
        {err && <ErrorMessage err={err} />}
        <div className="Strength px-4 pb-2 flex justify-between items-center">
          <PasswordStrength password={pass} />
        </div>
        <div className="px-4 pb-3">
          <Button
            text="Generate Password"
            customClass="text-white text-2xl p-5 bg-cyan-500 font-semibold rounded-lg uppercase w-full"
            onClick={() => generatePassword(checkBoxes, range)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
