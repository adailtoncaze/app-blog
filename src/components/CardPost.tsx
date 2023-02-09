import Image from "next/image";
import Link from "next/link";
export function CardPost() {
  return (
    <Link
      href="/post"
      className=" bg-white hover:drop-shadow-2xl hover:-translate-y-2 hover:transition duration-700 w-full max-w-[376px] h-full flex flex-col items-center justify-between gap-4 shadow-xl border-solid border-gray-100 rounded-2xl overflow-hidden"
    >
      <div className="flex w-full h-[234px] relative">
        <Image
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Image post test"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 w-full gap-3 pb-4 pl-4 pr-4">
        <h1 className="text-xl font-bold text-gray-700">
          Como desenvolver um Blog com Next.js
        </h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          dolorem minima quo mollitia soluta.
        </p>
        <div className="mt-10">
          <p className="text-sm font-bold text-[#2DC0B6] ">Adailton Cazé</p>
          <p className="text-xs text-gray-500">31 de janeiro de 2023</p>
        </div>
      </div>
    </Link>
  );
}
