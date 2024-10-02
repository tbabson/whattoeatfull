import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/StyledPages/SingleFood";

export const loader = async ({ params }) => {
  const { data } = await customFetch.get(`/foods/${params.id}`);
  return { food: data };
};

const SingleFood = () => {
  const { food } = useLoaderData();

  const {
    _id,
    image,
    name,
    meal,
    country,
    ingredients,
    howToPrepare,
    price,
    reviews,
    numOfReviews,
    averageRating,
  } = food.food;

  const nairaAmount = formatPrice(price);

  const renderStars = (rating) => {
    const totalStars = 5; // Max rating
    const filledStars = "★".repeat(rating); // Filled stars
    const emptyStars = "☆".repeat(totalStars - rating); // Empty stars
    return filledStars + emptyStars; // Combine filled and empty stars
  };

  return (
    <Wrapper>
      <section>
        <div key={_id} className="singleFood">
          <div className="foodInfoContainer">
            <div className="foodImage">
              <img src={image} alt={name} />
            </div>
            <div className="foodDetail">
              <h1>{name}</h1>
              <div className="mealAndCountry">
                <p>{meal}</p>
                <p>{country}</p>
              </div>
              <div className="averageRating">
                <div className="spanRating">
                  <p>Average Rating: {renderStars(averageRating)}</p>
                  <span>
                    <p> {numOfReviews} reviews</p>
                  </span>
                </div>
              </div>

              <hr className="hr1" />

              <div className="ingredients">
                <h3>Ingredients:</h3>
                <ol>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ol>
              </div>

              <hr className="hr1" />

              <div className="howTo">
                <h3>How to prepare:</h3>
                <span>
                  <ol>
                    {howToPrepare.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </span>
              </div>

              <hr className="hr1" />

              <div className="amount">{nairaAmount}</div>

              <div className="reviews">
                <h3>Buyers Reviews ({numOfReviews}):</h3>
                {reviews.map((review) => {
                  const { _id, user, title, comment, rating } = review;
                  const { fullName } = user;
                  return (
                    <div key={_id}>
                      <h4>{fullName}</h4>
                      <h5>Rating: {renderStars(rating)}</h5>
                      <p>
                        <strong>{title}</strong>
                      </p>
                      <p>{comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default SingleFood;
