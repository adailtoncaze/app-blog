import Link from "next/link";

interface Props {
  link: string;
  value: string;
  children?: React.ReactNode;
}

export function Button(props: Props) {
  return (
    <Link
      href={props.link}
      className="inline-flex items-center justify-center px-9 py-6 mb-2 text-lg text-white bg-[#2DC0B6] rounded-full h-9 hover:bg-[#2ab3a9] sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
    >
      {props.children}
      {props.value}
    </Link>
  );
}
