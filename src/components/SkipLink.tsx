'use client'

export function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="skip-link focus:outline-none"
      onClick={(e) => {
        e.preventDefault()
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView()
        }
      }}
    >
      Skip to main content
    </a>
  )
}