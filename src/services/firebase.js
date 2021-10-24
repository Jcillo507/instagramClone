import { firebase, FieldValue } from '../lib/firebase'

export const doesUsernameExist = async (name) => {
  const res = await firebase.firestore().collection('users').where('username', '==', name).get()
  return res.docs.map((user) => user.data().length > 0)
}