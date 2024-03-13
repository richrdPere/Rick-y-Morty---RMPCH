import ".././index.css";

const Form = () => {
    return (
        <div className="formContainer">
            <form >
                {/* Email */}
                <div className="inputContainer">
                    <label htmlFor="email" id="email">
                        Email:{" "}
                    </label>
                    <input type="text" placeholder="email" name="email" />
                    </div>

                {/* Password */}
                <div className="inputContainer">
                    <label htmlFor="password" id="password">
                        Contraseña:{" "}
                    </label>
                    <input type="password" placeholder="Password" name="password" />
                </div>

                {/* Ingresar */}
                <button>Ingresar</button>
            </form>
        </div>
    );
};

export default Form;
