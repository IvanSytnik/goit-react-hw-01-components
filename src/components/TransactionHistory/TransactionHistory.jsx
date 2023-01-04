import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.2 +
      ')';
  
    return color;
  };
const TransactionHistory  = ({items})=> {
    return(
    <table className={css.table}>
        <thead>
            <tr style={{ backgroundColor: createColor() }}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    
        <tbody>
            {items.map(item => 
            (
                <tr key={item.id} style={{ backgroundColor: createColor() }}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            )
            )}
        
        </tbody>
    </table>)
}
export default TransactionHistory;

TransactionHistory.propTypes = {
   items: PropTypes.array.isRequired
  };