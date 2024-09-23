import styled from "styled-components"


const Wrapper = styled.div`
 background: var(--secondary-500);
 width: 100%;
 padding: 0rem 2rem 1rem; 

  .form-label {
  display: block;
  font-size: var(--small-text);
  margin-bottom: 0.2rem;
  text-transform: capitalize;
  line-height: 1.5;
  color: var(--secondary-900);
}

.form-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius);
  background: var(--secondary-600);
  border: 1.5px solid var(--secondary-900);
  color: var(--secondary-900);
  cursor: pointer;
}

   
  .form-center {
    display: grid;
    row-gap: 1rem;
    width: 0 85%;
    margin: 0 auto;
    }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

   @media (min-width: 800px) {
    
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
      width: 100%;
      margin: 0 auto;
    }
    .form-btn {
      grid-column: span 4;
      justify-self: center;
      width: 25%;
    }
   
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
       margin: 0 0 0 2rem;
    }
    .form-btn {
      grid-column: span 6;
      justify-self: center;
      width: 25%;
    }
  }



`

export default Wrapper