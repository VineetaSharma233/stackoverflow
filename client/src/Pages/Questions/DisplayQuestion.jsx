import React from 'react'
import LeftSidebar from '../../Components/Leftsidebar/Leftsidebar'
import RightSidebar from '../../Components/Rightsidebar/Rightsidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <QuestionsDetails />
                <RightSidebar />
            </div>
        </div>
    )
}

export default DisplayQuestion