"use client"
import React, { useState } from 'react'

export default function Button() {
  const [render, setRender] = useState(false)
  return (
    <button onClick={() => setRender(!render)}>Refresh</button>
  )
}
