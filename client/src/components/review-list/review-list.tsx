import { Review } from '../../types/review';
import { Review as ReviewComponent } from '../review/review';

type ReviewsList = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewsList) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}