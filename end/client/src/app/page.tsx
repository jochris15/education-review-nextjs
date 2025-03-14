import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-white border-2 border-black p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-10">
        <b className="text-4xl mb-5">NextJS Review</b>
        <hr className="border-black w-full" />
        <p className="text-xl mt-5 w-1/2 text-center">
          NextJS is a React framework for building server-side rendered (SSR), static,
          and hybrid web applications.
        </p>
        <button className="bg-blue-300 border-2 border-black p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-10">
          <Link href="/products" className="font-bold">
            Go to Products
          </Link>
        </button>
      </div>
    </>
  );
}
