export const totalNumberOfRatings = (product) => product.reviews.length;

export const starCount = (product, numberOfStars) =>
  product.reviews.filter((review) => review.rating === numberOfStars).length;

export const starPercentage = (numberOfStars, product) =>
  (starCount(product, numberOfStars) * 100) / totalNumberOfRatings(product);

export const averageStars = (product) =>
  (5 * starCount(product, 5) +
    4 * starCount(product, 4) +
    3 * starCount(product, 3) +
    2 * starCount(product, 2) +
    1 * starCount(product, 1)) /
  totalNumberOfRatings(product);
