import React from "react"
import "./vct-widget.css"
import vctLogo from "/vct-logo.svg"

export default function VctWidget() {
  return (
    <a className="vct-widget" href="https://vctwidget.zmito.eu" target="_blank" draggable="false">
      <div className="vct-widget-link">
        <img src={vctLogo} alt="" />
      </div>
    </a>
  )
}