// GET /reviews/
// https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?sort=newest&product_id=24156
// NOT WORKING
var reviews = {
  product: '2',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 5,
      rating: 3,
      summary: "I'm enjoying wearing these shades",
      recommend: false,
      response: null,
      body: 'Comfortable and practical.',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: 5,
      photos: [
        {
          id: 1,
          url: 'urlplaceholder/review_5_photo_number_1.jpg',
        },
        {
          id: 2,
          url: 'urlplaceholder/review_5_photo_number_2.jpg',
        },
        // ...
      ],
    },
    {
      review_id: 3,
      rating: 4,
      summary: 'I am liking these glasses',
      recommend: false,
      response: "Glad you're enjoying the product!",
      body:
        "They are very dark. But that's good because I'm in very sunny spots",
      date: '2019-06-23T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: 5,
      photos: [],
    },
    // ...
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
