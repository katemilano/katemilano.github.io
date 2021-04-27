import React from "react";
import "../styles/Table.css";

function Table(props) {
  return (
  <table id="dtDynamicVerticalScrollExample" className="table table-striped table-bordered table-sm" cellSpacing="0"
    width="100%">
    <thead>
      <tr>
        <th className="th-sm">Name
        </th>
        <th className="th-sm">Position
        </th>
        <th className="th-sm">Office
        </th>
        <th className="th-sm">Age
        </th>
        <th className="th-sm">Start date
        </th>
        <th className="th-sm">Salary
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.position}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Kate</td>
        <td>Engineer</td>
        <td>5</td>
        <td>5</td>
        <td>January</td>
        <td>50</td>
      </tr>
    </tbody>
  </table>

  );
}

export default Table;
