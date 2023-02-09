import Image from 'next/image'
export function Header() {
  return (
    <header className='flex items-center w-full mt-8 mb-8'>
      <Image 
        src='/logo.png'
        alt='Logo da My Blog'
        width={100}
        height={20}
      />
    </header>
  )
}