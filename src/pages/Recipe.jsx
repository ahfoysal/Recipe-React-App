import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'


function Recipe() {

  let params = useParams();
  const [details , setDetails] = useState({});

const key = '3eb43ca545e74bd596be01971ec1bf5b';
const fetchDetails = async () =>{
const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
const detailData = await data.json();
setDetails(detailData);
}
useEffect(() => {
 fetchDetails();
},[params.name]
);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button>Instruction</Button>
        <Button>Ingredients</Button>

      </Info>
    </DetailsWrapper>
  )
}
const DetailsWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active{
background: linear-gradient(35deg, #494949, #313131);
color: white;
}
h2{
margin-bottom: 2rem;

}
li{
font-size: 1rem;
line-height: 2rem;

}
ul{
margin-top: 2rem;
}
`;
const Button = styled.div`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`
const Info = styled.div`
margin-left: 10rem;

`

export default Recipe