import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const {postId}  = useParams();

    const {id, title, body} = post;

    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(postId)

    const detailStyle = {
        border: '2px solid green',
        padding: '10px',
        margin: '20px',
        borderRadius: '15px'
    }
    return (
        <div style={detailStyle}>
            <h3>ID : {id}</h3>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;