import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'


function Recipe() {

  let params = useParams();
  const [details , setDetails] = useState({});
  const [activeTab , setActiveTab] = useState("instructions");


const key = '83eb4662ee9b495b8b922c39052652ee';
const fetchDetails = async () =>{
const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
const detailData = await data.json();
setDetails(detailData);
console.log(detailData)
};

useEffect(() => {
 fetchDetails();
},[params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
          Instruction
          </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
          Ingredients</Button>
          {activeTab === 'instructions' && (
            <div>    
      <h3 dangerouslySetInnerHTML={{ __html: details.summary }} ></h3>
      <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} ></h3>

        </div>
          )}
                  {activeTab === 'ingredients' && (
                    
      <ul>
    
      {details.extendedIngredients.map((ingredient) => (
          <li>{ingredient.original}</li>
        ))}
      </ul>
                  )}

    
 

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
font-size: 1.2rem;
line-height: 2.5rem;

}
ul{
margin-top: 2rem;
}
`;

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info = styled.div`
margin-top: 4rem;

margin-left: 5rem;

`;

export default Recipe