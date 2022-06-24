import { useState } from 'react'
import Career from './FormComponents/Career'
import Contact from './FormComponents/Contact'
import Education from './FormComponents/Education'
import Skills from './FormComponents/Skills'
import WorkExperience from './FormComponents/WorkExperience'
import { Routes, Route } from "react-router-dom";
import { Degree, EditDegree } from './FormComponents/Degree'


function Builder() {
    const [educationInfo, setEducationInfo] = useState([])

    const [experienceInfo, setExperienceInfo] = useState({
        roles: []
    })

    const [skillsInfo, setSkillsInfo] = useState({
        skills: []
    })

    const [objective, setObjective] = useState('')

    return(
        <>
            <Routes>
                <Route path="/contact" element={<Contact />} />

                <Route path="/education" element={<Education setEducationInfo={ setEducationInfo } educationInfo={ educationInfo } />} />
                <Route path="/education/edit/:index" element={<EditDegree setEducationInfo={ setEducationInfo } educationInfo={ educationInfo } />} />

                <Route path="/experience" element={<WorkExperience setExperienceInfo={ setExperienceInfo } experienceInfo={ experienceInfo } />} />
                <Route path="/skills" element={<Skills setSkillsInfo={ setSkillsInfo } skillsInfo={ skillsInfo } />} />
                <Route path="/career" element={<Career setCareerInfo={ setObjective } careerInfo={ objective } />} />
            </Routes>
        </>
    )
}

export default Builder