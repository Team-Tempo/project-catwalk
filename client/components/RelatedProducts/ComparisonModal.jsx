import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    textAlign: 'center',
    minWidth: 500,
  },
  content: {
    backgroundColor: '#FFFFFF'
  },
  title: {
    backgroundColor: '#FEDBD0',
    color: '#442c2e',
    textAlign: 'center'
  },
  feature: {
    fontWeight: 700,
    fontSize: 18,
    borderBottom: '1px solid rgba(68, 44, 46, 0.2)'
  },
  cell: {
    padding: 0,
    fontSize: 18,
    borderBottom: '1px solid rgba(68, 44, 46, 0.2)'
  },
  productName: {
    fontSize: 20,
    borderBottom: '1px solid rgba(68, 44, 46, 0.2)'
  }
});

const ComparisonModal = ({
  relatedProductData,
  product
}) => {
  const classes = useStyles();

  //create uniqueFeatures array of all unique features from both product and relatedProductData:
  let currentProductFeatures = product.features.map(feature => feature.feature);
  let relatedProductFeatures = relatedProductData.features.map(feature => feature.feature);
  let uniqueFeaturesSet = new Set([...currentProductFeatures, ...relatedProductFeatures])
  let uniqueFeatures = [...uniqueFeaturesSet];

  //consolidate feature values for both current product and related product into one object:
  let combinedCharacteristics = {};
  for (let feature of uniqueFeatures) {
    combinedCharacteristics[feature] = { current: '', related: '' }
  }

  for (let characteristic of product.features) {
    combinedCharacteristics[characteristic.feature].current = characteristic.value
  }

  for (let characteristic of relatedProductData.features) {
    combinedCharacteristics[characteristic.feature].related = characteristic.value
  }

  return (
    <>
      <DialogTitle className={classes.title}>COMPARING</DialogTitle>
      <DialogContent className={classes.content}>
        <TableContainer  component={DialogContent}>
          <Table className={classes.table}>
            <colgroup>
              <col style={{ width: '33%' }} />
              <col style={{ width: '33%' }} />
              <col style={{ width: '33%' }} />
            </colgroup>
            <TableHead>
              <TableRow className={classes.row}>
                <TableCell className={classes.productName} align="center">{product.name}</TableCell>
                <TableCell className={classes.feature} align="center"></TableCell>
                <TableCell className={classes.productName} align="center">{relatedProductData.name}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniqueFeatures.map(feature => (
                <TableRow className={classes.row} key={feature}>
                  <TableCell className={classes.cell} align="center">{combinedCharacteristics[feature].current}</TableCell>
                  <TableCell align="center" className={classes.feature}>{feature}</TableCell>
                  <TableCell className={classes.cell} align="center">{combinedCharacteristics[feature].related}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </>
  )
};

export default ComparisonModal;