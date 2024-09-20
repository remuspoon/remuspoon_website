import React from 'react'
import Main from './main.tsx'
import About from './about.tsx'
import Blog from './blog.tsx'
import Contact from './contact.tsx'

const HomePage = () => {
    return (
        <div>
            <Main />
            <Blog />
            <About />
            <Contact />
        </div>
    )
}

export default HomePage