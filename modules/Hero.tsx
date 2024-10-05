import { Link, Caption, Display, Kbd, Text } from "@/components/ui/typography"
import Button from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container flex flex-col justify-between py-4 lg:py-8 mx-auto">
      <Display className="text-3xl md:text-4xl text-center">
        <span className="text-primary">Job Board</span> for Developers
      </Display>
      <Text className="mx-auto mb-8 mt-6 max-w-2xl" size="lg" align="center">
        A job board for developers to find their dream job. Get started by creating an account or explore the features.
      </Text>

      <div className="flex justify-center gap-3">
        <Link href="/dashboard" className="btn btn-primary" passHref legacyBehavior>
          <Button.Root>
            <Button.Label>Get Started</Button.Label>
          </Button.Root>
        </Link>
      </div>
    </section>
  )
}
