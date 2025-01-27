"use client";
import { useEffect, useState } from "react";
import { TaskCard } from "./taskCard";
import { Task } from "../types";

export function TaskView() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);

  async function getTasks() {
    const data = await fetch("/api/tasks");
    const result: { data: { tasks: Task[]; completedCount: number } } = await data.json();
    setTasks(result.data.tasks);
    setCompletedCount(result.data.completedCount);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex-col justify-center">
      <span className="flex justify-between w-full">
        <div className="text-textBlue font-inter text-[14px] font-extrabold">
          Tasks <span> {tasks.length} </span>
        </div>
        <div className="text-textPurple font-inter text-[14px] font-extrabold">
          Completed{" "}
          <span>
            {" "}
            {tasks.length
              ? `${completedCount} of ${tasks.length}`
              : completedCount}
          </span>
        </div>
      </span>
      <div className="flex flex-col justify-center">
        {tasks.length ? (
          tasks.map((task) => {
            return <TaskCard key={task.id} task={task} getTasks={getTasks}/>;
          })
        ) : (
          <div>we do not have tasks</div>
        )}
      </div>
    </div>
  );
}
