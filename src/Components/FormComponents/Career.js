import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionIcon from '../../Icons/Question'

export default function Career() {
    const [objective, setObjective] = useState('')

    const handleInput = (newObjective) => {
        setObjective(newObjective)
        localStorage.setItem('career', JSON.stringify(newObjective))
    }

    useEffect(() => {
        const oldObjective = localStorage.getItem('career')
        if(oldObjective)
            setObjective(JSON.parse(oldObjective))
    })

    return(
        <div className="section">
            <div className="section__title">Objective</div>
            <div className="tip__wrapper mt">
                <div className="tip__title">{ QuestionIcon }  Should you add an objective?</div>
                <div className='tip'>
                    We only recommend it if you're changing careers, if you'll customize it for each job you apply to, 
                    or if you have interesting career-wide statistics (like total revenue generated).
                </div>
            </div>
            <div className="form__inputWrapper">
                <input className="form__input full_input" onChange={ (e) => handleInput(e.target.value)} value={ objective } type="text" placeholder="Throughout my career i've built scaleable applications and e-commerce sites with total annual revenue of $5M"/>
                <label className="input__label">Objective</label>
            </div>
            <Link to="/resume-builder/download" className="section__submit">Continue</Link>
        </div>
    )
}