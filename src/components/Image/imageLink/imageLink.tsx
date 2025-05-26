import LinkNav from "@/components/Link/link" 
import Image from "next/image"

const ImageLink = ({ href,src, alt, className, children }: { href: string, src: string, alt: string, className: string, children?: React.ReactNode }) => {
  return (
    <>
        <Image priority fill={true} src={src} className={className} alt={alt}/>
        <LinkNav href={href} className="absolute top-0 left-0 w-full h-full opacity-0 z-10">{children}</LinkNav>
    </>
  )
}

export default ImageLink