// GET /reviews/
// https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?sort=newest&product_id=24156
var reviews = {
  product: '24156',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 328556,
      rating: 5,
      summary: 'This product was great!',
      recommend: true,
      response: '',
      body:
        'I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.',
      date: '2019-01-01T00:00:00.000Z',
      reviewer_name: 'funtime',
      helpfulness: 8,
      photos: [],
    },
    {
      review_id: 328557,
      rating: 4,
      summary: 'This product was ok!',
      recommend: false,
      response: '',
      body:
        'I really did not like this product solely because I am tiny and do not fit into it.',
      date: '2019-01-11T00:00:00.000Z',
      reviewer_name: 'mymainstreammother',
      helpfulness: 2,
      photos: [],
    },
  ],
};

// GET /reviews/meta
// https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=24156
var reviewsMeta = {
  product_id: '24156',
  ratings: { 4: '1', 5: '1' },
  recommended: { false: '1', true: '1' },
  characteristics: {
    Fit: { id: 81054, value: '4.0000000000000000' },
    Length: { id: 81055, value: '3.5000000000000000' },
    Comfort: { id: 81056, value: '5.0000000000000000' },
    Quality: { id: 81057, value: '4.0000000000000000' },
  },
};

module.exports = {
  reviews,
  reviewsMeta,
};
