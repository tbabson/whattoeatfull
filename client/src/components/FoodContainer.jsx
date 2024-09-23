import Food from "./Food";
import { useAllFoodsContext } from "../pages/Foods";

const FoodContainer = () => {
  const { data } = useAllFoodsContext();
  const { foods } = data;
  if (foods.length === 0) {
    return <h2>No food to display</h2>;
  }
  return (
    <div>
      {foods.map((food) => {
        <Food key={food._id} {...food} />;
      })}
    </div>
  );
};
export default FoodContainer;
