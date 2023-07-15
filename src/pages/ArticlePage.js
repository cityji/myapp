// how to get get user get parameter localhost://3000/learn-react we're trying to get "learn-react" string
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
const ArticlePage=()=>{
    const {articleId} = useParams();
    const article = articles.find(article=>article.name===articleId);
    if(!article) return <NotFoundPage />
    
    return(
        <>
        <h1>{article.title}</h1>
        <h2>Articles Page for the article about : {articleId} </h2>

        {article.content.map((paragraph,i)=>(
            <p className="article-para" key={i}>{paragraph}</p>
        ))}
        </>
    )
}

export default ArticlePage;
