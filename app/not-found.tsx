// app/not-found.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Deze pagina bestaat niet (meer).
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Ga terug naar home</Link>
      </Button>
    </div>
  )
}
