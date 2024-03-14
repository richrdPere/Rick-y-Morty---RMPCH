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
            <form onSubmit={handlerSubmit}>
                {/* Email */}
                <div className="inputContainer">
                    <label id="email">
                        Email:{" "}
                    </label>
                    <input 
                        type="text" 
                        placeholder="email" 
                        name="email" 
                        value={userData.email} 
                        onChange={handlerChange}
                    />
                    {/* {errors.email && <span>{errors.email}</span>} */}
                    {errors.email ? <span>{errors.email}</span> : null}
                </div>

                {/* Password */}
                <div className="inputContainer">
                    <label id="password">
                        Contraseña:{" "}
                    </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={userData.password}  
                        onChange={handlerChange} 
                    />
                    {/* {errors.password && <span>{errors.password}</span>} */}
                    {errors.password ? <span>{errors.password}</span>: null}
                </div>

                {/* Ingresar */}
                <button >Ingresar</button>
            </form>
        </div>
    );
};

export default Form;
