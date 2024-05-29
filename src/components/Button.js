import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, customClass, onClick }) => {
  return (
    <>
      <button className={customClass} onClick={onClick}>
        {text}{" "}
        {text === "Copied" && (
          <FontAwesomeIcon
            icon={faCheck}
            beatFade
            style={{ color: "#ffffff" }}
          />
        )}
      </button>
    </>
  );
};

export default Button;
