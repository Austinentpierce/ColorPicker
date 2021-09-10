import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(100)
  const [saturation, setSaturation] = useState(75)
  const [lightness, setlightness] = useState(25)

  function handleChangeHue(event: React.ChangeEvent<HTMLInputElement>) {
    setHue(Number(event?.target.value))
  }
  function handleChangeSaturation(event: React.ChangeEvent<HTMLInputElement>) {
    setSaturation(Number(event.target.value))
  }
  function handleChangeLightness(event: React.ChangeEvent<HTMLInputElement>) {
    setlightness(Number(event.target.value))
  }
  const newColor = `hsl(${hue},${saturation},${lightness})`
  const newStyle = { Color: newColor }
  return (
    <main>
      <h1>Color Picker</h1>

      <figure style={newStyle}>
        <i className="Icon fab fa-10x fa-accusoft"></i>
      </figure>
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
          min="0"
          max="360"
          value={saturation}
          onChange={handleChangeSaturation}
        ></input>

        <p>Lightness</p>
        <span>{lightness}</span>
        <input
          className="lightness"
          type="range"
          min="0"
          max="360"
          value={lightness}
          onChange={handleChangeLightness}
        ></input>
      </section>
    </main>
  )
}
