import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
   textAlign: 'center'
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
      <DialogTitle>Comparing</DialogTitle>
      <DialogContent>
        <table className={classes.table}>
          <thead>
          <tr>
            <th>{product.name}</th>
            <th>
            </th>
            <th>{relatedProductData.name}</th>
          </tr>
          </thead>
          <tbody>
          {uniqueFeatures.map(feature => (
            <tr key={feature}>
              <td>{combinedCharacteristics[feature].current}</td>
              <td>{feature}</td>
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