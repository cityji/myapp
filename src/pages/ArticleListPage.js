import articles from './article-content';
import {Link} from 'react-router-dom';
const ArticleListPage=()=>{
    return(
        <>
        <h1>Articles List </h1>
        {articles.map((article,key)=>(
           <Link className='article-list-item' to={`/articles/${article.name}`} key={key}>
            <h3 style={{textAlign:'left'}} key={key}>{article.title}</h3>
            <p className='article-para'>{article.content[0].substring(0,150)}...</p>
           </Link>
        ))}
        </>
    )
}

export default ArticleListPage;
