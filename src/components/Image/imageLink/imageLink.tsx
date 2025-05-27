import LinkNav from "@/components/Link/link" 
import Image from "next/image"

const ImageLink = ({ href,src, alt, classNameimg, classNameLink, children }: { href: string, src: string, alt: string, classNameimg: string, classNameLink: string, children?: React.ReactNode }) => {
  return (
    <>
        <Image priority fill={true} src={src} className={classNameimg} alt={alt}/>
        <LinkNav href={href} className={`absolute z-30 ${classNameLink}`}>{children}</LinkNav>
    </>
  )
}

export default ImageLink