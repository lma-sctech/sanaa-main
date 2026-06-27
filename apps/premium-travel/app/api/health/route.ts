export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    app: "premium-travel",
    preview: true,
  });
}
