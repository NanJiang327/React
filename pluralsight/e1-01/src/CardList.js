import React from 'react'
import Card from './Card'

export default function CardList(props) {
  return (
    <div>
      {
        props.profiles.map((item) => {
          return (
            <Card profile={item} key={item.id} />
          )
        })
      }
    </div>
  )
}
