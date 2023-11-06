
import { NextRequest, NextResponse } from "next/server";
import Server from 'next/server';

/**
 * @swagger
 * /api:
 *   get:
 *     summary: API Health Check!
 *     description: API Health Check!
 *     responses:
 *       200:
 *         description: Up and Running!
 */
export async function GET() {
  const timestamp = new Date().toISOString();
  
  return NextResponse.json({
    message: "API is running smoothly",
    // timestamp: timestamp,
    status: 200
  }, { status: 200 });
}


// type ResponseData = {
//   message: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({
//     message: "API is running smoothly",
//   })
// }