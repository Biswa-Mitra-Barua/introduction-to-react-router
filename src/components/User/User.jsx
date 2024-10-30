import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, id, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '8px'
    }    
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;