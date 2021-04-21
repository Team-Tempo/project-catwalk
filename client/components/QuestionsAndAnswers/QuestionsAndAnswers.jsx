import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';
import config from '../../../config';
import axios from 'axios';

console.log(config.GITHUB_TOKEN);

const getQuestions = (id) => {
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions?product_id=${id}`, {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    })
    .then((response) => {
      console.log('response data', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('error getting data');
      console.error(err);
    });
};

const getAnswers = (id) => {
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${id}/answers`, {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    })
    .then((response) => {
      console.log('response data', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log('error getting data');
      console.error(err);
    });
};

console.log('response data log', getQuestions(24156));
console.log('response data answers', getAnswers(24156))

// const getProductStyles = (id) => {
//   return axios
//     .get(
//       `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`,
//       {
//         headers: {
//           Authorization: config.GITHUB_TOKEN,
//         },
//       }
//     )
//     .then((response) => {
//       return response.data.results;
//     });
// };

// const ProductOverview = ({ productId }) => {
//   const [product, setProduct] = useState([]);
//   const [styles, setStyles] = useState([]);
//   const [currentStyle, setCurrentStyle] = useState({});

//   useEffect(() => {
//     async function fetchProduct() {
//       const result = await getProduct(productId);
//       setProduct(result);
//     }

//     async function fetchProductStyles() {
//       const result = await getProductStyles(productId);
//       setStyles(result);
//       return result;
//     }

//     async function setupStyles() {
//       const result = await fetchProductStyles();
//       setCurrentStyle(result[0]);
//     }

//     fetchProduct();
//     setupStyles();
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}>
//         <Box display="flex" flexDirection="column">
//           <ImageGallery currentStyle={currentStyle} />
//         </Box>
//       </Grid>
//       <Grid container direction="column" justify="space-between" item xs={4}>
//         <Grid item>
//           <ProductInformation product={product} currentStyle={currentStyle} />
//         </Grid>
//         <Grid item>
//           <StyleSelector
//             styles={styles}
//             currentStyle={currentStyle}
//             setCurrentStyle={setCurrentStyle}
//           />
//         </Grid>
//         <Grid item>
//           <AddToCart currentStyle={currentStyle} />
//         </Grid>
//       </Grid>
//       <Grid item xs={3}></Grid>
//     </Grid>
//   );
// };

// export default ProductOverview;

const QuestionsAndAnswers = ( { productId }) => {
  // var sortedQuestions = sortByHelpfulness(QuestionsDummyData.questions.results, 4);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  // const [currentStyle, setCurrentStyle] = useState({});


  useEffect(() => {
    async function fetchQuestions() {
      const questionData = await getQuestions(productId);
      console.log('questions are here!', questionData.results);
      setQuestions(questionData.results);
    }

    async function fetchAnswers() {
      const answerData = await getAnswers(productId);
      console.log('answers are here!', answerData);
      setAnswers(answerData);
      return answerData;
    }

    fetchQuestions();
    fetchAnswers();
  }, []);

  console.log('questions', questions);
  var sortedQuestions = sortByHelpfulness(questions, 4);
  console.log('sorted qs', sortedQuestions);
  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>

      <QuestionSearch questions={sortedQuestions}/>
      {sortedQuestions.map((question, i) => {
        return <QAndA question={question} key={i}/>
      })}
      <Photos questions={QuestionsDummyData.questions}/>

      <h6>LOAD MORE</h6>
      <Button variant="outlined">
        MORE ANSWERED QUESTIONS
      </Button>
      <Button variant="outlined">
        ADD A QUESTION   +
      </Button>
    </div>
  );
};

const sortByHelpfulness = (questionsAndAnswersData, numQuestions) => {
  console.log('q and a data here!!', questionsAndAnswersData);
  var result = questionsAndAnswersData.slice();
  for (var i = 0; i < questionsAndAnswersData.length; i++) {
    var currentValue = questionsAndAnswersData[i].question_helpfulness;
    var position = i;
    while (position > 0 && questionsAndAnswersData[position] < questionsAndAnswersData[position - 1]) {
      questionsAndAnswersData[position] = questionsAndAnswersData[position - 1];
      questionsAndAnswersData[position - 1] = currentValue;
    }
  }
  result = result.slice(0, numQuestions);
  console.log('sorted questions', result);
  return result;
}

export default QuestionsAndAnswers;