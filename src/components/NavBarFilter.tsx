export function NavBarFilter() {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-4">
        <li className="px-8 py-2 text-white bg-[#2DC0B6] rounded-full">All</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">Fantasy</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">NFT</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">Anime</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">Games</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">Abstra</li>
        <li className="px-8 py-2 text-gray-800 hover:text-white hover:bg-[#2DC0B6] hover:rounded-full">Technology</li>
      </ul>
    </div>
  )
}