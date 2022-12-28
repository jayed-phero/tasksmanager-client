import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Spinner from './Spinner'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <Spinner />
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/signin' state={{ from: location }} replace />
}

export default PrivateRoutes;
