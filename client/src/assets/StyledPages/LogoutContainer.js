import styled from "styled-components";


const Wrapper = styled.div`
position: relative;
.btn {
  cursor: pointer;
  color: var(--white);
  background: var(--primary-900);
  border: transparent;
  border-radius: var(--border-radius);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
}
.btn:hover {
  background: var(--secondary-900);
  //box-shadow: var(--shadow-1);
}
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .dropdown {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    //box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-900);
  }
  .dropdown:hover {
  background: var(--secondary-900);
  //box-shadow: var(--shadow-1);
}
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  
`

export default Wrapper