import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import LightIcon from '../../Icons/Light'
import EditIcon from '../../Icons/Edit'
import TrashIcon from '../../Icons/Trash'

export function Experience(props) {
    const removeExperience = (toDelete) => {
        const updatedExperiences = props.experiences.filter((data, idx) => idx !== toDelete );
        props.setExperiences(updatedExperiences)
        localStorage.setItem('experience', JSON.stringify(updatedExperiences))
    }

    return(
        <div className='section block__section'>
            <div className='block__wrapper'>
                <div className='block'>
                    <div className='block__title'>{ props.experiences[props.index].jobTitle == '' ? 'No job title added' : props.experiences[props.index].jobTitle }</div>
                    <div className='block__subtitle'>{ props.experiences[props.index].company == '' ? 'No company added' : props.experiences[props.index].company }</div>
                    <div className='block__text'>{ props.experiences[props.index].startDate } - { props.experiences[props.index].endDate }</div>  
                    <div className="block__note">{ props.experiences[props.index].location }</div>  
                    <div className='block__buttons'>
                        <Link to={`/resume-builder/experience/edit/${props.index}`} className='block__button'>{ EditIcon }</Link>
                        <button className='block__button' onClick={ () => removeExperience(props.index) }>{ TrashIcon }</button>
                    </div>  
                </div>  
            </div>   
        </div>
    )
}

export function EditExperience() {
    const params = useParams()
    const [experiences, setExperiences] = useState(null)
    const [editedExperience, setEditedExperience] = useState()

    useEffect(() => {
        var experience = JSON.parse(localStorage.getItem('experience'))
        setExperiences(experience)
        setEditedExperience(experience[params.id])
        console.log(editedExperience)
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target
        var updatedEditedExperiences = {
            ...editedExperience,
            [name]: value
        }

        var updatedExperiences = experiences
        updatedExperiences[params.id] = updatedEditedExperiences

        refreshState(updatedEditedExperiences, updatedExperiences)
    }

    const refreshState = (updatedEditedExperience, updatedExperiences) => {
        localStorage.setItem('experience', JSON.stringify(updatedExperiences))
        setEditedExperience(updatedEditedExperience)
        setExperiences(updatedExperiences)
    }

    if(experiences === null) {
        return(
            <div className='loading__wrapper'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return(
        <div className="section">
            <div className="section__title">Education</div>
            <Link to="/resume-builder/experience" className="section__button">&lt; Back to experience</Link>

            <div className="tip__wrapper mt">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    If you're light on work experience then include things like internships, part-time jobs, or even volunteer work.
                </div>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" name="company" onChange={ handleInput } value={ editedExperience.company } type="text" placeholder="Google"/>
                <label className="input__label">Company</label>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" name="jobTitle" onChange={ handleInput } value={ editedExperience.jobTitle } type="text" placeholder="Software Enginner"/>
                <label className="input__label">Job Title</label>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" name="location" onChange={ handleInput } value={ editedExperience.location } type="text" placeholder="Tel Aviv, IL"/>
                <label className="input__label">location (Optional)</label>
            </div>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" name="startDate" onChange={ handleInput } value={ editedExperience.startDate } type="text" placeholder="2016" />
                    <label className="input__label">Start date (Optional)</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" name="endDate" onChange={ handleInput } value={ editedExperience.endDate } type="text" placeholder="2022"/>
                    <label className="input__label">End date (Optional)</label>
                </div>
            </div>

            <Link to="/resume-builder/experience" className="section__submit">Continue</Link>
        </div>
    )
}