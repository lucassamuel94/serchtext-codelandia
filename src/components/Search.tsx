import { useEffect, useRef } from 'react'
import { usePosts } from '../store/posts'

import { MagnifyingGlass } from '@phosphor-icons/react'

export function Search() {
  const { changeSeach } = usePosts()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  return (
    <div className='container relative h-max'>
      <div className='absolute left-7 lg:left-5 top-1/2 -translate-y-1/2'>
        <MagnifyingGlass className='text-white text-xl lg:text-3xl' />
      </div>

      <input
        ref={searchRef}
        type='text'
        className='w-full h-10 lg:h-16 rounded-md bg-white/20 pl-9 lg:pl-16 placeholder:text-white/50 text-white font-inter font-medium text-sm lg:text-lg'
        placeholder='Pesquisar no blog'
        onChange={() => changeSeach(searchRef.current?.value)}
      />
    </div>
  )
}
