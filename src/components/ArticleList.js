import Article from "./Article"


const ArticleList = ({posts}) => {
    const posting = posts.map((post, key) => {
    return (
        <Article key={key} title={post.title} date={post.date} preview={post.preview}/>
    ) 
    })
    return (
        <main>
            {posting}
        </main>

    )
}


export default ArticleList