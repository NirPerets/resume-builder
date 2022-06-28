import IconTemplate from '../Icons/Template'
import IconSpacing from '../Icons/Spacing'
import IconFont from '../Icons/Font'
import IconColor from '../Icons/Color'
import IconEdit from '../Icons/Edit'
import IconChevron from '../Icons/Chevron'
import { Templates, Spacing, Font, Color } from './TopHeaderComponents'
import { useState } from 'react'

function TopHeader() {
    const [activeBlock, setActiveBlock] = useState()

    const handleActiveBlock = (toSet) => {
        if(toSet === activeBlock) setActiveBlock("")
        else setActiveBlock(toSet)
    }

    return(
        <>
            <div className="topHeader__wrapper">
                <div className="topHeader">
                    <div className='topHeaderBlock__wrapper'>
                        <button className='topHeader__block' onClick={ () => handleActiveBlock('template') }>
                            { IconTemplate } Template <span className='topHeader__chevron'>{ IconChevron }</span>
                        </button>
                        <Templates active={ activeBlock==="template" ? true : false } />
                    </div>

                    <div className='topHeaderBlock__wrapper'>
                        <button className='topHeader__block' onClick={ () => handleActiveBlock('spacing') }>
                            { IconSpacing } Spacing <span className='topHeader__chevron'>{ IconChevron }</span>
                        </button>
                        <Spacing active={ activeBlock === "spacing" ? true : false } />
                    </div>

                    <div className='topHeaderBlock__wrapper'>
                        <button className='topHeader__block' onClick={ () => handleActiveBlock('font') }>
                            { IconFont } Font <span className='topHeader__chevron'>{ IconChevron }</span>
                        </button>
                        <Font active={ activeBlock === "font" ? true : false } />
                    </div>

                    <div className='topHeaderBlock__wrapper'>
                        <button className='topHeader__block' onClick={ () => handleActiveBlock('color') }>
                            { IconColor } Color <span className='topHeader__chevron'>{ IconChevron }</span>
                        </button>
                        <Color active={ activeBlock === "color" ? true : false } />
                    </div>

                    <div className='topHeaderBlock__wrapper'>
                        <button className='topHeader__block'>
                            { IconEdit } Full Stack Developer
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader