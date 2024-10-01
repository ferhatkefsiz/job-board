import Link from "next/link"

import { getSignInUrl, getSignUpUrl, withAuth, signOut } from "@workos-inc/authkit-nextjs"

export default async function Header() {
  const { user } = await withAuth()
  const signInUrl = await getSignInUrl()
  const signUpUrl = await getSignUpUrl()

  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4" href={signInUrl}>
              Login
            </Link>
          )}

          {!user && (
            <Link className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4" href={signUpUrl}>
              Register
            </Link>
          )}

          {user && (
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button type="submit" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4">
                Logout, {user.firstName}
              </button>
            </form>
          )}

          <Link className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-blue-600 text-white" href="/organizations">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  )
}
