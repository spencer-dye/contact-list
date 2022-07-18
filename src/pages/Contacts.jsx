import React from "react"
import Card from '../components/Card'


const Contacts = (props) => {

    let cardsData = Object.values(props.data)
    // console.log(cardsData)

    const contactElements = cardsData.map(contact => (
        <Card 
            key={contact.id}
            id={contact.id}
            onRemove={props.onRemove}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            email={contact.email}
            img={contact.img}
            isFavorite={contact.isFavorite}
            toggle={props.onToggle}
        />
    ))

    const emptyList = cardsData.length > 0 ? false : true
    
    return (
        <div className="contact__list">
            {emptyList && <h2>You've got no contacts 😔. Click "Create a new contact" to get started!</h2>}
            {contactElements}
        </div>
    )
}

export default Contacts