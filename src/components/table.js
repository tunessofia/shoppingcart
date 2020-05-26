import { Fragment } from "react";

export const Table = (props) => {
   
    const mapHead = () => {
        return this.props.keys.map((key, idx) => {
            return (<th key={idx}>{label}</th>);
          });
    };

    const mapBody = () => {
        return this.props.data.map((array, key) => {

            const rowCells = array.map((value, idx) => {
              return (<td key={idx} style={this.props.cellStyle}>{value}</td>);
            });
          
            return (
              <tr className={classN} key={key}>{rowCells}</tr>
            );
        });
    };
  
    render() {
      
  
      return (
          <Fragment>
            <thead>
                {mapHead}
            </thead>
            <tbody>
                {mapBody}
            </tbody>
          </Fragment>
      );
    }
  }