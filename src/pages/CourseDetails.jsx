import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const para = useParams()

    
  return (
    <div>
          <h1>{ para.id } CourseDetailPage</h1>
    </div>
  )
}

export default CourseDetails
