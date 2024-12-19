import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["title", "card"]

  connect() {
    this.animateElements()
  }

  animateElements() {
    // Animate title
    this.titleTarget.classList.add("transition-all", "duration-700", "ease-out")
    setTimeout(() => {
      this.titleTarget.classList.remove("opacity-0", "translate-y-12")
      this.titleTarget.classList.add("opacity-100", "translate-y-0")
    }, 100)

    // Animate cards with stagger
    this.cardTargets.forEach((card, index) => {
      card.classList.add("transition-all", "duration-700", "ease-out")
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-12")
        card.classList.add("opacity-100", "translate-y-0")
      }, 200 + (index * 100))
    })
  }
}