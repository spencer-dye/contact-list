import React from "react"


export default function AddContact(props) {
    const genId = Math.floor(Math.random() * Date.now())

    const [create, setCreate] = React.useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        phone: "", 
        isFavorite: false,
        id: genId
    })

    function handleSubmit(e) {
        const confirm = window.confirm(`Are you sure you want to add ${create.firstName} ${create.lastName} to your contacts?`)
        if (confirm) {
            clearForm()
            e.preventDefault()
            props.onSave(create)
            window.location.pathname = '/'
        }
    }

    function clearForm() {
        setCreate('')
    }

    function handleContactAdd(e) {
        const { value, name, type, checked } = e.target
        setCreate( prevState => {
           return {
            ...prevState,
            [name]: type === 'checkbox' ? checked: value
           } 

        })
    }
    return (
        <div>
            <form onReset={clearForm} onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type='text'
                        name='firstName'
                        id='firstName'
                        onChange={handleContactAdd}
                        value={create.firstName || ''}
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
                        onChange={handleContactAdd}
                        value={create.lastName || ''}
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
                        onChange={handleContactAdd}
                        value={create.phone || ''}
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
                        onChange={handleContactAdd}
                        value={create.email || ''}
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
                        onChange={handleContactAdd}
                        checked={create.isFavorite || ''}
                        className='checkbox'
                    />
                </div>
                <div className="btn-wrap">
                    <button type='submit'className="primary-btn">Save</button>
                    <button type='reset' className="secondary-btn">Reset</button>
                </div>
            </form>
        </div>
    )
}