import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
        <Link className="" href="/">
        <Image src="/arrow-left.svg" alt="back arrow" width={24} height={24}></Image>
        </Link>
        title color
        <button className="bg-buttonBlue"> add task </button>
    </div>
  );
}