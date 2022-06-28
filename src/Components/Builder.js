import { useState } from 'react'
import Career from './FormComponents/Career'
import Contact from './FormComponents/Contact'
import Education from './FormComponents/Education'
import Skills from './FormComponents/Skills'
import WorkExperience from './FormComponents/WorkExperience'
import { Routes, Route } from "react-router-dom";
import { EditDegree } from './FormComponents/Degree'
import { EditExperience } from './FormComponents/Experience'
import Download from './FormComponents/Download'

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
                <Route path="/education/edit/:id" element={<EditDegree />} />

                <Route path="/experience" element={<WorkExperience setExperienceInfo={ setExperienceInfo } experienceInfo={ experienceInfo } />} />
                <Route path="/experience/edit/:id" element={<EditExperience />} />

                <Route path="/skills" element={<Skills setSkillsInfo={ setSkillsInfo } skillsInfo={ skillsInfo } />} />
                <Route path="/career" element={<Career setCareerInfo={ setObjective } careerInfo={ objective } />} />
                <Route path="/download" element={<Download />} />
            </Routes>
        </>
    )
}

export default Builder