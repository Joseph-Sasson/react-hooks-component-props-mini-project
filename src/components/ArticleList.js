import Article from './Article'

function ArticleList({posts}){
  const post = posts.map(blogPost=>{
    return <Article key={blogPost.id} title={blogPost.title} preview={blogPost.preview} date={blogPost.date} />
  })
  console.log(post)
  return(
    <main>
      {post}
    </main>
  )
}

export default ArticleList