import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { Degree } from "./Degree"
import PlusIcon from '../../Icons/Plus'

export default function Education() {
    const [degrees, setDegrees] = useState([])

    const addDegree = async () => {
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
        setDegrees(JSON.parse(localStorage.getItem('education')))
    }, [])

    const handleInput = (e, i) => {
        /*const { name, value } = e.target

        let updatedDegress = degress.map((degree, index) => {
            if(i == index) {
                return {...degree, [name] : value}
            }
            return degree
        })
        setDegress(updatedDegress)*/
    }

    if(degrees.length == 0) {
        return(
            <>
                <div className="section__title">Education</div>
                <p className="empty__note">No roles added yet.</p>
                <button className='addBlock' onClick={ addDegree }>{ PlusIcon } Add new degree</button>
                <Link to="/resume-builder/experience" className="section__submit">Continue</Link>
            </> 
        )
    } else {
        return(
            <>
                <div className="section__title">Education</div>
                {
                    degrees.map((degree, index) => {
                        return(<Degree degree={ degree } setDegreeInfo={ handleInput } index={ index } />)
                    })
                }
                <button className='addBlock' onClick={ addDegree }>{ PlusIcon } Add new degree</button>
                <Link to="/resume-builder/experience" className="section__submit">Continue</Link>
            </>
        )
    }
}