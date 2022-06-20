import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from  'react-router-dom'


function Common() {
  const [Common, setCommon] = useState([]);
  useEffect(() => {
    getCommon();
  }, []);
  const key = '80e176ea7e6b4825986c2c6409c47d18';

  const getCommon = async () => {
    const check = localStorage.getItem('common')
    if(check){
      setCommon(JSON.parse(check))
    }else{

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=10&cuisine=asian`);
      const data = await api.json();
localStorage.setItem('common',JSON.stringify(data.recipes))
      setCommon(data.recipes);
      console.log(data);
    }
  };
    return (
      <div>
      

      <Wrapper>
      <h3>Asian Picks</h3>

    <Splide options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: '3rem'
    }}>
      {Common.map((recipe) => {
  return(
        <SplideSlide key={recipe.id}>
        <Card><Link to={'/recipe/'+recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title}/>
          <Gradient /></Link>
        </Card>
        </SplideSlide>
  );

})};
        </Splide>
        </Wrapper>


  </div>
  )
  }
  const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card =  styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;



img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
 object-fit: cover; 
}
p{
  position: absolute;

z-index: 12;
left: 50%;
bottom: 0%;
transform: translate(-50%, 0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex:
justify-content: center;
align-items: center;
}
`;
const Gradient =  styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
  
  export default Common;