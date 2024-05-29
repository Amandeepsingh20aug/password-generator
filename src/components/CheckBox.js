const CheckBox = ({ title, state, onChange,index }) => {
  return (
    <div key={index} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={state}
        className="cursor-pointer"
        onChange={onChange}
      />
      <label className="text-white">{title}</label>
    </div>
  );
};

export default CheckBox;
