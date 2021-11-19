import React from 'react'

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 100
}

function Overlay() {
  return (
    <div style={OVERLAY_STYLES}>
      
    </div>
  )
}

export default Overlay
