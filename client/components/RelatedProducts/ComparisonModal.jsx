import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ComparisonModal = ({
 relatedProductData,
 product
}) => {

  //create array of objects containing each feature, currentProductValue if available and relatedProductValue if available
  //get array of all uniqueFeatures from both product and relatedProductData
  let currentProductFeatures = product.features.map(feature => feature.feature);
  let relatedProductFeatures = relatedProductData.features.map(feature => feature.feature);
  let uniqueFeaturesSet = new Set([...currentProductFeatures, ...relatedProductFeatures])
  let uniqueFeatures = [...uniqueFeaturesSet];
  //iterate over uniqueFeatures and create combinedCharacteristics object of objects with uniqueFeatures[i]: {current: '', related: ''}
  let combinedCharacteristics = {};
  for (let feature of uniqueFeatures) {
    combinedCharacteristics[feature] = {current: '', related: ''}
  }
  //iterate over product.features
  for (let characteristic of product.features) {
    //update current to value of feature
    combinedCharacteristics[characteristic.feature].current = characteristic.value
  }
  //iterate over relatedProductData.features
  for (let characteristic of relatedProductData.features) {
    //update related to value of feature
    combinedCharacteristics[characteristic.feature].related = characteristic.value
  }
  console.log({combinedCharacteristics})


  return (
    <>
      <DialogTitle>Comparing</DialogTitle>
      <DialogContent>
        <table>
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