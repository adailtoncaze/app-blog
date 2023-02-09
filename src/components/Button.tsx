import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export function Button() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center px-9 py-6 mb-2 text-lg text-white bg-[#2DC0B6] rounded-full h-9 hover:bg-[#2ab3a9] sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
    >
      <HiArrowSmLeft />
      Voltar
    </Link>
  );
}
