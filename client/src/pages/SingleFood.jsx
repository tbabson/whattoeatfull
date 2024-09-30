import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import customFetch from "../utils/customFetch";

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
  } = food.food;

  const nairaAmount = formatPrice(price);

  return (
    <section>
      <div key={_id} className="singleFood">
        <div className="foodInfoContainer">
          <div className="foodImage">
            <img src={image} alt={name} />
            <div className="mealAndCountry">
              <p>{meal}</p>
              <p>{country}</p>
            </div>
          </div>
          <div className="foodDetail"></div>
          <h1>{name}</h1>
          <div className="ingredients">
            <h3>Ingredients:</h3>
            <ol>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
          <div className="howTo">
            <h3>How to prepare:</h3>
            <ol>
              {howToPrepare.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div>{nairaAmount}</div>

          <div>
            <h3>Reviews:</h3>
            <ol>
              {reviews.map((review) => {
                const { _id, user, title, comment, rating } = review;
                const { fullName } = user;
                console.log(fullName);

                return (
                  <li key={_id}>
                    <h4>{fullName}</h4>
                    <h5>{rating}</h5>
                    <p>
                      <strong>{title}</strong>
                    </p>
                    <p>{comment}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFood;
