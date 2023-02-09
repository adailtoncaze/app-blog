import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import Image from "next/image";
import Head from "next/head";
export default function Post() {
  return (
    <>
      <Head>
        <title>B. LIVE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full max-w-[1200px] flex flex-col mx-auto pb-12">
        <div className="flex items-center justify-center">
          <Header />
          <Button />
        </div>

        <div className="flex flex-col w-full h-full mt-8">
          <div className="flex w-fuul h-[392px] relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Image post test"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex mx-auto flex-col w-full max-w-[960px] mt-8">
          <h1 className="font-bold text-[40px] text-gray-700">
            Como desenvolver um Blog com Next.js
          </h1>
          <div>
            <p className="font-bold text-[#2DC0B6]">Adailton Cazé</p>
            <p className="text-sm text-gray-500">31 de janeiro de 2023</p>
          </div>
          <p className="mt-8 leading-relaxed text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolorem minima quo mollitia soluta exercitationem optio sed,
            reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
            assumenda aliquid quo mollitia soluta exercitationem optio sed,
            reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
            assumenda ali nostrum porro!, Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className="mt-8 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur facere quam, odit sunt numquam obcaecati maiores
            tempore commodi molestiae, animi officia praesentium aperiam
            molestias minus unde! Eum placeat impedit consequatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Autem minus
            necessitatibus excepturi optio nam maiores natus. Natus iusto
            consequatur eveniet nihil. Tenetur, enim doloribus! Exercitationem
            ipsum odit incidunt animi at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque pariatur voluptas saepe voluptate quia
            doloribus aperiam repellendus, suscipit sequi totam? Culpa corporis
            quaerat, dolorem nisi neque velit sint laborum.
          </p>
          <p className="mt-8 leading-relaxed text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolorem minima quo mollitia soluta exercitationem optio sed,
            reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
            assumenda aliquid quo mollitia soluta exercitationem optio sed,
            reprehenderit tenetur velit nisi ea rerum dolor ipsam, voluptatibus
            assumenda ali nostrum porro!, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet maxime nulla impedit suscipit repellendus
            repellat? Repellat reprehenderit nisi consequuntur doloremque
            mollitia! Nobis cum soluta dolorum nesciunt dolore. Placeat,
            excepturi totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequuntur facere quam, odit sunt numquam obcaecati maiores
            tempore commodi molestiae, animi officia praesentium aperiam
            molestias minus unde! Eum placeat impedit consequatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}