import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";



const Login = () => {
    const currentUser = useSelector((state) => state.users)
    const [username, setUsername] = useState('emma')
    const [password, setPassword] = useState('flyingdophins12345')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
            try {
                dispatch(loginThunk({username, password}))
            } catch (e) {

            }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

return (
    <>
    <h1>Login to Music Mingles </h1>
    <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        value={username}
        className="form-control" 
    />
    <input
        onChange = {(e) => setPassword(e.target.value)}
        placeholder="password"
        value={password}
        className="form-control" 
    />
    <button type="button" class="btn btn-success"
    onClick={handleLoginBtn}>
        Login
        </button>
    </>
)
};
export default Login
