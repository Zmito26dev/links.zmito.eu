import { useState, useEffect } from 'react'
import { twitchIcon, ytIcon, igIcon, xIcon, tiktokIcon } from './assets/svgs'
import VctWidget from './components/vct-widget'
// const apiKey = import.meta.env.VITE_CLIENT_ID;

function App() {
  const [twitchLive, setTwitchLive] = useState(false)

  const WidthLink = ({name, url, icon}) => {
    return (
      <a className="width-link" href={url} target="_black" draggable="false">
        <p>{name}</p>
      </a>
    )
  }

  const IconLink = ({url, icon}) => {
    return (
      <a className="icon-link" href={url} target="_black" draggable="false">
        {icon}
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
            <VctWidget />
            <WidthLink name="Twitch" url="https://twitch.tv/zmito26"/>
            <WidthLink name="Youtube" url="https://www.youtube.com/@zmito26_"/>
            <WidthLink name="Instagram" url="https://www.instagram.com/zmito26"/>
            <WidthLink name="Twitter [X]" url="https://x.com/zmito26"/>
            <WidthLink name="Tiktok" url="https://tiktok.com/@zmito26"/>
          </div>
          <div className="footer">
            <div className="footer-links">
              <IconLink icon={twitchIcon} url="https://twitch.tv/zmito26"/>
              <IconLink icon={ytIcon} url="https://www.youtube.com/@zmito26_"/>
              <IconLink icon={igIcon} url="https://www.instagram.com/zmito26"/>
              <IconLink icon={xIcon} url="https://x.com/zmito26"/>
              <IconLink icon={tiktokIcon} url="https://tiktok.com/@zmito26"/>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App