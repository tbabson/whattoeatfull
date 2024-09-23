import { FormRow, FormRowSelect } from ".";
import { Form, useSubmit, Link } from "react-router-dom";
import { MEAL, COUNTRY, SORT_BY } from "../utils/constants.js";
import Wrapper from "../assets/StyledPages/FoodForm.js";

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <div className="form-center">
          <FormRowSelect
            labelText="meal"
            name="meal"
            list={["all", ...Object.values(MEAL)]}
            defaultValue="all"
          />
          <FormRowSelect
            labelText="country"
            name="country"
            list={["all", ...Object.values(COUNTRY)]}
            defaultValue="all"
          />
          <FormRowSelect
            name={"sort"}
            defaultValue="Newest"
            list={[...Object.values(SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/" className="btn form-btn delete-btn">
            Reset Search
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
