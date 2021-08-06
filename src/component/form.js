import React, {useState} from "react";
import "./form.css";

const Authenticate = () => {
    const defaultValue = {
        "userEmail": "",
        "userPassword": "",
    }
    const [user, setUser] = useState(defaultValue);

    function handleChange(event) {
    setUser({...user, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user)
        setUser(defaultValue);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <h3>Email</h3>
                <input name={"userEmail"} value={user.userEmail} onChange={handleChange}
                       type="email" placeholder="your email..."/>
                <h3>Password</h3>
                <input name={"userPassword"} value={user.userPassword} onChange={handleChange}
                       type="password" placeholder="your password..." />
                <button className="form-btn">Submit</button>
                <button className="form-switch-btn">Switch To SIGN UP</button>
            </form>
        </div>
    )
}

export default Authenticate;