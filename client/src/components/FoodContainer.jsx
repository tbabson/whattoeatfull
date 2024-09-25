import Food from "./Food";
import { useAllFoodsContext } from "../pages/Foods";
import Wrapper from "../assets/StyledPages/FoodContainer";

const FoodContainer = () => {
  const { data } = useAllFoodsContext();
  const { foods } = data;

  if (foods.length === 0) {
    return <h2>No food to display</h2>;
  }
  return (
    <Wrapper>
      <div className="foodContainer">
        {foods.map((food) => {
          return <Food key={food._id} {...food} />;
        })}
      </div>
    </Wrapper>
  );
};
export default FoodContainer;
