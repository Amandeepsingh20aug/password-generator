import React from 'react'

const ErrorMessage = ({err}) => {
  return (
      <div className="px-4 pb-4">
          <p className="text-start font-bold text-red-600">{err}
          </p>  
    </div>
  )
}

export default ErrorMessage