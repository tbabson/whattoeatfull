import { Link } from "react-router-dom";

const Food = ({
  _id,
  image,
  name,
  meal,
  country,
  ingredients,
  howToPrepare,
  price,
}) => {
  return (
    <div>
      <Link key={_id} to={`/foods/${_id}`}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div>
          <p>{meal}</p> <p>{country}</p>
          <h3>{name}</h3>
          <div className="">
            <h3>Ingredients:</h3>

            <ol>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
          <div className="">
            <h3>How to prepare:</h3>

            <ol>
              {howToPrepare.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <h5>{price}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Food;
