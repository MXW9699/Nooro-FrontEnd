import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  const res = await fetch(`http://localhost:4000/tasks/${taskId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  const body = await request.json();
  const res = await fetch(`http://localhost:4000/tasks/${taskId}`, {
    cache: "no-store",
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  const res = await fetch(`http://localhost:4000/tasks/${taskId}`, {
    cache: "no-store",
    method: "DELETE",
  });
  const data = await res.json();

  return NextResponse.json(data);
}
