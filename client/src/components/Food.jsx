import { Link } from "react-router-dom";

const Food = () => {
  return <div>Food</div>;
};

// const Food = ({
//   _id,
//   image,
//   name,
//   meal,
//   country,
//   ingredients,
//   howToPrepare,
//   price,
// }) => {
//   return (
//     <div>
//       <Link key={_id} to={`/foods/${_id}`}>
//         <figure>
//           <img src={image} alt={name} />
//         </figure>
//         <div>
//           <p>{meal}</p>
//           <h3>{name}</h3>
//           <h5>{ingredients}</h5>
//           <h5>{howToPrepare}</h5>
//           <h5>{price}</h5>
//         </div>
//       </Link>
//     </div>
//   );
// };

export default Food;
