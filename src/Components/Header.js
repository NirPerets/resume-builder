import UserIcon from '../Icons/User'

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header">
                <div className="logo">BuildMy<strong>Resume</strong></div>
                <div className="user__button">
                    <button>{ UserIcon }</button>
                </div>
            </div>
        </div>
    )
}

export default Header