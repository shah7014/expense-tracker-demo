import "./ChartBar.css";

const ChartBar = ({ label, value }) => {
  return (
    <div>
      <h3>
        {label} :- {value}
      </h3>
    </div>
  );
};

export default ChartBar;
