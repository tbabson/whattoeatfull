import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/StyledPages/ErrorPage";
import imgError from "../assets/Images/imgError.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={imgError} alt="error page" />
          <h3>ohh! 404 error</h3>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
