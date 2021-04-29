import React, {useState} from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <MobileMenu isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    )
}

export default Home
