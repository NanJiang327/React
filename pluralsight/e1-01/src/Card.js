import React from 'react'

export default function Card(props) {
    return (
      <div className="github-profile">
        <img src={props.profile.avatar_url} alt=""/>
        <div className="info" >
          <div className="name" >{props.profile.name}</div>
          <div className="company">{props.profile.company}</div>
        </div>
      </div>
    )
}

