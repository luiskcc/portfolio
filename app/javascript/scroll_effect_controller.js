import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        if (window.innerWidth < 768) { // Mobile only
        window.addEventListener('scroll', this.handleScroll.bind(this))
        }
    }

    disconnect() {
        if (window.innerWidth < 768) {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
        }
    }

    handleScroll() {
        const rect = this.element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Check if element is in viewport
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
        this.element.classList.add('border-[#58a6ff]')
        } else {
        this.element.classList.remove('border-[#58a6ff]')
        }
    }
}