import { useState } from "react"
import { Link } from 'react-router-dom'

import Experience from "./Experience"
import PlusIcon from '../../Icons/Plus'

export default function WorkExperience() {
    return(
        <>
            <div className="section__title">Experience</div>
            <Experience />
            <button className='addBlock'>{ PlusIcon } Add new role</button>
            <Link to="/resume-builder/skills" className="section__submit">Continue</Link>
        </>
    )
}