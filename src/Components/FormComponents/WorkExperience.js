import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import { Experience } from "./Experience"
import PlusIcon from '../../Icons/Plus'

export default function WorkExperience() {
    const [experiences, setExperiences] = useState([])

    const addExperience = async () => {
        var updatedExperiences = [...experiences, {
            id: experiences.length,
            company: '',
            jobTitle: '',
            location: '',
            startDate: '',
            endDate: '',
        }]

        setExperiences(updatedExperiences)
        localStorage.setItem('experience', JSON.stringify(updatedExperiences))
    }

    useEffect(() => {
        var experienceInfo = localStorage.getItem('experience')
        if(experienceInfo)
            setExperiences(JSON.parse(experienceInfo))
    }, [])

    if(experiences.length == 0 ) {
        return(
            <div className="section">
                <div className="section__title">Experience</div>
                <p className="empty__note">No roles added yet.</p>
                <button className='addBlock' onClick={ addExperience }>{ PlusIcon } Add new role</button>
                <Link to="/resume-builder/skills" className="section__submit">Continue</Link>
            </div> 
        )
    }
    return(
        <div className="section">
            <div className="section__title">Experience</div>
            {
                experiences.map((role, index) => {
                    return(<Experience experiences={ experiences } setExperiences={ setExperiences } key={ index } index={ index } />)
                })
            }
            <button className='addBlock' onClick={ addExperience }>{ PlusIcon } Add new role</button>
            <Link to="/resume-builder/skills" className="section__submit">Continue</Link>
        </div>
    )
}