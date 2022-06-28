import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import LinkedinIcon from '../../Icons/Linkedin'
import FacebookIcon from '../../Icons/Facebook'
import GitIcon from '../../Icons/Git'
import TwitterIcon from '../../Icons/Twitter'
import ChevronIcon from '../../Icons/Chevron'
import QuestionIcon from '../../Icons/Question'

export default function Contact() {
    const [socialOpen, setSocialOpen] = useState(false)
    const [contactInfo, setContactInfo] = useState({})
    
    const handleInput = (e) => {
        const { name, value } = e.target
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
        localStorage.setItem('contact', JSON.stringify(contactInfo))
    }

    const clearInputs = () => {
        setContactInfo({
            fullName: '',
            email: '',
            jobTitle: '',
            phoneNumber: '',
            location: '',
            linkedin: '',
            github: '',
            facebook: '',
            twitter: '',
            facebook: ''
        })
        localStorage.setItem('contact', JSON.stringify(contactInfo))
    }

    useEffect(() => {
        const storageData = localStorage.getItem('contact')
        if(storageData === null) {
            clearInputs()
        } else {
            setContactInfo(JSON.parse(storageData))
        }
    }, [])

    return(
        <div className="section">
            <div className="section__title">Contact Info</div>
            <div className="section__subtitle">What's the best way for employers to reach you?</div>
            <button className="section__button" onClick={ clearInputs }>Clear out all contact info</button>

            <div className="form__columns">
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" name="fullName" value={ contactInfo.fullName } type="text" placeholder="Israel Israeli" onChange={ handleInput } />
                    <label className="input__label">Full Name</label>
                </div>
                <div className="form__inputWrapper col-lg-2 col-sm-1">
                    <input className="form__input" name="email" value={ contactInfo.email } type="text" placeholder="israel_israeli@gmail.com" onChange={ handleInput } />
                    <label className="input__label">Email (Optional)</label>
                </div>
            </div>

            <div className="form__inputWrapper">
                <input className="form__input full_input" name="jobTitle" value={ contactInfo.jobTitle } type="text" placeholder="Software Engineer" onChange={ handleInput } />
                <label className="input__label">Job title</label>
                <div className="input__note">Use the job title you're applying for, even if it doesn't match the one you currently have.</div>
            </div>

            <div className="form__inputWrapper full_input">
                <input className="form__input full_input" name="phoneNumber" value={ contactInfo.phoneNumber } type="text" placeholder="050-1230-7890" onChange={ handleInput } />
                <label className="input__label">Phone Number (Optional)</label>
            </div>

            <div className="form__inputWrapper full_input">
                <input className="form__input full_input" name="location" value={ contactInfo.location } type="text" placeholder="Tel Aviv, IL" onChange={ handleInput } />
                <label className="input__label">Location (Optional)</label>
            </div>

            <button className="addSocialLinks" onClick={ () => setSocialOpen(!socialOpen)}>
                <div className="social_icons">
                    { LinkedinIcon }
                    { GitIcon }
                    { FacebookIcon }
                    { TwitterIcon }
                </div>
                Social links
                <div className='chevron_icon'>{ ChevronIcon }</div>
            </button>

            <div className={'social__wrapper' + ( socialOpen ? ' open' : '')}>
                <div className="tip__wrapper mt">
                    <div className="tip__title">{ QuestionIcon }  Which social links should I add?</div>
                    <div className='tip'>
                        Only add the links that demonstrate your professional ability. Avoid personal social media. A social media manager might include almost all of these, whereas a teacher might only include a LinkedIn or nothing at all.
                    </div>
                </div>

                <div className="form__columns">
                    <div className="form__inputWrapper col-lg-2 col-sm-1">
                        <input className="form__input" name="linkedin" value={ contactInfo.linkedin } type="text" placeholder="linkedin.com/in/israel.israeli" onChange={ handleInput } />
                        <label className="input__label">Linkedin (Optional)</label>
                    </div>
                    <div className="form__inputWrapper col-lg-2 col-sm-1">
                        <input className="form__input" name="github" value={ contactInfo.github } type="text" placeholder="github.com/israel.israeli" onChange={ handleInput } />
                        <label className="input__label">Github (Optional)</label>
                    </div>
                </div>

                <div className="form__columns">
                    <div className="form__inputWrapper col-lg-2 col-sm-1">
                        <input className="form__input" name='facebook' value={ contactInfo.facebook } type="text" placeholder="facebook.com/israel.israeli" onChange={ handleInput } />
                        <label className="input__label">Facebook (Optional)</label>
                    </div>
                    <div className="form__inputWrapper col-lg-2 col-sm-1">
                        <input className="form__input" name="twitter" value={ contactInfo.twitter } type="text" placeholder="twitter.com/israel.israeli" onChange={ handleInput } />
                        <label className="input__label">Twitter (Optional)</label>
                    </div>
                </div>

                <div className="form__columns">
                    <div className="form__inputWrapper col-lg-2 col-sm-1">
                        <input className="form__input" type="text" value={ contactInfo.website } placeholder="israel-israeli.com" onChange={ handleInput } />
                        <label className="input__label">Website (Optional)</label>
                    </div>
                </div>
            </div>
            <Link to="/resume-builder/education" className="section__submit">Continue</Link>
        </div>
    )
}