import React from "react"
import { useLocation } from 'react-router'

export default function EditContact(props) {
        const location = useLocation()
        const data = location.state

    const [edit, setEdit] = React.useState({
        firstName: data.firstName, 
        lastName: data.lastName, 
        email: data.email, 
        phone: data.phone, 
        isFavorite: data.isFavorite,
        id: data.id,
        img: data.img
    })

    function handleUpdate(e) {
        const confirm = window.confirm(`Are you sure you want to update the entry to "${edit.firstName} ${edit.lastName}"?`)
        if (confirm) {
            e.preventDefault()
            props.onEdit(edit, edit.id)
            window.location.pathname = '/'
        }
        e.preventDefault()
    }

    function handleContactEdit(e) {
        const { value, name, type, checked } = e.target
        setEdit( prevState => {
           return {
            ...prevState,
            [name]: type === 'checkbox' ? checked: value
           } 

        })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="input-wrap">
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type='text'
                        name='firstName'
                        id='firstName'
                        onChange={handleContactEdit}
                        value={edit.firstName || ''}
                        className='input'
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type='text'
                        name='lastName'
                        id='lastName'
                        onChange={handleContactEdit}
                        value={edit.lastName || ''}
                        className='input'
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                        type='phone'
                        name='phone'
                        id='phone'
                        onChange={handleContactEdit}
                        value={edit.phone || ''}
                        className='input'
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type='email'
                        name='email'
                        id='email'
                        onChange={handleContactEdit}
                        value={edit.email || ''}
                        className='input'
                        required
                    />
                </div>
                <div className="check-wrap">
                    <label htmlFor="isFavorite">Favorite contact?</label>
                    <input 
                        type='checkbox'
                        name='isFavorite'
                        id='isFavorite'
                        onChange={handleContactEdit}
                        checked={edit.isFavorite || ''}
                        className='checkbox'
                    />
                </div>
                <div className="btn-wrap">
                    <button type='submit'className="primary-btn">Update</button>
                    <button type='reset' className="secondary-btn">Delete</button>
                </div>
            </form>
        </div>
    )
}