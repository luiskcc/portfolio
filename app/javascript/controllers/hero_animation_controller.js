import { Controller } from "@hotwired/stimulus"

    export default class extends Controller {
    static targets = ["image", "name", "title", "description", "button"]

    connect() {
        // Add initial classes for transitions
        this.imageTarget.classList.add("transition-all", "duration-1000", "ease-out")
        
        // Start animations after a brief delay
        requestAnimationFrame(() => {
        this.animateElements()
        })
    }

    animateElements() {
        // Image animation
        setTimeout(() => {
        this.imageTarget.classList.remove("opacity-0", "scale-0", "transform")
        this.imageTarget.classList.add("opacity-100", "scale-100")
        }, 100)

        // Text animations
        const elements = [
        { target: this.nameTarget, delay: 300 },
        { target: this.titleTarget, delay: 500 },
        { target: this.descriptionTarget, delay: 700 },
        { target: this.buttonTarget, delay: 900 }
        ]

        elements.forEach(({ target, delay }) => {
        target.classList.add("transition-all", "duration-700", "ease-out")
        setTimeout(() => {
            target.classList.remove("opacity-0", "-translate-y-4")
            target.classList.add("opacity-100", "translate-y-0")
        }, delay)
        })
    }
}