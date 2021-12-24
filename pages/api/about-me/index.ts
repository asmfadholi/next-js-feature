// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = number[]

const aboutMeResponse = [1, 2, 3, 4, 5, 6, 7, 8]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req

  setTimeout(() => {
    switch (method) {
      case 'GET':
        res.status(200).json(aboutMeResponse)
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }, 1000);
}
