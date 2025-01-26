import Image from "next/image";
import Link from "next/link";

export default async function page({params}: {params: Promise<{taskId: string }>}) {
  const taskId = (await params).taskId

  return (
    <div className="flex justify-center">
      <Link className="" href="/">
        <Image src="/arrow-left.svg" alt="back arrow" width={24} height={24} />
      </Link>
      <div>{taskId}</div> {/* Display the taskId */}
      <button className="bg-buttonBlue">Add Task</button>
    </div>
  );
}
