import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["canvas"]
  static values = {
    minSpeed: Number,
    maxSpeed: Number,
    minDelay: Number,
    maxDelay: Number,
    starColor: String,
    trailColor: String,
    starWidth: Number,
    starHeight: Number
  }

  connect() {
    this.currentStar = null
    this.createStar()
  }

  disconnect() {
    cancelAnimationFrame(this.animationFrame)
  }

  getRandomStartPoint() {
    const side = Math.floor(Math.random() * 4)
    const offset = Math.random() * window.innerWidth

    switch (side) {
      case 0:
        return { x: offset, y: 0, angle: 45 }
      case 1:
        return { x: window.innerWidth, y: offset, angle: 135 }
      case 2:
        return { x: offset, y: window.innerHeight, angle: 225 }
      case 3:
        return { x: 0, y: offset, angle: 315 }
      default:
        return { x: 0, y: 0, angle: 45 }
    }
  }

  createStar() {
    const { x, y, angle } = this.getRandomStartPoint()
    this.currentStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (this.maxSpeedValue - this.minSpeedValue) + this.minSpeedValue,
      distance: 0
    }

    this.moveStar()
    const randomDelay = Math.random() * (this.maxDelayValue - this.minDelayValue) + this.minDelayValue
    setTimeout(() => this.createStar(), randomDelay)
  }

  moveStar() {
    if (this.currentStar) {
      const star = this.currentStar
      const newX = star.x + star.speed * Math.cos(star.angle * Math.PI / 180)
      const newY = star.y + star.speed * Math.sin(star.angle * Math.PI / 180)
      const newDistance = star.distance + star.speed
      const newScale = 1 + newDistance / 100

      if (newX < -20 || newX > window.innerWidth + 20 || 
          newY < -20 || newY > window.innerHeight + 20) {
        this.currentStar = null
        return
      }

      this.currentStar = {
        ...star,
        x: newX,
        y: newY,
        distance: newDistance,
        scale: newScale
      }

      this.updateStarElement()
    }

    this.animationFrame = requestAnimationFrame(() => this.moveStar())
  }

  updateStarElement() {
    const star = this.currentStar
    const svg = this.canvasTarget

    // Remove old star if exists
    const oldStar = svg.querySelector('rect')
    if (oldStar) oldStar.remove()

    // Create new star
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rect.setAttribute("x", star.x)
    rect.setAttribute("y", star.y)
    rect.setAttribute("width", this.starWidthValue * star.scale)
    rect.setAttribute("height", this.starHeightValue)
    rect.setAttribute("fill", "url(#gradient)")
    rect.setAttribute("transform", `rotate(${star.angle}, ${
      star.x + (this.starWidthValue * star.scale) / 2
    }, ${star.y + this.starHeightValue / 2})`)

    svg.appendChild(rect)
  }
}