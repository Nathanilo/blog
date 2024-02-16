import { prisma } from "@/utils/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await prisma.post.findUnique({ where: { id: params.id } });
  return Response.json(res);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const res = await prisma.post.update({
    where: { id: params.id },
    data,
  });

  return Response.json(res);
}
