/* eslint-disable react/prop-types */
import { useState } from "react";
import ".././index.css";
import validation from "./validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handlerChange = (event) => {
        setErrors(validation(userData));
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        login(userData)
    }

    return (
        <div className="formContainer">

            <h2>Login - Rick and Morty</h2>
            <form onSubmit={handlerSubmit}>
                {/* Email */}
                 {/* <label id="email">
                        Email:{" "}
                    </label> */}
                <input 
                    className="login-username"
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handlerChange}
                />
                    {/* {errors.email && <span>{errors.email}</span>} */}
                    {errors.email ? <span>{errors.email}</span> : null}
                {/* Password */}
                {/* <label id="password">
                        Contraseña:{" "}
                    </label> */}
                <input 
                    className="login-password "
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={userData.password}  
                    onChange={handlerChange} 
                />
                {/* {errors.password && <span>{errors.password}</span>} */}
                {errors.password ? <span>{errors.password}</span>: null}

                {/* Ingresar */}
                <button className="loginSubmit">Ingresar</button>              

                
            </form>
        </div>
    );
};

export default Form;
