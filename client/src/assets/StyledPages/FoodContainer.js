import styled from "styled-components";

const Wrapper = styled.div`
.foodContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
    margin: 2rem 2rem;
    gap:2rem;
    row-gap: 2rem; 
    
}

@media (min-width: 768px){
display: grid;
    grid-template-columns: repeat(auto-fill,minmax(240px,auto,auto));
    margin: 2rem 2rem;
    gap:2rem;
    row-gap: 4rem;
    justify-items: center;
}
@media (min-width: 927px){
display: grid;
    grid-template-columns: repeat(auto-fill,minmax(240px,auto,auto,auto));
    margin: 2rem 2rem;
    gap:2rem;
    row-gap: 4rem;
    justify-items: center;
}


@media (min-width: 1024px){
display: grid;
    grid-template-columns: repeat(auto-fill,minmax(240px,auto,auto, auto, auto));
    margin: 2rem 2rem;
    gap:3rem;
    row-gap: 4rem; 
    justify-items: center;

}


`

export default Wrapper