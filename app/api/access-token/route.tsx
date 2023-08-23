// app/my-api/route.js

// Or, it's slightly more efficient to use the `req`, `res` args if you're
// using another part of the SDK like `withApiAuthRequired` or `getSession`.
import { NextResponse } from "next/server";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

const GET = withApiAuthRequired(async function GET(req) {
  const res = new NextResponse();
  const { accessToken } = await getAccessToken(req, res);
  console.log(accessToken);
  return NextResponse.json({ token: accessToken });
});

export { GET };
