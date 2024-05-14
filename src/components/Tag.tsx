import { Badge } from "@/components/ui/badge"

interface TagProps {
    children: string
}

export function Tag({ children }: TagProps) {
  return (
    <Badge variant="default" className="absolute top-3 right-3 p-3 rounded-full bg-neutral-50 text-neutral-900 hover:hidden">
        {children}
    </Badge>
  )
}
