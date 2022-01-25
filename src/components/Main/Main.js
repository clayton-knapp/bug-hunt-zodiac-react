import React from 'react'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'
import backgroundImg from '../../background.png'
import './Main.css'

export default function Main(props) {
  // console.log(props)
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.items.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  )
}
