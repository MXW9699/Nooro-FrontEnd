import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:4000/tasks", {
    cache: "no-store",
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch("http://localhost:4000/tasks", {
    cache: "no-store",
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const body = await request.json();
  console.log(body);
  const res = await fetch(`http://localhost:4000/tasks/${body.id}`, {
    cache: "no-store",
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const res = await fetch(`http://localhost:4000/tasks/${body.id}`, {
    cache: "no-store",
    method: "DELETE",
  });
  const data = await res.json();

  return NextResponse.json(data);
}
