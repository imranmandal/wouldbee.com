import React from 'react'
 
function TelegramCard(props) {
    const icon = "fa fa-" + props.icon;
    return (
        <div className="telegram-card">
            <a href={props.link}>
                <div className="card-inner">
                    <i className={icon} />
                    <h2>{props.text}</h2>
                </div>
            </a>
        </div>
  )
}
 
export default TelegramCard;
 