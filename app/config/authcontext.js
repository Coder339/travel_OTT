import { createContext } from "react";

const AuthContext = createContext({
  userToken: undefined,
  user: {
    name: '',
    said: null,
    given_name: '',
    phone_number: '',
    phone_country_code: ''
  },
  device: '',
  os: '',
  signOut: {},
  updateUser: {}
});

export default AuthContext