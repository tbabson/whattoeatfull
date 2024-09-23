import { FormRow, Logo } from "../components";
import { Link, NavLink, Form } from "react-router-dom";
import Wrapper from "../assets/StyledPages/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="footerContainer">
          <div className="logoContainer">
            <Link to="/" className="logo">
              <Logo />
              <h3>whattoeat.com</h3>
            </Link>
            <p>151, Acme road, Ogba, Lagos.</p>
            <p>+234 703 5689 102</p>
            <p>Email: info@whattoeat.com</p>
          </div>

          <div className="footerMenu">
            <h3>menu</h3>
            <NavLink to="/" className="footerLink">
              Home
            </NavLink>
            <NavLink to="/blog" className="footerLink">
              Blog
            </NavLink>
            <NavLink to="/profile" className="footerLink">
              Profile
            </NavLink>
            <NavLink to="/cart" className="footerLink">
              <span>Cart</span>
            </NavLink>
          </div>

          <div className="footerNote">
            <h3>
              Get the best meal <br /> recommendation.
            </h3>
            <p>
              We send out food recommendation from our chef and nutritionist.
            </p>
            <div className="subscribe">
              <Form className="footerForm">
                <input
                  type="email"
                  placeholder="your email"
                  className="footerInput"
                />
                <button type="submit" className=" btn-footer">
                  Subscribe
                </button>
              </Form>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
