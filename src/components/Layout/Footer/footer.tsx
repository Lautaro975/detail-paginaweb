import LinkNav from "@/components/Link/link"

const Footer = () => {
  return (
    <footer>
      <h2>WF DETAILS</h2>
      <div className="w-4 border-b-2 border-black"/>
      <p>En WF Details, nos especializamos en la venta de productos de limpieza y cuidado personal, profesionales y de fábrica.</p>
      <div>
        <LinkNav href="/" className="text-black">Inicio</LinkNav>
        <LinkNav href="/" className="text-black">Linea de productos</LinkNav>
        <LinkNav href="/" className="text-black">Contacto</LinkNav>
      </div>
    </footer>
  )
}

export default Footer