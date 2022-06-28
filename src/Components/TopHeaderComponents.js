import IconUpDownArrow from '../Icons/UpDownArrow'

export function Templates(props) {
    if(!props.active) return(<></>)
    return (
        <div className="floated__block">

        </div>
    )
}

export function Spacing(props) {
    if(!props.active) return(<></>)

    return (
        <div className="floated__block">
            <div className="floated__blockTitle">Page margins</div>
            <div className="floated__blockRange__wrapper">
                <span className="small__icon">{ IconUpDownArrow }</span>
                <input type="range" min="5" max="25" step="5" />
                <span className="big__icon">{ IconUpDownArrow }</span>
            </div>

            <div className="floated__blockTitle">Vertical spacing</div>
            <div className="floated__blockRange__wrapper">
                <span className="small__icon">{ IconUpDownArrow }</span>
                <input type="range" min="5" max="25" step="5" />
                <span className="big__icon">{ IconUpDownArrow }</span>
            </div>
        </div>
    )   
}

export function Font(props) {
    if(!props.active) return(<></>)

    return (
        <div className="floated__block">
            
        </div>
    )
}

export function Color(props) {
    if(!props.active) return(<></>)

    return (
        <div className="floated__block">
            
        </div>
    )
}

