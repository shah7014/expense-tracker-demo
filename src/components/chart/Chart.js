import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ expenses }) => {
  const dataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (let expense of expenses) {
    const monthNo = expense.date.getMonth();
    dataPoints[monthNo].value += Number(expense.amount);
  }

  return (
    <div>
      {expenses.length > 0 && (
        <div>
          {dataPoints.map((point) => (
            <ChartBar
              label={point.label}
              value={point.value}
              key={point.label}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Chart;
