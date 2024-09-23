import styled from "styled-components";

const Wrapper = styled.footer`
background: var(--primary-600);
 /* width: 100%;  */
.footerContainer{
       /* width: 70vw;
  max-width: var(--fixed-width);
  margin: 4rem auto 0;
  text-align: left;
  padding-bottom: 2rem; */

    /* display: flex;
    flex-direction: column;
    //align-content: flex-start;
    justify-content: center;
    text-align: left;
    padding-left: 1.5rem; */
    
    display: grid;
    row-gap: 1rem;
    width: 0 85%;
    margin: 0 2rem;
    

}

.logoContainer{
    margin-bottom: 2rem;
}

.logo{
width: 15rem;
height: auto;
margin: 3rem 0 -0.4rem -0.3rem; 
}

.logo h3{
text-transform:uppercase; 
color: var(--secondary-900);
margin-bottom: 0.6rem;
font-weight: 700;
font-size: 1.5rem;
letter-spacing: 1px;

}

.logoContainer p{
    //text-align: left;
    //margin-left: 6.5rem;
    margin-top: 0.4rem;
    color: var(--secondary-900)
    
}

.footerMenu{
    display: flex;
    flex-direction: column;
    //text-align: left;
    //margin-left: 6.5rem;
    margin-bottom: 2rem;
}
.footerMenu h3{
 text-transform: uppercase;
 color: var(--primary-900);
 font-weight: 800;
 letter-spacing: 2px;
}

.footerLink{
     color: var(--secondary-900);
     font-size: 1rem;
     margin-top: 0.8rem;
     font-weight: 600;
}

.footerLink:hover {
    color: var(--primary-900);
  }

.footerLink span {
    font-weight: 600;
    color: var(--secondary-900);
    background-color: var(--white);
    padding: 0.2rem 1rem;
    transition: var(--transition);
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
    
  }

  .footerLink span:hover {
    color: var(--white);
    background: var(--primary-900);
  }

.footerNote{
    display: flex;
    flex-direction: column;
    //text-align: left;
    //margin-left: 6.5rem;
    margin-bottom: 2rem;
}
.footerNote h3{
    margin-bottom: 0.4rem;
    text-transform: uppercase;
    color: var(--primary-900)
}

.footerNote p{
max-width: 50%;
   margin-bottom: 4rem;
   color: var(--secondary-900);
   line-height: 1.2rem;
}
.footerForm{
    display: flex;
    flex-direction: row;
    margin: -1.8rem 0 2rem 0;
}

.footerInput{
   padding: 0.375rem 0.75rem;
   background: var(--primary-900);
  border: transparent;
  color: var(--primary-500)
}

.footerInput::placeholder {
  color: var(--primary-500);
  font-size: 15px;
  text-transform: capitalize;
}

.btn-footer{
   cursor: pointer;
  color: var(--white);
  background: var(--secondary-900);
  border: transparent;
  padding: 0.375rem 0.75rem;
  text-transform: capitalize;
  display: inline-block;
  font-size: 15px;
}
.btn-footer:hover{
 background: var(--primary-900);
 }

 @media (min-width: 576px){
.footerContainer{
    /* display: flex;
    flex-direction: column;
    //align-content: flex-start;
    justify-content: center;
    text-align: left;
    padding-left: 5rem;
    background-color: var(--primary-600); */

    grid-template-columns: 1fr ;
      justify-items: flex-start;
      align-items: center;
      column-gap: 1rem;
      width: 100%;
      margin-left: 2.3rem;
}

/* .logo{
width: 15rem;
height: auto;
margin: 3rem 0 -0.4rem -0.3rem; 
} */
}

 @media (min-width: 800px){

footer{
    width: 100%;
    max-width: 100%;
}

.footerContainer{
  grid-template-columns: 1fr 1fr 1fr;
      justify-items: flex-start;
      align-items: center;
      column-gap: 1rem;
      width: 100%;
      margin: 0 auto;

    text-align: left;
    padding: 2rem 4rem ;
    background-color: var(--primary-600);
  
}

/* .logo{
width: 15rem;
height: auto;
margin: 3rem 0 -0.4rem -0.3rem; 
} */
}




`
export default Wrapper