import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["title", "card"]

    connect() {
        this.animateElements()
    }

    animateElements() {
        // Animate title
        setTimeout(() => {
        this.titleTarget.classList.remove("opacity-0", "translate-y-12")
        this.titleTarget.classList.add("opacity-100", "translate-y-0")
        }, 200)

        // Animate cards with stagger
        this.cardTargets.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove("opacity-0", "-translate-x-12", "translate-x-12")
            card.classList.add("opacity-100", "translate-x-0")
        }, 400 + (index * 200))
        })
    }
}