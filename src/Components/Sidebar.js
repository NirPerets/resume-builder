import { NavLink } from 'react-router-dom'

import PhoneIcon from '../Icons/Phone'
import StudyIcon from '../Icons/Study'
import WrenchIcon from '../Icons/Wrench'
import StarIcon from '../Icons/Star'
import BookIcon from '../Icons/Book'
import DownloadIcon from '../Icons/Download'
import arrowIcon from '../Icons/CircleArrowLeft'
import plusIcon from '../Icons/Plus'

function Sidebar(props) {

    return(
        <div className={"sidebar__wrapper" + (props.expandedSidebar ? ' expanded' : '')}>
            <div className="sidebar">
                <li>
                    <NavLink to="/resume-builder/contact" className="sidebar__button" activeclassname="active">
                        { PhoneIcon }
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume-builder/education" className="sidebar__button" activeclassname="active">
                        { StudyIcon }
                        <span>Education</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume-builder/experience" className="sidebar__button" activeclassname="active">
                        { WrenchIcon }
                        <span>Work Experience</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume-builder/skills" className="sidebar__button" activeclassname="active">
                        { StarIcon }
                        <span>Skills</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume-builder/career" className="sidebar__button" activeclassname="active">
                        { BookIcon }
                        <span>Career Objective</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume-builder/download" className="sidebar__button" activeclassname="active">
                        { DownloadIcon }
                        <span>Format & Download</span>
                    </NavLink>
                </li>
            </div>
            <button className='addSection'>
                { plusIcon }
                <span>Add Section</span>
            </button>
            <button className={'minimizeSidebar' + ( props.expandedSidebar  ? ' expanded' : '')} onClick={ () => props.setExpandedSidebar(!props.expandedSidebar) }>{ arrowIcon }</button>
        </div>
    )
}

export default Sidebar