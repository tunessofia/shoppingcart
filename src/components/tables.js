import React from "react";

export const TableHead = (props) => {

  const mapHead = () => {
    return props.keys.map((key, idx) => {
      return (<th key={idx}>{label}</th>);
    });
  };

  return (
      <thead>
        {mapHead}
      </thead>
  );
}

export const TableBody = (props) => {
  const mapBody = () => {
    return props.data.map((array, key) => {

      const rowCells = array.map((value, idx) => {
        return (<td key={idx} style={this.props.cellStyle}>{value}</td>);
      });

      return (
        <tr className={classN} key={key}>{rowCells}</tr>
      );
    });
  };

  return (
    <tbody>
      {mapBody}
    </tbody>
  );
}