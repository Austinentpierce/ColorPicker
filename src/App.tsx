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

  function handleRandomButtonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
  }

  const newColor = `hsl(${hue},${saturation}%,${lightness}%)`
  const newStyle = { color: newColor }

  return (
    <main>
      <header style={newStyle}>
        <div className="the">The</div>
        <div className="changing">Changing</div>
        <div className="color">Color</div>
        <div className="picker">Picker</div>
      </header>

      <figure style={newStyle}>
        <i className="fas fa-10x fa-barcode"></i>
        <i className="fas fa-10x fa-barcode"></i>
        <i className="fas fa-10x fa-barcode"></i>
      </figure>

      <div className="directions" style={newStyle}>
        These sliders allow you to choose different characteristics of colors
        slide them around and see how you what you come up with!
      </div>
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

      <button onClick={handleRandomButtonClick}>Randomizer</button>

      <footer style={newStyle}>
        Colors, like features follow the changes of the emotions
      </footer>
    </main>
  )
}
