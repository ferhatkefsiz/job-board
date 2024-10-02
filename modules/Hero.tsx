import { Lock, Plus } from "lucide-react"
import { Link, Caption, Display, Kbd, Text } from "@/components/ui/typography"
import Button from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="pt-32 lg:pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <Display className="text-4xl md:text-5xl text-center">Track Your Faceit Stats Like a Pro</Display>
        <Text className="mx-auto mb-8 mt-6 max-w-2xl" size="lg" align="center">
          Unlock detailed Faceit stats, track your progress, and discover pro-level insights. Everything you need to
          boost your gameplay is just a click away.
        </Text>
        <div className="flex justify-center gap-3">
          <Link href="/dashboard" className="btn btn-primary" passHref legacyBehavior>
            <Button.Root>
              <Button.Label>Get Started</Button.Label>
            </Button.Root>
          </Link>

          <Button.Root variant="outlined" intent="gray" href="/examples/forms/register1">
            <Button.Label>Explore Features</Button.Label>
          </Button.Root>
        </div>
        <Caption className="mb-8 mt-6" align="center">
          Or Press <Kbd>G</Kbd> anytime to get started
        </Caption>

        <div
          data-rounded="2xlarge"
          className="mx-auto mb-12 mt-12 max-w-5xl rounded-[--card-radius] p-px shadow-xl shadow-gray-950/5 sm:mb-16 sm:mt-20 md:mb-20 dark:border-transparent dark:shadow-gray-950/50"
        >
          <div className="space-y-1 rounded-[calc(var(--card-radius)-1px)] border bg-[--ui-bg] p-1 backdrop-blur-2xl">
            <div className="flex items-center justify-between px-3">
              <div className="flex gap-1.5">
                <div
                  aria-hidden
                  className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"
                />
                <div
                  aria-hidden
                  className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"
                />
                <div
                  aria-hidden
                  className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"
                />
              </div>
              <div
                data-rounded="large"
                className="relative flex h-6 w-32 items-center justify-center gap-4 rounded-[--card-radius] bg-gray-200/50 px-3 text-xs text-[--caption-text-color] sm:w-56 dark:bg-[--ui-bg]"
              >
                <Lock className="absolute left-3 size-2.5" />
                https://profaceit.com
              </div>
              <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                <Plus aria-hidden className="m-auto size-4 text-[--caption-text-color]" />
              </div>
            </div>
            <img
              className="aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:hidden"
              src="https://ui.tailus.io/images/showcase/card.png"
              alt=""
            />

            <img
              className="hidden aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:block dark:border-white/5"
              src="https://ui.tailus.io/images/showcase/card-layout-dark.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
