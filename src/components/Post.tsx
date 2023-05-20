import { PostType } from '../data/posts'
import { usePosts } from '../store/posts'
import { HeartStraight } from '@phosphor-icons/react'

export function Post({ post }: { post: PostType }) {
  const { changeFavorite } = usePosts()

  function handleFavorite() {
    changeFavorite(post)
  }

  return (
    <div className='bg-white rounded-md p-4 lg:p-6 '>
      <div className='flex items-center justify-between'>
        <p className='text-sm lg:text-base'>{post.date}</p>

        <div onClick={handleFavorite}>
          {post.isFavorite && (
            <HeartStraight
              weight='fill'
              className='text-purple text-xl cursor-pointer'
            />
          )}

          {!post.isFavorite && (
            <HeartStraight
              weight='regular'
              className='text-purple text-xl cursor-pointer'
            />
          )}
        </div>
      </div>

      <div className='space-y-2 mt-2 lg:mt-5'>
        <h3 className='text-lg lg:text-2xl text-gray-dark'>{post.title}</h3>
        <p className='text-sm lg:text-lg'>{post.resume}</p>
      </div>
    </div>
  )
}
