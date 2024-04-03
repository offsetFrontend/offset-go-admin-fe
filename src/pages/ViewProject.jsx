import React from 'react'
import ProjectUploadForm from '../components/molecules/ProjectUploadForm/index'
import TopLoader from '../context/TopLoader'

const ViewProject = () => {
  return (
    <TopLoader>
    <ProjectUploadForm />
  </TopLoader>
  )
}

export default ViewProject