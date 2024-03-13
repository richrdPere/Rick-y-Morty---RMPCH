import { useState } from "react";
import ".././index.css";

const Form = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handlerChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    return (
        <div className="formContainer">
            <form >
                {/* Email */}
                <div className="inputContainer">
                    <label for="email" id="email">
                        Email:{" "}
                    </label>
                    <input 
                        type="text" 
                        placeholder="email" 
                        name="email" 
                        value={userData.email} 
                        onChange={handlerChange}
                    />
                </div>

                {/* Password */}
                <div className="inputContainer">
                    <label for="password" id="password">
                        Contraseña:{" "}
                    </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={userData.password}  
                        onChange={handlerChange} 
                    />
                </div>

                {/* Ingresar */}
                <button>Ingresar</button>
            </form>
        </div>
    );
};

export default Form;
