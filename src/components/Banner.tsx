import Image from "next/image";
export function Banner() {
  return (
    <div className="flex items-center justify-center w-full h-full gap-8 mt-12 mb-12">
      <div className="flex flex-1 h-[334px] relative rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1672309046475-4cce2039f342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Image post test"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-1 h-[334px] flex-col gap-6">
        <h1 className="font-bold text-[40px] text-gray-700">
          Como desenvolver um Blog com Next.js
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          dolorem minima quo mollitia soluta exercitationem optio sed,
          reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
          assumenda aliquid quo mollitia soluta exercitationem optio sed,
          reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
          assumenda ali nostrum porro!, ipsam, voluptatibus assumenda aliquid
          nostrum porro!
        </p>
        <div>
          <p className="font-bold text-[#2DC0B6]">Adailton Cazé</p>
          <p className="text-sm text-gray-500">31 de janeiro de 2023</p>
        </div>
      </div>
    </div>
  );
}
