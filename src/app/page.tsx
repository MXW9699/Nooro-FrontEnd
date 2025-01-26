import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center" >
        <Link className="bg-buttonBlue" href="/createTask">
          <span className = "w-[736] h-[52] flex justify-center items-center">
          Create Task 
          <Image
            aria-hidden
            src="/plus.svg"
            alt="plus icon"
            width={16}
            height={16}
            />
            </span>
        </Link>

        <Link className="bg-buttonBlue" href="/editTask/task123">
          <span className = "w-[736] h-[52] flex justify-center items-center">
          Edit Task 
          <Image
            aria-hidden
            src="/plus.svg"
            alt="plus icon"
            width={16}
            height={16}
            />
            </span>
        </Link>
    </div>
  );
}
