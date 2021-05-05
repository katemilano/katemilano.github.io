import React, {useState} from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import HomeBlock from '../components/HomeBlock'
import MainSection from '../components/MainSection'
import SkillSection from '../components/SkillSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <MobileMenu isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeBlock />
            <MainSection />
            <SkillSection />
            <ContactSection/>
        </>
    )
}

export default Home
