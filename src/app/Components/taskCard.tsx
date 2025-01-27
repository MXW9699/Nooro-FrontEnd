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
    <Link className='flex justify-between w-full'key={task.id} href={`/editTask/${task.id}`}>
      <div className="flex">
      <input
        type="checkbox"
        readOnly
        checked={completed}
        onClick={toggle}
      ></input>
      <p className={completed ? "line-through" : ""}>
      {task.title}</p>
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
