import Link from "next/link"

import { getSignInUrl, getSignUpUrl, withAuth, signOut } from "@workos-inc/authkit-nextjs"

import Button from "@/components/ui/button"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default async function Header() {
  const { user } = await withAuth()
  const signInUrl = await getSignInUrl()
  const signUpUrl = await getSignUpUrl()

  return (
    <header className="group feedback-bg fixed inset-x-0 z-10 border-b bg-white/50 backdrop-blur-3xl lg:relative lg:border-transparent dark:bg-gray-925/50">
      <div className="container flex justify-between py-4 lg:py-8">
        <div className="flex items-center gap-8">
          <div className="flex w-full items-center justify-between lg:w-fit">
            <a href="/" aria-label="Go home">
              Job Board
            </a>
          </div>
        </div>

        <div className="gap-4 flex">
          {!user && (
            <Link href={signInUrl} passHref legacyBehavior>
              <Button.Root size="xs" intent="gray" variant="outlined">
                <Button.Label>Login</Button.Label>
              </Button.Root>
            </Link>
          )}

          {!user && (
            <Link href={signUpUrl} passHref legacyBehavior>
              <Button.Root size="xs" intent="neutral">
                <Button.Label>Register</Button.Label>
              </Button.Root>
            </Link>
          )}

          {user && (
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <Button.Root size="xs" intent="neutral">
                <Button.Label> Logout, {user.firstName}</Button.Label>
              </Button.Root>
            </form>
          )}

          <Link href={"/organizations"} passHref legacyBehavior>
            <Button.Root size="xs" intent="primary">
              <Button.Label>Post a job</Button.Label>
            </Button.Root>
          </Link>

          <ThemeSwitcher size="xs" />
        </div>
      </div>
    </header>
  )
}
