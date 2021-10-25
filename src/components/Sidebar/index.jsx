import React from 'react'
import useUser from '../../hooks/use-user'
import User from './User'
import Suggestions from './Suggestions'


const Sidebar = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <div className='p-4'>
      <User/>
      <Suggestions/>
    </div>
  )
}
export default Sidebar
