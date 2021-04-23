import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
   textAlign: 'center'
  },
  content: {
    backgroundColor: '#FEDBD0'
  },
  title: {
    backgroundColor: '#442c2e',
    color: '#FEDBD0',
    textAlign: 'center'
  },
  feature: {
    fontWeight: 700
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
    combinedCharacteristics[feature] = {current: '', related: ''}
  }

  for (let characteristic of product.features) {
    combinedCharacteristics[characteristic.feature].current = characteristic.value
  }

  for (let characteristic of relatedProductData.features) {
    combinedCharacteristics[characteristic.feature].related = characteristic.value
  }

  return (
    <>
      <DialogTitle className={classes.title}>Comparing</DialogTitle>
      <DialogContent className={classes.content}>
        <table cellPadding="10px" cellSpacing="20px" className={classes.table}>
          <thead >
          <tr>
            <th>{product.name}</th>
            <th></th>
            <th>{relatedProductData.name}</th>
          </tr>
          </thead>
          <tbody>
          {uniqueFeatures.map(feature => (
            <tr key={feature}>
              <td>{combinedCharacteristics[feature].current}</td>
              <td className={classes.feature}>{feature}</td>
              <td>{combinedCharacteristics[feature].related}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </DialogContent>
    </>
  )
};

export default ComparisonModal;