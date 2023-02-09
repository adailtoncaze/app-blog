import Image from "next/image";
import Link from "next/link";

interface Props {
  url: string;
  title: string;
}

export function CardPost({url, title}: Props) {
  return (
    <Link
      href="/post"
      className=" bg-white hover:drop-shadow-2xl hover:-translate-y-2 hover:transition duration-700 w-full max-w-[376px] h-full flex flex-col items-center justify-between gap-4 shadow-xl border-solid border-gray-100 rounded-2xl overflow-hidden"
    >
      <div className="flex w-full h-[234px] relative">
        <Image
          src={url}
          alt="Image post test"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 w-full gap-3 pb-4 pl-4 pr-4">
        <h1 className="text-xl font-bold text-gray-700">
          {title}
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
