import Link from "next/link";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Task } from "../types";

export function TaskCard({ task, getTasks }: { task: Task; getTasks: () => void}) {
  const [completed, setCompleted] = useState(task.completed);

  async function toggle(e: MouseEvent<HTMLInputElement>) {
    e.stopPropagation();
    await fetch("/api/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task.id,
        completed: !completed,
      }),
    });
    setCompleted(!completed);
    getTasks();
  }

  async function deleteTask(e: MouseEvent<HTMLImageElement>) {
    e.stopPropagation();
    e.preventDefault();
    const proceed = confirm(
      `Are you sure you want to delete task "${task.title}"`
    );
    if (proceed) {
      await fetch("/api/tasks", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: task.id,
        }),
      });
      getTasks();
    }
  }

  return (
    <Link className='m-1 flex justify-between max-w-[736] h-[72] items-center bg-secondary'key={task.id} href={`/editTask/${task.id}`}>
      <div className="flex">
      <input
      className="m-2"
        type="checkbox"
        readOnly
        checked={completed}
        onClick={toggle}
      ></input>
      <div className={`overflow-ellipsis { completed ? "line-through text-gray-500" : "text-gray-200"}`}>
      {task.title}</div>
      </div>
      <Image
        src="/trash.svg"
        alt="trash"
        width={24}
        height={24}
        onClick={deleteTask}
      />
    </Link>
  );
}
