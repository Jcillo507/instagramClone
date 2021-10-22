import {useState, useContext, useEffect} from 'react'
import { useHistory} from 'react-router-dom'
import FirebaseContext from '../context/firebase'

const Login = () => {
  const history = useHistory()
  const {firebase} =useContext(FirebaseContext)
  const [emailAddess, setEmailAddess] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === ''||emailAddess ===""
  const handleLogin = ()=>{

  }
  useEffect(() => {
   document.title="Login - Instagram"
  }, [])

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      njkm
    </div>
  );
}

export default Login
