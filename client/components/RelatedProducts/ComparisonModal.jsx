import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      open: false,
    }
  }

  render() {
    return (
        <>
         <DialogTitle>Comparison</DialogTitle>
         <DialogContent>
           <table>
             <thead>
              <tr>
                <th>Current Product Name</th>
                <th>
                </th>
                <th>Compared Product Name</th>
              </tr>
             </thead>
             <tbody>
              <tr>
                <td>Value</td>
                <td>Feature</td>
                <td>Value</td>
              </tr>
             </tbody>
           </table>
         </DialogContent>
       </>
    )
  }
}

export default ComparisonModal;