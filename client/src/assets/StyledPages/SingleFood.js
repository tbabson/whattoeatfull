import styled from 'styled-components'

const Wrapper = styled.div`
.singleFood{
    width: 100%;
    margin: auto;
    
    //box-sizing: border-box;
}

.foodInfoContainer{
width: 80%;
margin: auto;
transition: 0.3s;
animation: fadeIn 1s;
}

.foodImage{
    width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 2rem;
}

.foodImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.foodDetail h1{
    color: var(--primary-900);
    font-weight: 900;
    font-size: 2rem;
    margin: 1rem 0 0.7rem 0;
    letter-spacing: 3px;
}

.mealAndCountry{
    display: flex;
    color: var(--secondary-700);
    font-weight: 600;
    gap: 8px;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 0 0 0.7rem 0;
}

.spanRating{
    display: flex;
    gap: 7px;
}

.averageRating{
    color: var(--secondary-700);
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
}

span p{
    color: var(--black);
    font-weight:300;
    letter-spacing: 0;
}

hr.hr1{
    border-top: 0.5px solid;
    color: var(--grey-800);
margin-top: 1rem;
}

.ingredients h3{
font-size: 1.5rem;
font-weight: 600;
margin: 1rem 0 0.3rem 0;
color: var(--secondary-900);
text-transform: capitalize;
}

.ingredients ol{
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    color: var(--primary-900);
line-height: 40px;
text-transform: capitalize;
}


.howTo h3{
font-size: 1.5rem;
font-weight: 600;
margin: 1rem 0 0.3rem 0;
color: var(--secondary-900);
text-transform: capitalize;
}

.howTo ol{
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    color: var(--primary-900);
line-height: 40px;
text-transform: capitalize;
}




`



export default Wrapper