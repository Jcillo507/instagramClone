import { useEffect, useState, useContext } from 'react'
import UserContext from '../context/user'
import { getUserByUserId } from '../services/firebase'

const useUser = () => {
  const [activeUser, setActiveUser] = useState({})
  const { user } = useContext(UserContext)
  console.log(user?.uid)
  useEffect(() => {
    const getUserObjByUserId = async () => {
      const [res] = await getUserByUserId(user.uid)
      setActiveUser(res)
    }
    if (user?.uid) {
      getUserObjByUserId()
    }
  }, [user])
  return { user: activeUser }
}

export default useUser
