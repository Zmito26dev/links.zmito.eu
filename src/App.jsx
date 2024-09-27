import { useState } from 'react'
import { twitchIcon, ytIcon, igIcon, xIcon, tiktokIcon } from './assets/svgs'

function App() {
  const WidthLink = ({name, url, icon}) => {
    return (
      <a className="width-link" href={url} draggable="false">
        <p>{name}</p>
      </a>
    )
  }

  return (
    <>
      <div className="main">
        <div className="app">
          <div className="header">
            <img className="logo" src="logo.png" alt="" draggable="false"/>
            <h1 className="username">@Zmito26</h1>
          </div>
          <div className="big-links">
            <WidthLink name="Twitch" url="https://twitch.tv/zmito26"/>
            <WidthLink name="Youtube" url="https://www.youtube.com/@zmito26_"/>
            <WidthLink name="Instagram" url="https://www.instagram.com/zmito26"/>
            <WidthLink name="Twitter [X]" url="https://x.com/zmito26"/>
            <WidthLink name="Tiktok" url="https://tiktok.com/@zmito26"/>
          </div>
          <div className="footer">
            <div className="footer-links">
              <a className="icon-link" href="">{twitchIcon}</a>
              <a className="icon-link" href="">{ytIcon}</a>
              <a className="icon-link" href="">{igIcon}</a>
              <a className="icon-link" href="">{xIcon}</a>
              <a className="icon-link" href="">{tiktokIcon}</a>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App