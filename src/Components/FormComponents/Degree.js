import LightIcon from '../../Icons/Light'
import EditIcon from '../../Icons/Edit'
import TrashIcon from '../../Icons/Trash'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Degree(props) {
    const params = useParams()

    return(
        <>
            <div className='block__wrapper'>
                <div className='block'>
                    <div className='block__title'>{ props.degree.schoolName == '' ? 'No school name added' : props.degree.schoolName }</div>
                    <div className='block__subtitle'></div>
                    <div className='block__text'>November 2020 - current</div>  
                    <div class="block__note">Remote</div>  
                    <div className='block__buttons'>
                        <Link to={`/education/edit/${props.index}`} className='block__button'>{ EditIcon }</Link>
                        <button className='block__button'>{ TrashIcon }</button>
                    </div>  
                </div>  
            </div>        
        </>
    )
}

export function EditDegree(props) {
    return(
        <>
            <div className="section__title">Education</div>
            <button className="section__button">&lt; Back to education</button>

            <div className="tip__wrapper">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    If you've attended any college (or a bootcamp) then don't include your high school. Add your experiences whether you graduated or not.
                </div>
            </div>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" name="schoolName" onChange={ () => props.handleInput(props.index)} placeholder="Raichman University" />
                    <label className="input__label">Name of school</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" placeholder="Hertzliya"/>
                    <label className="input__label">School location (Optional)</label>
                </div>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Bachelor of science"/>
                <label className="input__label">Degree</label>
            </div>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" placeholder="2016" />
                    <label className="input__label">Start date (Optional)</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" placeholder="2022"/>
                    <label className="input__label">End date (Optional)</label>
                </div>
            </div>

            <div className='midform__title'>Awards</div>
            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Dean's List,Fall 2018"/>
                <label className="input__label">Award #1</label>
            </div>
            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Dean's List,Fall 2018"/>
                <label className="input__label">Award #2</label>
            </div>
            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Dean's List,Fall 2018"/>
                <label className="input__label">Award #3</label>
            </div>

            <button className="section__submit">Continue</button>
        </>
    )
}