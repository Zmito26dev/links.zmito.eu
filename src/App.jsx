import { useState, useEffect } from 'react'
import svg from './assets/svgs'
import VctWidget from './components/vct-widget/vct-widget'
import ONELauncherWidget from './components/ol-widget/ol-widget'
import ModpkgWidget from './components/modpkg-widget/modpkg-widget'
// const apiKey = import.meta.env.VITE_CLIENT_ID;

function App() {
  const [twitchLive, setTwitchLive] = useState(false)

  const WidthLink = ({name, url, icon}) => {
    return (
      <a className="width-link" href={url} target="_blank" draggable="false">
        <p>{name}</p>
      </a>
    )
  }

  const WidthCopyLink = ({name, url, textToCopy}) => {
    const handleCopyClick = (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(textToCopy)
    };

    return (
      <a className="width-link" href={url} target="_blank" draggable="false" rel="noopener noreferrer">
        <p>{name}</p>
        <button className='width-link-action' title="Copy" onClick={handleCopyClick}>
          {svg.copy}
        </button>
      </a>
    )
  }

  const IconLink = ({url, icon}) => {
    return (
      <a className="icon-link" href={url} target="_blank" draggable="false">
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
            <h2>PERSONAL PROJECTS</h2>
            <ModpkgWidget />
            <ONELauncherWidget />
            <VctWidget />
            <h2>SOCIAL MEDIA LINKS</h2>
            <WidthLink name="Twitch" url="https://twitch.tv/zmito26"/>
            <WidthLink name="Youtube" url="https://www.youtube.com/@zmito26_"/>
            <WidthLink name="Instagram" url="https://www.instagram.com/zmito26"/>
            <WidthLink name="X" url="https://x.com/zmito26"/>
            {/* <WidthLink name="Tiktok" url="https://tiktok.com/@zmito26"/> */}
            <h2>CONTACT ME</h2>
            <WidthCopyLink name="Personal email" url="mailto:zmito@zmito.eu" textToCopy="zmito@zmito.eu"/>
            <WidthCopyLink name="Dev email" url="mailto:zmito26dev@gmail.com" textToCopy="zmito26dev@gmail.com"/>
          </div>
          <div className="footer">
            <div className="footer-links">
              <IconLink icon={svg.twitch} url="https://twitch.tv/zmito26"/>
              <IconLink icon={svg.yt} url="https://www.youtube.com/@zmito26_"/>
              <IconLink icon={svg.ig} url="https://www.instagram.com/zmito26"/>
              <IconLink icon={svg.x} url="https://x.com/zmito26"/>
              {/* <IconLink icon={tiktokIcon} url="https://tiktok.com/@zmito26"/> */}
            </div>
            <a className="info" href="https://links.zmito.eu" target="_blank">
              <p className="info-text">Created by </p>
              {svg.zlogo}
            </a>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App