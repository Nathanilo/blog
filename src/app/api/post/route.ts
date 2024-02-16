import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const res = await prisma.post.findMany();
  return Response.json(res);
}

export async function POST(request: Request) {
  const res = await request.json();
  await prisma.post.create({
    data: { ...res, author: "anonymous" },
  });

  redirect("http://localhost:3000/");
}

export async function DELETE(request: Request) {
  const res = await request.json();
  await prisma.post.delete({
    where: { id: res.id },
  });
  
}
