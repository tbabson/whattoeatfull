import styled from "styled-components";

const Wrapper = styled.div`
.foodCard{
    width: 90%;
    margin: auto;
    border-radius: 1rem;
    box-shadow: var(--shadow-1);
    transition: 0.3s;
    animation: fadeIn 1s;
    max-height: 700px;
    background: var(--white)
}

.foodCardImage{
    width: 100%;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
}

.foodCardImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.foodInfo{
    padding: 1.5rem;
}

.mc{
    display: flex;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: var(--secondary-700)
}

.mc .meal{
    margin-right: 10px;
    
}

.foodName{
color: var(--primary-900);
font-weight: 800;
font-size: 1.5rem;
margin-bottom: 0.5rem;
text-transform: capitalize;
}

.ingredients h5{
font-weight: 600;
margin-bottom: 0.3rem;
color: var(--secondary-800);
text-transform: capitalize;
}

.ingredients ol{
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    color: var(--primary-900);
line-height: 20px;
text-transform: lowercase;
}

.prepare h5{
font-weight: 600;
margin-bottom: 0.3rem;
color: var(--secondary-800);
text-transform: capitalize;
}

.prepare ol{
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    color: var(--primary-900);
line-height: 20px;
text-transform: lowercase;
}




`


export default Wrapper