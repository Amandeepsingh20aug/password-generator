import { useState } from "react";

const usePassword = () => {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const generatePassword = (checkboxData, lenght) => {
    let charset = "",
      generatePassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state !== false);
  
     
    if(selectedOption.length === 0){
      setErr(" Select at least one option. ")
      setPass("")
      return
    }
     
    selectedOption.forEach((option)=>{
      switch(option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    })

    for(let i=0;i<lenght;i++){
      const randomIndex = Math.floor(Math.random()* charset.length);
      generatePassword += charset[randomIndex];
    }
    
    setPass(generatePassword);
    setErr('');
  };

  return { pass, err, generatePassword };
};

export default usePassword;
