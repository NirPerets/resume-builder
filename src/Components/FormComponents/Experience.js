import LightIcon from '../../Icons/Light'
import EditIcon from '../../Icons/Edit'
import TrashIcon from '../../Icons/Trash'

export default function Experience() {
    return(
        <div className='block__wrapper'>
            <div className='block'>
                <div className='block__title'>Full Stack Developer</div>
                <div className='block__subtitle'>Freelancer</div>
                <div className='block__text'>November 2020 - current</div>  
                <div class="block__note">Remote</div>  
                <div className='block__buttons'>
                    <button className='block__button'>{ EditIcon }</button>
                    <button className='block__button'>{ TrashIcon }</button>
                </div>  
            </div>  
        </div>   
    )
}

function EditExperience() {
    return(
        <>
            <div className="section__title">Education</div>
            <button className="section__button">&lt; Back to work experience</button>

            <div className="tip__wrapper">
                <div className="tip__title">{ LightIcon } Resume Tip</div>
                <div className='tip'>
                    If you're light on work experience then include things like internships, part-time jobs, or even volunteer work.
                </div>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Google"/>
                <label className="input__label">Company</label>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Software Enginner"/>
                <label className="input__label">Job Title</label>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" type="text" placeholder="Tel Aviv, IL"/>
                <label className="input__label">location (Optional)</label>
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

            <button className="section__submit">Continue</button>
        </>
    )
}