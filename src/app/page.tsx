import Image from "next/image";
import Link from "next/link";
import { TaskView } from "./Components/tasksView";


export default function Home() {

  return (
    <div className="flex-row justify-center items-center">
      <Link className="w-[736] h-[52] flex justify-center items-center bg-buttonBlue" href="/createTask">
          Create Task
          <Image
            aria-hidden
            src="/plus.svg"
            alt="plus icon"
            width={16}
            height={16}
          />
      </Link>
      <TaskView/>
    </div>
  );
}
