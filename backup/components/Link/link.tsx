import Link from "next/link"

const LinkNav = ({ href, children, className }: { href: string, children?: React.ReactNode, className?: string }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default LinkNav