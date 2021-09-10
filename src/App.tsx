import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(100)
  const [saturation, setSaturation] = useState(75)
  const [lightness, setLightness] = useState(25)

  function handleChangeHue(event: React.ChangeEvent<HTMLInputElement>) {
    setHue(Number(event?.target.value))
  }
  function handleChangeSaturation(event: React.ChangeEvent<HTMLInputElement>) {
    setSaturation(Number(event.target.value))
  }
  function handleChangeLightness(event: React.ChangeEvent<HTMLInputElement>) {
    setLightness(Number(event.target.value))
  }

  const newColor = `hsl(${hue},${saturation}%,${lightness}%)`
  const newStyle = { color: newColor }

  return (
    <main>
      <header>Color Picker</header>

      <figure style={newStyle}>
        <i className="fab fa-10x fa-accusoft"></i>
      </figure>

      <section className="directions"></section>
      <section>
        <p>Hue</p>
        <span>{hue}</span>
        <input
          className="hue"
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={handleChangeHue}
        ></input>

        <p>Saturation</p>
        <span>{saturation}</span>
        <input
          className="saturation"
          type="range"
          min="0%"
          max="100%"
          value={saturation}
          onChange={handleChangeSaturation}
        ></input>

        <p>Lightness</p>
        <span>{lightness}</span>
        <input
          className="lightness"
          type="range"
          min="0%"
          max="100%"
          value={lightness}
          onChange={handleChangeLightness}
        ></input>
      </section>
      <footer></footer>
    </main>
  )
}
