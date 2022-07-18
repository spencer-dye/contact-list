import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import userIcon from '../images/userIcon.svg'

export default function Header(props) {
    const btnDisplay = props.route === '/' ? 'Create a new contact' : 'View all contacts'
    const btnRoute = props.route === '/' ? '/addcontact' : '/'
    let pageTitle
    if (props.route === '/') {
         pageTitle = 'All Contacts'
    } else if (props.route === '/editcontact') {
        pageTitle = 'Edit Contact'
    } else {
        pageTitle = 'Add a New Contact'
    }
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
                    <h1>{pageTitle}</h1>
                    <div className="tool-wrap">
                        {/* { props.route === '/' && <input 
                            type="search"
                            name="search"
                            placeholder='Search contacts'
                            aria-placeholder='Search contacts'
                        /> } */}
                        <Link to={btnRoute} className='primary-btn'>{btnDisplay}</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}