import { Link } from "react-router-dom";
import Wrapper from "../assets/StyledPages/Food";
import { useState } from "react";

const Food = ({
  _id,
  image,
  name,
  meal,
  country,
  ingredients,
  howToPrepare,
}) => {
  const [readMore, setReadMore] = useState();
  const [summary, setSummary] = useState();

  return (
    <Wrapper>
      <div className="foodCard">
        <Link key={_id} to={`/foods/${_id}`}>
          <figure className="foodCardImage">
            <img src={image} alt={name} />
          </figure>
          <div className="foodInfo">
            <div className="mc">
              <p className="meal">{meal}</p>
              <p className="country">{country}</p>
            </div>
            <h3 className="foodName">{name}</h3>
            <div className="ingredients">
              <h5>Ingredients:</h5>
              <ol>
                {(readMore ? ingredients : ingredients.slice(0, 2)).map(
                  (ingredient, index) => (
                    <li key={index}>
                      {summary ? ingredient : `${ingredient.substring(0, 30)}`}
                    </li>
                  )
                )}
              </ol>
            </div>
            <div className="prepare">
              <h5>How to prepare:</h5>
              <ol>
                {(readMore ? howToPrepare : howToPrepare.slice(0, 2)).map(
                  (step, index) => (
                    <li key={index}>
                      {summary ? step : `${step.substring(0, 30)}...`}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Food;
