import { Link } from 'react-router-dom'

import LightIcon from '../../Icons/Light'
import TrashIcon from '../../Icons/Trash'
import PlusIcon from '../../Icons/Plus'

export default function Skills() {
    return(
        <>
            <div className="section__title">Your Skills</div>
            <div className="tip__wrapper mt">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    Only include skills that you'd be comfortable getting interviewed in/ about.
                </div>
            </div>
            <SkillsGroup />
            <SkillsGroup />
            <button className='addBlock'>{ PlusIcon } Add new group of skills</button>
            <Link to="/resume-builder/career" className="section__submit">Continue</Link>
        </>
    )
}

function SkillsGroup() {
    return(
        <>
            <div className='block__wrapper'>
                <div className='block'>
                    <div className="form__columns">
                        <div className="form__inputWrapper col-lg-2 col-sm-1">
                            <input className="form__input" type="text" placeholder="Programming Languages" />
                            <label className="input__label in_block">Label (Optional)</label>
                        </div>
                    </div>
                    <div className='midform__title'>Skills</div>
                    <div className="form__inputWrapper">
                        <input className="form__input full_input" type="text" placeholder="Python"/>
                        <label className="input__label in_block">Skill #1</label>
                    </div>
                    <div className="form__inputWrapper">
                        <input className="form__input full_input" type="text" placeholder="Python"/>
                        <label className="input__label in_block">Skill #2</label>
                    </div>
                    <div className="form__inputWrapper">
                        <input className="form__input full_input" type="text" placeholder="Python"/>
                        <label className="input__label in_block">Skill #3</label>
                    </div>
                    <button className='addInput'>{ PlusIcon } Add skill</button>

                    <div className='block__buttons'>
                        <button className='block__button'>{ TrashIcon }</button>
                    </div>  
                </div>  
            </div>  
        </>
    )
}