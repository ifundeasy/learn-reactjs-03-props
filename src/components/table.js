import React, { Component } from 'react';

const THeader = function () {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};
const TBody = (props) => {
  const { characters } = props;
  const rows = characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { myData } = this.props;

    return (
      <div style={{ marginTop: '20px', overflowX: 'auto' }}>
        <table>
          <THeader />
          <TBody characters={myData} />
        </table>
      </div>
    );
  }
}

export default Table;
