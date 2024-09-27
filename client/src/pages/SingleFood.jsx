import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  const { data } = await customFetch.get(`/foods/${params.id}`);
  return { food: data };
};

const SingleFood = () => {
  const { food } = useLoaderData();
  console.log(food);

  const { _id, image, name, meal, country, ingredients, howToPrepare, price } =
    food.food;

  const nairaAmount = formatPrice(price);

  return (
    <section>
      <div key={_id}>
        <img src={image} alt={name} />
        <div>
          <div>
            <p>{meal}</p>
            <p>{country}</p>
          </div>
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
              <ol>
                {howToPrepare.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </ol>
          </div>
          <div>{nairaAmount}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleFood;
