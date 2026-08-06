import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <Link
        href={"/nothing"}
        className="flex flex-col font-sanspace hover:font-sansafe text-9xl tracking-[-0.5rem]"
      >
        HELLO <span className="-mt-15">WORLD</span>
      </Link>
    </div>
  );
}
