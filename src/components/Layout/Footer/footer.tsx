import LinkNav from "@/components/Link/link"

const Footer = () => {
  return (
    <footer className="text-white mt-8 flex flex-col gap-4 bg-zinc-900 pt-6">
      <div className="ml-10">
        <h2 className="text-2xl font-bold">WF DETAILS</h2>
        <div className="w-16 h-0.5 bg-blue-600 mt-2  "/>
        <div className="mt-4 text-pretty text-gray-300 leading-[-101%] w-3/4">
          En WF Details, nos especializamos en la venta de productos de limpieza y cuidado personal, profesionales y de fábrica.
          <br/>
          También somos un lavado de autos profesional, con productos de alta calidad y precios accesibles.
        </div>
        <div className="w-3/4 h-0.5 bg-blue-600 my-6"/>
        <nav className="flex flex-col gap-3">
          <LinkNav href="/" className="text-gray-300 hover:text-white transition-colors w-fit">
            Inicio
          </LinkNav>
          <LinkNav href="/" className="text-gray-300 hover:text-white transition-colors w-fit">
            Linea de productos
          </LinkNav>
          <LinkNav href="/" className="text-gray-300 hover:text-white transition-colors w-fit">
            Contactos
          </LinkNav>
        </nav>
      </div>
      <div className="bg-zinc-950 mt-8 p-6 text-sm text-gray-400 text-center w-full">
          <p>Copyright © {new Date().getFullYear()} WF Details. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer