import React from 'react'
import { Link } from 'react-router-dom'
import phoneIcon from '../images/phoneIcon.svg'
import emailIcon from '../images/mailIcon.svg'
import placeholderUser from '../images/placeholderUser.svg'
import filledStar from '../images/favoriteIcon.svg'
import emptyStar from '../images/favoriteIconEmpty.svg'

export default function Card(props) {

    const imgSwitch = props.img ? `../images/${props.img}` : placeholderUser

    function handleDelete() {
        const confirm = window.confirm(`Are you sure you want to delete "${props.firstName} ${props.lastName}" from your contacts?`)
        if (confirm) {
            props.onRemove(props.id)
        }
    }

    function toggleFavorite() {
        props.toggle(props.id)
    }

    const favorite = props.isFavorite ? filledStar : emptyStar

    const passedContact = {
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        email: props.email,
        img: props.img,
        isFavorite: props.isFavorite
    }
    return (
        <div className="card">
          <div className="blue-top">
            <img src={favorite} onClick={toggleFavorite}/>
          </div>
          <img src={imgSwitch} className='contact-image'/>
          <h2><span>{props.firstName}</span> <span>{props.lastName}</span></h2>
          <div className="info__wrap">
            <img src={phoneIcon}/>
            <p>{props.phone}</p>
          </div>
          <div className="info__wrap">
            <img src={emailIcon}/>
            <p>{props.email}</p>
          </div>
          <div className="card-btn-wrap">
            <Link to='/editcontact' state={{...passedContact}}><button className='gray-btn'>Edit</button></Link>
            <button className='red-btn' onClick={handleDelete}>Delete</button>
          </div>
        </div>
    )
}