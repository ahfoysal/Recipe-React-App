import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'


function Recipe() {

  let params = useParams();
  const [details , setDetails] = useState({});

const key = '83eb4662ee9b495b8b922c39052652ee';
const fetchDetails = async () =>{
const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
const detailData = await data.json();
setDetails(detailData);
}
useEffect(() => {
 fetchDetails();
},[params.name]
)

  return (
    <div>{details.title}</div>
  )
}

export default Recipe