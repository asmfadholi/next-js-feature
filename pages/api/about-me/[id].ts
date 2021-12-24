// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string;
    title: string;
    id: string | string[];
}

const aboutMeDetailResponse = {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, query: { id }, } = req

  setTimeout(() => {
    switch (method) {
      case 'GET':
        res.status(200).json({ ...aboutMeDetailResponse, title: `About Me Page ${id}`, id })
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }, 1000);
}
