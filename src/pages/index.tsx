import { NavBarFilter } from "@/components/NavBarFilter";
import { InputSearch } from "@/components/InputSearch";
import { CardPost } from "@/components/CardPost";
import { Header } from "@/components/Header";
import Head from "next/head";
import { Button } from "@/components/Button";
import { Banner } from "@/components/Banner";

export default function Home() {
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
          <Button link="/" value="Contato" />
        </div>
        <InputSearch />
        <NavBarFilter />
        <Banner />
        <div className="grid grid-cols-3 gap-8 mt-12">
          <CardPost
            title="Como desenvolver um Blog em Next.js"
            url="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CardPost
            title="Next.js no frontend"
            url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          />
          <CardPost
            title="Blog com Next.js e Tailwind"
            url="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          />
          <CardPost
            title="Como desenvolver um Blog em Next.js"
            url="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
          />
          <CardPost
            title="Como desenvolver um Blog em Next.js"
            url="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
          <CardPost
            title="Como desenvolver um Blog em Next.js"
            url="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
          />
        </div>
      </div>
    </>
  );
}
