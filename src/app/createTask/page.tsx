"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ColorChoices } from "../Components/colorChoices";
import { useRouter } from "next/navigation";

export default function Page() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState('red');
  const router = useRouter();

  async function onSubmit() {
    await fetch("api/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        color,
      }),
    });
    router.push("/");
  }

  return (
    <div className="flex-col justify-center">
      <Link className="" href="/">
        <Image
          src="/arrow-left.svg"
          alt="back arrow"
          width={24}
          height={24}
        ></Image>
      </Link>
      <div className="p-0 flex flex-col">
        Title
        <input
          className="text-black"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          maxLength={191}
        />
        <div className="p-0 flex flex-col"></div>
        Color
        <ColorChoices setColor={setColor} />
      </div>
      <button className="p-0 flex w-full justify-center items-center bg-buttonBlue" onClick={onSubmit}>
        Add Task <Image src="/plus.svg" alt="plus" width={16} height={16} />
      </button>
    </div>
  );
}
