import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from  'react-router-dom'


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    const key = '83eb4662ee9b495b8b922c39052652ee';

    const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results)
  };
  useEffect(() => {
getSearched(params.search);
  
},[params.search]);
  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}><Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4></Link>
                </Card>
            )
        }
        )}
    </Grid>
  )
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`
const Card = styled.div`


img{
  border-radius: 2rem;
  width: 100%;
}
h4{
  padding: 1rem;
  text-align: center;
}
`

export default Searched