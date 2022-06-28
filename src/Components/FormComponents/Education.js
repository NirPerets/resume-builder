import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { Degree } from "./Degree"
import PlusIcon from '../../Icons/Plus'

export default function Education() {
    const [degrees, setDegrees] = useState([])

    const addDegree = () => {
        var updatedDegrees = [...degrees, {
            id: degrees.length,
            schoolName: '',
            schoolLocation: '',
            degreeName: '',
            startDate: '',
            endDate: '',
            awards: ['', '', ''],
        }]

        setDegrees(updatedDegrees)
        localStorage.setItem('education', JSON.stringify(updatedDegrees))
    }

    useEffect(() => {
        var educationInfo = localStorage.getItem('education')
        if(educationInfo)
            setDegrees(JSON.parse(educationInfo))
    }, [])

    if(degrees.length == 0) {
        return(
            <div className="section">
                <div className="section__title">Education</div>
                <p className="empty__note">No degrees added yet.</p>
                <button className='addBlock' onClick={ addDegree }>{ PlusIcon } Add new degree</button>
                <Link to="/resume-builder/experience" className="section__submit">Continue</Link>
            </div> 
        )
    } else {
        return(
            <div className="section">
                <div className="section__title">Education</div>
                {
                    degrees.map((degree, index) => {
                        return(<Degree degrees={ degrees } setDegrees={ setDegrees } key={ index } index={ index } />)
                    })
                }
                <button className='addBlock' onClick={ addDegree }>{ PlusIcon } Add new degree</button>
                <Link to="/resume-builder/experience" className="section__submit">Continue</Link>
            </div>
        )
    }
}