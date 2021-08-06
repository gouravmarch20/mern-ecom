import React from 'react'
import Base from '../core/Base'

const UserDashBoard = () => {
  const userData = JSON.parse(localStorage.getItem('jwt'))

  return (
    <Base title='UserDashBoard page'>
    <p>{userData.user.name}</p>
    <p>{userData.user.email}</p>

    </Base>
  )
}

export default UserDashBoard
