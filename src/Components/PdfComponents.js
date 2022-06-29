import EmailIcon from '../Icons/Email'
import PhoneIcon from '../Icons/Phone'
import LocationIcon from '../Icons/Location'
import LinkedinIcon from '../Icons/Linkedin'
import FacebookIcon from '../Icons/Facebook'
import GitIcon from '../Icons/Git'
import TwitterIcon from '../Icons/Twitter'
import CalendarIcon from '../Icons/Calendar'

export function PdfHeader(props) {
    return(
        <div className="pdf__header">
            <div className="pdf__title">{ props.info.fullName }</div>
            <div className="pdf__subtitle">{ props.info.jobTitle }</div>
            <div className='pdf__social'>
                { props.info.email !== '' && <div className='social__block'>{ EmailIcon } <div className='social__text'>{ props.info.email }</div></div> }
                { props.info.phoneNumber !== '' && <div className='social__block'>{ PhoneIcon } <div className='social__text'>{ props.info.phoneNumber }</div></div> }
                { props.info.location !== '' && <div className='social__block'>{ LocationIcon } <div className='social__text'>{ props.info.location }</div></div> }
                { props.info.facebook !== '' && <div className='social__block'>{ FacebookIcon } <div className='social__text'>{ props.info.facebook }</div></div> }
                { props.info.linkedin !== '' && <div className='social__block'>{ LinkedinIcon } <div className='social__text'>{ props.info.linkedin }</div></div> }
                { props.info.twitter !== '' && <div className='social__block'>{ TwitterIcon } <div className='social__text'>{ props.info.twitter }</div></div> }
                { props.info.github !== '' && <div className='social__block'>{ GitIcon } <div className='social__text'>{ props.info.github }</div></div> }
            </div>
        </div>
    )
}

export function PdfEducation(props) {
    return(
        <div className='pdf__section'>
            <div className='pdf__sectionTitle'>education</div>
            {
                props.info.map(degree => {
                    return(
                        <>
                            <div className='degree__title'>{ degree.degree }</div>
                            <div className='degree__name'>{ degree.schoolName }</div>
                            <div className='text__withIcon'>{ CalendarIcon }{ degree.startDate } - { degree.endDate }</div>
                            <div className='text__withIcon'>{ LocationIcon }{ degree.schoolLocation }</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export function PdfSkills(props) {
    return(
        <div className='pdf__section'>
            <div className='pdf__sectionTitle'>Skills</div>
            {
                props.info.map(skillsGroup => {
                    return(
                        <>
                            <div className='pdf__sectionSubtitle'>{ skillsGroup.label }</div>
                            <div className='pdf__sectionList'>
                                { 
                                    skillsGroup.skills.map(skill => {
                                        return(
                                            <li>{ skill }</li>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export function PdfCareer(props) {
    return(
        <div className='pdf__section'>
            <div className='pdf__title'>Career Objective</div>
            <div className='pdt__text'>{ props.info }</div>
        </div>
    )
}

export function PdfExperience(props) {
    return(
        <div className='pdf__section'>
            <div className='pdf__title'>Work Experience</div>
            {
                props.info.map(role => {
                    return(
                        <>
                           <div className='job__title'>{ role.jobTitle }</div> 
                           <div className='job__location'>{ role.company }</div>
                           <div className='job__bar'>
                                <div className='text__withIcon'>{ CalendarIcon }{ role.startDate } - { role.endDate }</div>
                                <div className='text__withIcon'>{ LocationIcon }{ role.location }</div>
                           </div>
                        </>
                    )
                })
            }
        </div>
    )
}