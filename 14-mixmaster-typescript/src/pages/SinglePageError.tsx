import React from 'react'
import { useRouteError } from 'react-router-dom'

interface Error {
    message: string
}

const SinglePageError = () => {
    const error = useRouteError() as Error
    console.log(error)

  return (
    <div>{error.message}</div>
  )
}

export default SinglePageError