import React from 'react'

export function App() {
  return (
    <main>
      <h1>Color Picker</h1>

      <figure>
        <i className="Icon fab fa-10x fa-accusoft"></i>
      </figure>
      <section>
        <h2>Hue</h2>
        <input className="hue" type="range" min="0" max="360"></input>
        <h3>Saturation</h3>
        <input className="saturation" type="range" min="0" max="360"></input>
      </section>
    </main>
  )
}
