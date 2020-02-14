import React from 'react'

import { Card, Image, Button } from 'semantic-ui-react'






class PetCard extends React.Component {

  state = {
    adopt: true



  }

  adoptMe = () => {
    if(this.props.pet.owner_id > 0){
      this.setState({
      adopt: false
      })
      if(this.state.adopt === true){
        return `i'm adopted!`
      } else {
        return `i'm adoptable`
      }
    }



  }










render() {
  console.log('pet', this.props, 'owner',this.props.pet.owner_id, 'adopt',this.props.pet.adopt)
  const { pet } = this.props

  return(
    <Card className='pet-card' data-action='this-pet' data-id={pet.id} >
      <Image src={pet.image}  alt='' className='pet-image' />

        <Card.Content >
          <Card.Description>
          <h3>hi! i'm {pet.name}</h3>
            <h5>i'm {pet.age} years old.<br/>
            i'm {this.adoptMe}
            </h5>

            </Card.Description>
          </Card.Content >


    </Card >

)
}
}

export default PetCard
