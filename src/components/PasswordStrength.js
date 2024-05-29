import React from 'react'

const PasswordStrength = ({password}) => {
  const getPasswordStrenght = () =>{
    const passwordLength = password.length;

    if(passwordLength <1) {
      return "";
    } else if (passwordLength<4){
      return "Very Weak";
    } else if (passwordLength <8){
      return "Poor"
    } else if (passwordLength <12){
      return "Medium"
    } else if (passwordLength <16) {
      return "Strong"
    } else {
      return "Very Strong"
    }
  }
  return (
    <>
      {password && <><p className="text-gray-500 text-xl">Strength:</p>
         <p className="text-white text-xl">{getPasswordStrenght()}</p></>}
    </>
  )
}

export default PasswordStrength