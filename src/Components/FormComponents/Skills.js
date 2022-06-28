import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LightIcon from '../../Icons/Light'
import TrashIcon from '../../Icons/Trash'
import PlusIcon from '../../Icons/Plus'

export default function Skills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        var skillsInfo = localStorage.getItem('skills')
        if(skillsInfo)
            setSkills(JSON.parse(skillsInfo))
    }, [])

    const addSkillsGroup = () => {
        console.log(skills)
        var updatedSkills = [...skills, {
            id: skills.length,
            label: '',
            skills: ['','','']
        }]

        setSkills(updatedSkills)
        localStorage.setItem('skills', JSON.stringify(updatedSkills))
    }

    if(skills.length == 0) {
        return(
            <div className="section">
                <div className="section__title">Your Skills</div>
                <p className="empty__note">No skills added yet.</p>
                <button className='addBlock' onClick={ addSkillsGroup }>{ PlusIcon } Add new group of skills</button>
                <Link to="/resume-builder/career" className="section__submit">Continue</Link>
            </div> 
        )
    }
    return(
        <div className="section">
            <div className="section__title">Your Skills</div>
            <div className="tip__wrapper mt">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    Only include skills that you'd be comfortable getting interviewed in/about.
                </div>
            </div>
            {
                skills.map((skillsGroup, index) => {
                    return(<SkillsGroup skills={ skills } setSkills={ setSkills } key={ index } index={ index } />)
                })
            }
            <button className='addBlock' onClick={ addSkillsGroup }>{ PlusIcon } Add new group of skills</button>
            <Link to="/resume-builder/career" className="section__submit">Continue</Link>
        </div>
    )
}

function SkillsGroup(props) {
    const [allGroupSkills, setAllGroupSkills] = useState(null)
    const [thisSkillGroup, setThisSkillGroup] = useState()

    useEffect(() => {
        var tempGroupSkills = JSON.parse(localStorage.getItem('skills'))
        console.log(tempGroupSkills[props.index])
        setAllGroupSkills(tempGroupSkills)
        setThisSkillGroup(tempGroupSkills[props.index])
    }, [])

    const addSkill = () => {   
        var editedThisSkillsGroup = {
            ...thisSkillGroup,
            skills: [...thisSkillGroup.skills, '']
        }
       
        var editedAllGroupSkiils = allGroupSkills
        editedAllGroupSkiils[props.index] = editedThisSkillsGroup

        refreshState(editedThisSkillsGroup, editedAllGroupSkiils)
    }

    const removeSkill = (i) => {
        var updatedEditedDegree = {
            ...thisSkillGroup,
            skills: thisSkillGroup.skills.filter((data, idx) => idx !== i )
        }

        var editedAllGroupSkiils = allGroupSkills
        editedAllGroupSkiils[props.index] = updatedEditedDegree

        refreshState(updatedEditedDegree, editedAllGroupSkiils)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        var updatedThisSkillsGroup = {
            ...thisSkillGroup,
            [name]: value
        }

        var updatedAllSkillsGroups = allGroupSkills
        updatedAllSkillsGroups[props.index] = updatedThisSkillsGroup

        refreshState(updatedThisSkillsGroup, updatedAllSkillsGroups)
    }

    const editSkill = (newSkill, i) => {
        const updatedThisSkillsGroup = thisSkillGroup 
        updatedThisSkillsGroup.skills[i] = newSkill

        var updatedAllSkillsGroups = allGroupSkills
        updatedAllSkillsGroups[props.index] = updatedThisSkillsGroup

        refreshState(updatedThisSkillsGroup, updatedAllSkillsGroups)
    }

    const removeSkillsGroup = (toDelete) => {
        const updatedSkills = props.skills.filter((data, idx) => idx !== toDelete );
        props.setSkills(updatedSkills)
        localStorage.setItem('skills', JSON.stringify(updatedSkills))
    }

    const refreshState = (updatedThisSkillsGroup, updatedAllSkillsGroups) => {
        localStorage.setItem('skills', JSON.stringify(updatedAllSkillsGroups))
        setThisSkillGroup(updatedThisSkillsGroup)
        setAllGroupSkills(updatedAllSkillsGroups)
    }

    if(allGroupSkills === null) {
        return(
            <div className='loading__wrapper'>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return(
        <div className="section block__section">
            <div className='block__wrapper'>
                <div className='block'>
                    <div className="form__columns">
                        <div className="form__inputWrapper col-lg-2 col-sm-1">
                            <input className="form__input" type="text" name="label" onChange={ (e) => handleInput(e) } value={ thisSkillGroup.label } placeholder="Programming Languages" />
                            <label className="input__label in_block">Label (Optional)</label>
                        </div>
                    </div>
                    <div className='midform__title'>Skills</div>
                    {
                        thisSkillGroup.skills.map((skill, index) => {
                            return(
                                <div className="form__inputWrapper" key={ index }>
                                    <input className="form__input full_input" onChange={ (e) => editSkill(e.target.value, index) } value={ skill } type="text" placeholder="Python"/>
                                    <label className="input__label in_block">Skill #{ index + 1 }</label>
                                    <button className='input__button' onClick={ () => removeSkill(index) } key={ index }>{ TrashIcon }</button>
                                </div>
                            )
                        })
                    }

                    <button onClick={ addSkill } className='addInput'>{ PlusIcon } Add skill</button>

                    <div className='block__buttons'>
                        <div className='iconButton__wrapper'>
                            <button onClick={ () => removeSkillsGroup(props.index) } className='block__button'>{ TrashIcon }</button>
                            <div className='iconButton__note'>Remove</div>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>
    )
}