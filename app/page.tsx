import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <Link href={"/nothing"} className="font-sanspace text-9xl tracking-[-0.5rem]">NOTHING</Link>
    </div>
  );
}
