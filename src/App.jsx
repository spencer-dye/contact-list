import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Contacts from './pages/Contacts'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import Header from './components/Header'
import contactData from './data'
const contactsFromLocalStorage = JSON.parse( localStorage.getItem("contacts") )
let dataSrc  = contactsFromLocalStorage

if (contactsFromLocalStorage < 1) {
    dataSrc = contactData
    console.log('initialized data')
} else console.log('data already there')

const App = ()  => {
    
    const [contacts, setContacts] = React.useState(dataSrc)

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('contacts'))
        setContacts(localData)
    }, [])

    function handleAdd(contact) {
        setContacts(existing => [...existing, contact])
    }

    function handleEdit(contact, id) {
        setContacts(existing => existing.filter(c => c.id !== id))
        setContacts(existing => [...existing, contact])
    }

    function handleRemove(id) {
        setContacts(existing => existing.filter(c => c.id !== id))
    }
    
    function handleToggle(id) {
        setContacts(prevState => {
            return prevState.map((c) => {
                return  c.id === id ? {...c, isFavorite: !c.isFavorite} : c
            })
        })
    }

    const favFirst = contacts.sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite))
    useEffect(() => {
        setContacts(favFirst)
    }, [contacts])

    const currentPage = useLocation().pathname

    const contactList = <Contacts 
    data={contacts}
    onRemove={handleRemove}
    onToggle={handleToggle}
    />

    const editPage = <EditContact 
    data={contacts}
    onRemove={handleRemove}
    onEdit={handleEdit}
    />

    const addPage = <AddContact 
    onSave={handleAdd}
/>

    return (
        // <Router>
        <div>
            <Header 
                route={currentPage}
            />
            <div className="container">
                <Routes>
                        <Route path='/' element={contactList}/>
                        <Route path='/editcontact' element={editPage}/>
                        <Route path='/addcontact' element={addPage}/>
                </Routes>
            </div>
        </div>
        )
}

export default App