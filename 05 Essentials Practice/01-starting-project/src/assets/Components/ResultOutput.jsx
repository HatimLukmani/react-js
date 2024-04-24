import { formatter } from "../../util/investment";
export default function ResultOutput({ outputData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {outputData.map((ele) => {
          return (
            <tr key={formatter.format(ele.year)}>
              <td>{formatter.format(ele.year)}</td>
              <td>{formatter.format(ele.valueEndOfYear)}</td>
              <td>{formatter.format(ele.interest)}</td>
              <td>{ele.totalInterest}</td>
              <td>{ele.investedCapital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
