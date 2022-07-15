import React from 'react'
import logo from '../images/logo.svg'
import userIcon from '../images/userIcon.svg'

export default function Header() {
    return (
        <header>
            <div className="top-bar">
                <div className="blue-sqr">
                    <img src={logo} className='logo'/>
                </div>
                <img src={userIcon}/>
            </div>
            <div className="btm-bar">
                <div className="bar__container">
                    <h1>Contacts</h1>
                    <div className="tool-wrap">
                        <input 
                            type="search"
                            name="search"
                            placeholder='Search contacts'
                            aria-placeholder='Search contacts'
                        />
                        <button>Create new contact</button>
                    </div>
                </div>
            </div>
        </header>
    )
}