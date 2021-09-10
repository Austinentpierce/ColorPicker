import React from 'react'

export function App() {
  return (
    <main>
      <h1>Color Picker</h1>

      <figure>
        <i className="Icon fab fa-10x fa-accusoft"></i>
      </figure>
      <section>
        <p>Hue</p>
        <input className="hue" type="range" min="0" max="360"></input>
        <p>Saturation</p>
        <input className="saturation" type="range" min="0" max="360"></input>
        <p>Lightness</p>
        <input className="lightness" type="range" min="0" max="360"></input>
      </section>
    </main>
  )
}
