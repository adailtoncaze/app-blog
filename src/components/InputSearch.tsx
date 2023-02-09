import { HiSearch } from "react-icons/hi";
export function InputSearch() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[730px] mb-8 drop-shadow-md">
        <i className="absolute text-gray-400 top-5 left-4">
          {" "}
          <HiSearch />
        </i>
        <input
          type="text"
          className="w-full px-12 bg-white rounded-full h-14 focus:outline-none hover:cursor-pointer"
          name=""
        />
      </div>
    </div>
  );
}
