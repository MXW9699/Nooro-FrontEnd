"use client";
import { ColorChoices } from "@/app/Components/colorChoices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Task } from "@/app/types";

export default function Page() {
  const { taskId } = useParams();
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [saved, setSaved] = useState(true);

  async function getTask() {
    const data = await fetch(`/api/tasks/${taskId}`);
    const result: { data: { task: Task } } = await data.json();
    setTitle(result.data.task.title);
    setColor(result.data.task.color);
  }

  useEffect(() => {
    getTask();
  }, []);

  async function onSubmit() {
    await fetch(`/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: taskId,
        title,
        color,
      }),
    });
    setSaved(true);
  }

  return (
    <div className="flex-col justify-center">
      <Link className="" href="/">
        <Image src="/arrow-left.svg" alt="back arrow" width={24} height={24} />
      </Link>
      <div className="flex flex-col">
        Title
        <input
          className="text-black"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSaved(false);
          }}
          maxLength={191}
        />
      </div>
      <div className="flex flex-col">
        Color
        <div className="flex">
              <ColorChoices
                  setColor={setColor}
                  setSaved={setSaved}
              />
        </div>
      </div>
      {saved ? (
        <button className="bg-buttonBlue w-full flex justify-center items-center">
          Saved <Image src="/vector.svg" alt="vector" width={16} height={16} />
        </button>
      ) : (
        <button className="bg-buttonBlue w-full" onClick={onSubmit}>
          Save Task
        </button>
      )}
      {color}
    </div>
  );
}
