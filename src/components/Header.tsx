import { Search } from './Search'

export function Header() {
  return (
    <header className='h-[200px] lg:h-[250px] bg-linear flex flex-col justify-between py-12'>
      <div className='container flex items-center justify-between text-white text-lg lg:text-2xl'>
        <h1>Codelândia</h1>
        <p>blog</p>
      </div>

      <Search />
    </header>
  )
}
