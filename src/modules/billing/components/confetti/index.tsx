"use client"

import React, { useEffect, useRef } from "react"

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const confetti: {
      x: number
      y: number
      r: number
      d: number
      color: string
      tilt: number
      tiltAngleIncrement: number
      tiltAngle: number
    }[] = []
    const confettiCount = 300
    const gravity = 0.5
    const terminalVelocity = 5
    const drag = 0.075
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function randomRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function initConfetti() {
      if (!canvas) return
      for (let i = 0; i < confettiCount; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          r: randomRange(5, 15),
          d: Math.random() * confettiCount,
          color: colors[Math.floor(Math.random() * colors.length)],
          tilt: Math.floor(Math.random() * 10) - 10,
          tiltAngleIncrement: Math.random() * 0.07 + 0.05,
          tiltAngle: 0,
        })
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      confetti.forEach((confetto, index) => {
        ctx.beginPath()
        ctx.lineWidth = confetto.r / 2
        ctx.strokeStyle = confetto.color
        ctx.moveTo(confetto.x + confetto.tilt + confetto.r / 4, confetto.y)
        ctx.lineTo(confetto.x + confetto.tilt, confetto.y + confetto.tilt + confetto.r / 4)
        ctx.stroke()

        confetto.tiltAngle += confetto.tiltAngleIncrement
        confetto.y += (Math.cos(confetto.d) + 1 + confetto.r / 2) / 2
        confetto.tilt = Math.sin(confetto.tiltAngle) * 15

        if (confetto.y > canvas.height) {
          confetti.splice(index, 1)
        }
      })

      window.requestAnimationFrame(render)
    }

    initConfetti()
    render()

    return () => {
      // Clean up animation frame on unmount
      window.cancelAnimationFrame(0)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

