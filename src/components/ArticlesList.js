import {Link} from 'react-router-dom';
const ArticleList = ({ articles }) => {
    return (
        <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/articles/${article.name}`}>
                <h3 className='article-title'>{article.title}</h3>
                <p className='article-para'>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    )
}

export default ArticleList;