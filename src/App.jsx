import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import contactData from './data'

export default function App() {
    const [contacts, setContacts] = React.useState(contactData)

    const contactElements = contacts.map(contact => (
        <Card 
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            email={contact.email}
            img={contact.img}
        />
    ))

    return (
        <div>
            <Header />
            <div className="card__list">
                {contactElements}
            </div>
        </div>
        )
}