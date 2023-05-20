import { create } from 'zustand'
import { PostType, initialPosts } from '../data/posts'
import { persist } from 'zustand/middleware'
import { original, produce } from 'immer'

type usePostsType = {
  search: string | null | undefined
  posts: PostType[]
  changeSeach: (search: string | null | undefined) => void
  changeFavorite: (post: PostType) => void
}

export const usePosts = create(
  persist<usePostsType>(
    (set) => ({
      search: 'a',
      posts: [...initialPosts],
      changeFavorite: (post: PostType) =>
        set(
          produce((state: usePostsType) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const index = original(state.posts)!.findIndex(
              (e) => e.id === post.id
            )

            if (index > -1) {
              state.posts[index].isFavorite = !state.posts[index].isFavorite
            }
          })
        ),
      changeSeach: (search) => set(() => ({ search: search })),
    }),
    { name: 'POSTS_KEY' }
  )
)
