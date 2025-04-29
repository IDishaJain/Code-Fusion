import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_disha' target='_disha' href='https://www.linkedin.com/in/disha-jain-05b656273/'>Disha Jain</a></p>
        </div>
    </>
  )
}

export default Footer