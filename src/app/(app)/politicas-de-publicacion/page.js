// pages/politica-publicacion.js

import Title from "@/components/Base/Title";
import Accordion from "@/components/Base/Accordion";

export const metadata = {
    title: "Política de Publicación | Clasificados Radio América",
    description:
        "Conoce las políticas de publicación de Clasificados Radio América: conducta prohibida, anuncios restringidos, buenas prácticas y más.",
    keywords: [
        "política de publicación",
        "anuncios prohibidos",
        "conducta",
        "buenas prácticas",
        "restricciones",
    ],
    openGraph: {
        title: "Política de Publicación | Clasificados Radio América",
        description:
            "Consulta las normas y restricciones para publicar en Clasificados Radio América. Aseguramos una comunidad segura y confiable.",
        url: "https://radioamerica.com.ve/politica-publicacion",
        siteName: "Clasificados Radio América",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Publicación | Clasificados Radio América",
        description:
            "Infórmate sobre las políticas de publicación de Clasificados Radio América y evita contenido prohibido.",
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function PoliticaPublicacion() {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-6 flex flex-col lg:flex-row gap-6">

            {/* Tabla de contenido sticky */}
            <nav className="hidden lg:block w-72 sticky top-12 self-start">
                <h2 className="font-bold mb-2">Contenido</h2>
                <ol className="list-decimal list-inside space-y-1 text-gray-800">
                    {/* Primer ítem sin numeración */}
                    <li className="list-none">
                        <a href="#introduccion" className="hover:text-red-600">Introducción</a>
                    </li>

                    {/* Segunda lista con numeración empezando en 1 */}
                    <ol className="list-decimal list-inside space-y-1" start="1">
                        <li><a href="#conducta-prohibida" className="hover:text-red-600">Política de conducta prohibida</a></li>
                        <li><a href="#anuncios-prohibidos" className="hover:text-red-600">Política de anuncios prohibidos</a></li>
                        <li><a href="#buenas-practicas" className="hover:text-red-600">Buenas prácticas de usuario</a></li>
                        <li><a href="#lo-que-hacemos" className="hover:text-red-600">Lo que hacemos</a></li>
                        <li><a href="#restricciones-generales" className="hover:text-red-600">Restricciones generales</a></li>
                        <li><a href="#restricciones-especificas" className="hover:text-red-600">Restricciones específicas</a></li>
                    </ol>
                </ol>
            </nav>

            {/* Contenido principal */}
            <div className="flex-1">
                <Title className="mb-5" as="h1" title="Política de Publicación" align="left" />

                <Accordion title="Introducción" id="introduccion">
                    <p>
                        CLASIFICADOS RADIO AMERICA, trata de garantizar que toda la comunidad que accede de forma directa o indirecta a su servicio se comporte de la mejor manera, evitando actividades fraudulentas, que atentes contra la moral y las buenas costumbres.
                    </p>
                    <p>
                        En ese sentido nuestra acción se dirige a subconjuntos principales de políticas:
                    </p>
                    <ul className="list-disc list-inside">
                        <li> <strong>Política de Conducta Prohibida:</strong> asegurar que todos se comporten de manera correcta.</li>
                        <li> <strong>Política de Anuncios Prohibidos:</strong> define los artículos y servicios permitidos en la plataforma.</li>
                    </ul>
                </Accordion>

                <Accordion title="1. Política de Conducta Prohibida" id="conducta-prohibida">
                    <p>La Política de comportamientos no permitidos describe los tipos de comportamiento que no están permitidos en la plataforma. Aquí tienes un resumen de algunas de las principales conductas prohibidas:</p>
                    <ul className="list-disc list-inside">
                        <li>Actividad fraudulenta o ilegal</li>
                        <li>Política de Lenguaje Ofensivo y de Odio</li>
                        <li>Conducta adulta u obscena</li>
                        <li>Spam</li>
                        <li>Uso indebido de funciones y promociones</li>
                        <li>Contenido de perfil prohibido</li>
                        <li>Otras conductas prohibidas</li>
                    </ul>
                </Accordion>

                <Accordion title="2. Política de Anuncios Prohibidos" id="anuncios-prohibidos">
                    <p>La Política de contenidos no permitidos describe los tipos de productos y servicios que no están permitidos en la plataforma. A continuación, un resumen de algunos de los principales anuncios prohibidos:</p>
                    <ul className="list-disc list-inside">
                        <li>Anuncios duplicados</li>
                        <li>Productos prohibidos</li>
                        <li>Productos insalubres</li>
                        <li>Productos virtuales</li>
                        <li>Falsificaciones y Propiedad Intelectual</li>
                        <li>Bienes de consumo</li>
                        <li>Medicamentos y Productos Médicos</li>
                        <li>Listados Incongruentes</li>
                        <li>Animales y productos de origen animal</li>
                        <li>Buscar/Comprar</li>
                        <li>Imágenes</li>
                        <li>Enlaces y Publicidad</li>
                        <li>Armas y Productos Peligrosos</li>
                        <li>Política de Contenido Adulto u Obsceno</li>
                        <li>Política de Servicios Prohibidos</li>
                        <li>Material ofensivo</li>
                    </ul>
                </Accordion>

                <Accordion title="3. Buenas Prácticas de Usuario" id="buenas-practicas">
                    <h3 className="font-semibold">Interactúa con educación y respeto.</h3>
                    <p>
                        Aquí nos encantan los debates y discusiones sanos, pero mantengámoslos con respeto y cortesía. Todo el mundo es bienvenido. Recuerda que cada uno aporta experiencias, intereses y conocimientos diferentes. Por favor, abstente de decir palabrotas, incitar al odio o atacar a otros cuando interactúes con otros usuarios o con los agentes de soporte de <strong>RADIO AMERICA</strong>. No es apropiado dirigirse a personas con quejas sobre artículos no comprados ni presionar a vendedores o compradores para que realicen transacciones. Creemos un entorno positivo e inclusivo para todos.
                    </p>
                    <br />
                    <h3 className="font-semibold">La comunicación es clave.</h3>
                    <p>
                        Sabemos que a veces las cosas no salen según lo previsto, y eso está totalmente bien. Si cambias de opinión sobre una oferta, no te estreses: házselo saber a tiempo al vendedor de forma educada y respetuosa. De ese modo, podrá trabajar con otros compradores para encontrar la oferta perfecta para su artículo o servicio.
                    </p>

                    <p>
                        Si ya has acordado vender tu artículo a otra persona, asegúrate de marcarlo como reservado para avisar a los posibles compradores, de modo que puedan continuar su búsqueda. Si se te hace tarde para reunirte con alguien, mantenle informado para que sepa lo que ocurre. Recuerda que la comunicación es la clave, y siempre es mejor mantener a la otra persona informada.
                    </p>

                    <br />
                    <h3 className="font-semibold">Mantén tus anuncios actualizados</h3>
                    <p>
                        Es importante que mantengas tus listados actualizados en la medida de lo posible. Sé honesto y preciso en las descripciones y precios de los artículos, y asegúrate de añadir pruebas de autenticidad siempre que sea posible.
                    </p>
                </Accordion>

                <Accordion title="4. Lo que hacemos" id="lo-que-hacemos">
                    <p>
                        Nuestro equipo trabaja día y noche para garantizar la seguridad de nuestra plataforma, sus miembros y el cumplimiento de nuestras políticas.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Eliminamos publicaciones y tomamos medidas contra las cuentas que infringen nuestras políticas.</li>
                        <li>Colaboramos con las fuerzas de seguridad para apoyar sus investigaciones.</li>
                        <li>Actualizamos continuamente las funciones de nuestros productos y aplicamos la seguridad por diseño para crear una experiencia de mercado más fiable y segura.</li>
                    </ul>

                </Accordion>

                <Accordion title="5. Restricciones generales" id="restricciones-generales">

                    <p>
                        Quedan exceptuados de publicación todos los anuncios de índole sexual, referidos a servicios de acompañantes, juguetes sexuales, locales comerciales de ambiente o que oferten servicios reñidos con la moral y las buenas costumbres, o cualquier otra manifestación que atente contra la ética de la sociedad.
                    </p>
                    <br />
                    <p>
                        No se aceptarán publicaciones que denigren de la condición humana o emiten afirmaciones que lesionen a personas, organizaciones o empresas, que incluyan lenguaje inadecuado o acusaciones, personales o legales, contra cualquier ciudadano, organización o empresa. Los avisos, comunicados, cartas abiertas o cualquier escrito dirigido al público serán objeto de revisión.
                    </p>
                    <br />
                    <p>
                        No se aceptarán fotografías con poses sugestivas de índole sexual o que constituyen un agravio para personas naturales o jurídicas.
                    </p>
                </Accordion>

                <Accordion title="6. Restricciones Específicas" id="restricciones-especificas">
                    <p>
                        A continuación, se encuentra el listado de productos y servicios cuya publicación, compra o venta están prohibidas, por tanto, no está permitido la publicación de productos, bienes o servicios para la venta que contravengan nuestras políticas internas o cualquier decreto, ley o resolución vigente presente o futura.
                    </p>
                    <br />
                    <p>
                        De esta manera, los anunciantes son responsables de la legalidad de los bienes y servicios que ofrecen y estos deben cumplir obligaciones regulatorias y lo establecido en los términos y condiciones de nuestro portal.
                    </p>
                    <br />
                    <h3 className="font-semibold mb-2">Artículos que no pueden ser publicados:</h3>
                    <ul className="list-decimal list-inside">
                        <li>Armas de fuego, municiones, material explosivo y accesorios relacionados.</li>
                        <li>Celulares y servicios ilegales, equipos clonados o alterados.</li>
                        <li>Estupefacientes, sustancias controladas y productos químicos prohibidos.</li>
                        <li>Flora y fauna en peligro de extinción, animales para pelea y sus accesorios.</li>
                        <li>Fuegos artificiales y pirotecnia.</li>
                        <li>Huesos, órganos y residuos humanos.</li>
                        <li>Tabaco y productos relacionados prohibidos por normativa vigente.</li>
                        <li>Medicamentos y productos de salud prohibidos.</li>
                        <li>Venta de divisas o servicios financieros ilegales.</li>
                        <li>Imágenes que violen derechos de autor o inciten violencia/discriminación.</li>
                        <li>Decodificadores, antenas y señales ilegales.</li>
                        <li>Documentos legales y personales.</li>
                        <li>Objetos de patrimonio histórico, cultural o arqueológico.</li>
                        <li>Loterías o productos de azar ilegales.</li>
                        <li>Productos que requieren autorización estatal.</li>
                        <li>Vehículos sin documentación o infractores de leyes vigentes.</li>
                        <li>Prótesis, equipos médicos y relacionados prohibidos.</li>
                        <li>Entradas para espectáculos no autorizados.</li>
                        <li>Videojuegos y juguetes violentos.</li>
                        <li>Bienes y servicios promocionados por el Estado que infrinjan leyes.</li>
                    </ul>
                    <br />
                    <p>
                        En general, cualquier tipo de contenido que lenguaje soez, ataques personales o expresiones que pretendan denigrar la reputación de otra persona o entidad y/o producto ofertado en este portal
                    </p>
                    <br />
                    <p className="font-semibold">
                        Según lo antes descrito, nos reservamos el derecho de suspender a todas aquellas publicaciones que no respeten nuestras Políticas de Publicación o cualquier ley vigente. Esto puede llevar a la inhabilitación de la cuenta.
                    </p>
                </Accordion>

            </div>
        </div>
    );
}
