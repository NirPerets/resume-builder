import LightIcon from '../../Icons/Light'
import EditIcon from '../../Icons/Edit'
import TrashIcon from '../../Icons/Trash'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Plus from '../../Icons/Plus'

export function Degree(props) {    
    const removeDegree = (toDelete) => {
        const updatedDegrees = props.degrees.filter((data, idx) => idx !== toDelete );
        props.setDegrees(updatedDegrees)
        localStorage.setItem('education', JSON.stringify(updatedDegrees))
    }

    return(
        <div className='section block__section'>
            <div className='block__wrapper'>
                <div className='block'>
                    <div className='block__title'>{ props.degrees[props.index].schoolName == '' ? 'No school name added' : props.degrees[props.index].schoolName }</div>
                    <div className='block__subtitle'>{ props.degrees[props.index].degree }</div>
                    <div className='block__text'>{ props.degrees[props.index].startDate } - { props.degrees[props.index].endDate }</div>  
                    <div className="block__note">{ props.degrees[props.index].schoolLocation }</div>  
                    <div className='block__buttons'>
                        <div className='iconButton__wrapper'>
                            <Link to={`/resume-builder/education/edit/${props.index}`} className='block__button'>{ EditIcon }</Link>
                            <div className='iconButton__note'>Edit</div>
                        </div>
                        <div className='iconButton__wrapper'>
                            <button onClick={ () => removeDegree(props.index) } className='block__button'>{ TrashIcon }</button>
                            <div className='iconButton__note'>Remove</div>
                        </div>
                    </div>  
                </div>  
            </div>        
        </div>
    )
}

export function EditDegree() {
    const params = useParams()
    const [degrees, setDegrees] = useState(null)
    const [editedDegree, setEditedDegree] = useState()

    useEffect(() => {
        var education = JSON.parse(localStorage.getItem('education'))
        setDegrees(education)
        setEditedDegree(education[params.id])
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target
        var updatedEditedDegree = {
            ...editedDegree,
            [name]: value
        }

        var updatedDegrees = degrees
        updatedDegrees[params.id] = updatedEditedDegree

        refreshState(updatedEditedDegree, updatedDegrees)
    }

    const addAward = () => {
        var updatedEditedDegree = {
            ...editedDegree,
            awards: [...editedDegree.awards, '']
        }

        var updatedDegrees = degrees
        updatedDegrees[params.id] = updatedEditedDegree

        refreshState(updatedEditedDegree, updatedDegrees)
    }

    const removeAward = async (i) => {
        var updatedEditedDegree = {
            ...editedDegree,
            awards: editedDegree.awards.filter((data, idx) => idx !== i )
        }

        var updatedDegrees = degrees
        updatedDegrees[params.id] = updatedEditedDegree

        refreshState(updatedEditedDegree, updatedDegrees)
    }

    const editAward = (i,e) => {
        var updatedEditedDegree = editedDegree
        updatedEditedDegree.awards[i] = e.target.value

        var updatedDegrees = degrees
        updatedDegrees[params.id] = updatedEditedDegree

        refreshState(updatedEditedDegree, updatedDegrees)
    }

    const refreshState = (updatedEditedDegree, updatedDegrees) => {
        localStorage.setItem('education', JSON.stringify(updatedDegrees))
        setEditedDegree(updatedEditedDegree)
        setDegrees(updatedDegrees)
    }

    if(degrees === null) {
        return(
            <div className='loading__wrapper'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return(
        <div className="section">
            <div className="section__title">Education</div>
            <Link to="/resume-builder/education" className="section__button">&lt; Back to education</Link>

            <div className="tip__wrapper mt">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    If you've attended any college (or a bootcamp) then don't include your high school. Add your experiences whether you graduated or not.
                </div>
            </div>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" name="schoolName" onChange={ handleInput } value={ editedDegree.schoolName } placeholder="Raichman University" />
                    <label className="input__label">Name of school</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" name="schoolLocation" onChange={ handleInput } value={ editedDegree.schoolLocation } placeholder="Hertzliya"/>
                    <label className="input__label">School location (Optional)</label>
                </div>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" name="degree" onChange={ handleInput } value={ editedDegree.degree } placeholder="Bachelor of science"/>
                <label className="input__label">Degree</label>
            </div>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" name="startDate" onChange={ handleInput } value={ editedDegree.startDate } placeholder="2016" />
                    <label className="input__label">Start date (Optional)</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" type="text" name="endDate" onChange={ handleInput } value={ editedDegree.endDate } placeholder="2022"/>
                    <label className="input__label">End date (Optional)</label>
                </div>
            </div>

            <div className='midform__title'>Awards</div>
            {
                editedDegree.awards.map((award, index) => {
                    return(
                        <div className="form__inputWrapper">
                            <input className="form__input full_input" onChange={ (e) => editAward(index,e) } value={ editedDegree.awards[index] } type="text" placeholder="Dean's List,Fall 2018"/>
                            <label className="input__label">Award #{ index + 1 }</label>
                            <button className='input__button' onClick={ () => removeAward(index) } key={ index }>{ TrashIcon }</button>
                        </div>  
                    )
                })
            }

            <button onClick={ addAward } className="addBlock">{ Plus } Add new awards</button>

            <Link to="/resume-builder/education" className="section__submit">Continue</Link>
        </div>
    )
}