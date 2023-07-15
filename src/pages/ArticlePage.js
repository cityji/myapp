// how to get get user get parameter
import { useParams } from "react-router-dom";
const ArticlePage=()=>{
    const {articleId} = useParams();
    return(
        <>
        <h1>Articles Page for : {articleId} </h1>
        </>
    )
}

export default ArticlePage;
