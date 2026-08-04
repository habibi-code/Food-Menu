import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="NewsLetter">
            <h2>Subscribe</h2>
            <p>Stay updated with our latest discounts and offers!</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button>Sign In</button>
            </form>
    </div>
  )
}

export default NewsLetter