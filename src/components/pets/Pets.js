import React from 'react'
import { Card } from 'semantic-ui-react'

import PetCard from './PetCard'
import UserPetCard from './UserPetCard'

import './Pets.css'

const Pets = props => {
  const allpets = props.pets
  console.log('allpets', allpets)
  const petCards = allpets.length > 0
    ? allpets.map(pet => <PetCard img="img" scr={pet.image} pet={pet} key={pet.id}/>)
    : []
  console.log(petCards, props)
  return (<div>
    <Card.Group centered>

    {petCards}
  </Card.Group>
  </div>)
}

export default Pets
