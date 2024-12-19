import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    starDensity: { type: Number, default: 0.00015 },
    allStarsTwinkle: { type: Boolean, default: true },
    twinkleProbability: { type: Number, default: 0.7 },
    minTwinkleSpeed: { type: Number, default: 0.5 },
    maxTwinkleSpeed: { type: Number, default: 1.0 },
    minOpacity: { type: Number, default: 1 },    // Increased from 0.5
    maxOpacity: { type: Number, default: 2.0 },    // Increased from 0.5
    minRadius: { type: Number, default: 1 },     // Increased from 0.5
    maxRadius: { type: Number, default: 2 }  
  }

  connect() {
    this.stars = []
    this.setupCanvas()
    this.setupResizeObserver()
    this.startAnimation()
  }

  disconnect() {
    this.resizeObserver?.disconnect()
    cancelAnimationFrame(this.animationFrameId)
  }

  setupCanvas() {
    const { width, height } = this.element.getBoundingClientRect()
    this.element.width = width
    this.element.height = height
    this.generateStars(width, height)
  }

  setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.setupCanvas()
    })
    this.resizeObserver.observe(this.element)
  }

  generateStars(width, height) {
    const area = width * height
    const numStars = Math.floor(area * this.starDensityValue)
    
    this.stars = Array.from({ length: numStars }, () => {
      const shouldTwinkle = 
        this.allStarsTwinkleValue || 
        Math.random() < this.twinkleProbabilityValue

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? this.minTwinkleSpeedValue +
            Math.random() * (this.maxTwinkleSpeedValue - this.minTwinkleSpeedValue)
          : null
      }
    })
  }

  startAnimation() {
    const ctx = this.element.getContext('2d')
    if (!ctx) return

    const render = () => {
      ctx.clearRect(0, 0, this.element.width, this.element.height)
      
      this.stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        if (star.twinkleSpeed !== null) {
          star.opacity = 
            0.5 + 
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5)
        }
      })

      this.animationFrameId = requestAnimationFrame(render)
    }

    render()
  }
}