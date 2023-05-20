import { useState, useEffect } from 'react'
import { usePosts } from '../store/posts'

import { Post } from './Post'
import { PostType } from '../data/posts'

export function Posts() {
  const { posts, search } = usePosts()
  const [currentPosts, setCurrentPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (search === '') {
      setCurrentPosts(posts)
    } else if (typeof search === 'string') {
      const newPosts = posts.filter((e) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        e.title.toLocaleLowerCase().includes(search!.toString().toLowerCase())
      )
      setCurrentPosts(newPosts)
    }
  }, [search, posts])

  return (
    <div className='container py-8 lg:py-12 space-y-8 lg:space-y-12'>
      {currentPosts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}

      {currentPosts.length === 0 && (
        <div className='flex flex-col items-center py-8 lg:py-12 opacity-70'>
          <img
            src='/not-result-found.svg'
            alt='Imagem de uma lupa com um rosto triste'
          />
          <h2 className='text-xl lg:text-2xl'>Ops</h2>
          <p>Nenhum resultado encontrado</p>
        </div>
      )}
    </div>
  )
}
