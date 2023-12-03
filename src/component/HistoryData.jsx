import React from "react";

function HistoryData() {


  return (
    <div className="table-container">
      <h1>Record</h1>
      <table className="dataTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>pH</th>
            <th>Humidity</th>
            <th>Mineral</th>
            <th>Fan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21/21/21</td>
            <td>25</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>on</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HistoryData;
