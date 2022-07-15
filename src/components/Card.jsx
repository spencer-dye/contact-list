import React from 'react'
import phoneIcon from '../images/phoneIcon.svg'
import emailIcon from '../images/mailIcon.svg'
import shaq from '../images/shaq.jpg'

export default function Card(props) {
    return (
        <div className="card">
          <div className="blue-top"></div>
          <img src={shaq} className='contact-image'/>
          <h2><span>{props.firstName}</span> <span>{props.lastName}</span></h2>
          <div className="info__wrap">
            <img src={phoneIcon}/>
            <p>{props.phone}</p>
          </div>
          <div className="info__wrap">
            <img src={emailIcon}/>
            <p>{props.email}</p>
          </div>
          <div className="dbl-btn-wrap">
            <button className='gray-btn'>Edit</button>
            <button className='red-btn'>Discard</button>
          </div>
        </div>
    )
}