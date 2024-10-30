import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    const postStyle = {
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '8px'
    }  
    return (
        <div style={postStyle}>
            <h3>Post ID: {id}</h3>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show Details</Link><br />
            <Link to={`/post/${id}`}><button>Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;