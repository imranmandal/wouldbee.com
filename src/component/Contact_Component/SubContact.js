import React , { useState } from 'react'
 
function SubContact(props) {
    const icon = "title-icon fa fa-" + props.icon;
    const email = "mailto:" + props.email;

    return (
        <div className="sub-contact">
            <i className={icon}></i>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            <p>
                <i className="fa fa-envelope" />
                <a href={email}>{props.email}</a>
            </p>
        </div>
  )
}
 
export default SubContact;
 