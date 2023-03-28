import { useState } from 'react'
import { PdfHeader, PdfSkills, PdfCareer, PdfEducation, PdfExperience } from './PdfComponents'

export default function PDF() {
    const [ resumeInfo, setResumeInfo ] = useState({
        contact: JSON.parse(localStorage.getItem('contact')),
        skills: JSON.parse(localStorage.getItem('skills')),
        education: JSON.parse(localStorage.getItem('education')),
        experience: JSON.parse(localStorage.getItem('experience')),
        career: JSON.parse(localStorage.getItem('career'))    
    })

    return(
        <div className='section'>
            <div className="pdf__wrapper">
                <div className='pdfToExport'>
                    <div className='left__column'>
                        <PdfHeader info={ resumeInfo.contact } />
                        {
                            resumeInfo.education != null ?
                            (<PdfEducation info={ resumeInfo.education } />) : <></>
                        }
                        
                        {
                            resumeInfo.skills != null ?
                            <PdfSkills info={ resumeInfo.skills } /> : <></>
                        }
                    </div>
                    <div className='right__column'>
                        {
                            resumeInfo.career != null ?
                            <PdfCareer info={ resumeInfo.career } /> : <></>
                        }

                        {
                            resumeInfo.experience != null ?
                            <PdfExperience info={ resumeInfo.experience } /> : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}