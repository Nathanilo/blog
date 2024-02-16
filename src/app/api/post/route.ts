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
const baseUrl = window.location.protocol + "//" + window.location.host;
const apiUrl = `${baseUrl}/`;
  redirect(apiUrl);
}

export async function DELETE(request: Request) {
  const res = await request.json();
  await prisma.post.delete({
    where: { id: res.id },
  });
  
}
