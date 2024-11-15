import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-2 items-center py-20">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-600 hover:underline underline-offset-2" href="/">Return Home</Link>
    </div>
  )
}