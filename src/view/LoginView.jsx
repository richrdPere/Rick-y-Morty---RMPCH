/* eslint-disable react/prop-types */
import Form from "../components/Form";

const LoginView = ({login}) => {
  return (
    <>
        <Form login={login}/>
    </>
  )
}

export default LoginView;