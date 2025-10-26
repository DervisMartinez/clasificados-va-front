// pages/politica-privacidad.js

import Title from "@/components/Base/Title";
import Accordion from "@/components/Base/Accordion";

export const metadata = {
    title: "Términos y condiciones | Clasificados Radio América",
    description:
        "Conoce cómo Clasificados Radio América trata tus datos personales: recolección, uso, seguridad, transferencias y derechos de los usuarios.",
    keywords: [
        "política de privacidad",
        "tratamiento de datos personales",
        "datos",
        "seguridad de información",
        "confidencialidad",
    ],
    openGraph: {
        title: "Términos y condiciones | Clasificados Radio América",
        description:
            "Infórmate sobre la recolección, uso y protección de datos personales en Clasificados Radio América.",
        url: "https://radioamerica.com.ve/politica-privacidad",
        siteName: "Clasificados Radio América",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Términos y condiciones | Clasificados Radio América",
        description:
            "Consulta la política de privacidad de Clasificados Radio América: datos recolectados, finalidad, uso y seguridad.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TycPage() {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-6 flex flex-col lg:flex-row gap-6">
            {/* Tabla de contenido sticky */}
            <nav className="hidden lg:block w-72 sticky top-12 self-start">
                <h2 className="font-bold mb-2">Contenido</h2>
                <ul className="list-inside list-decimal space-y-1 text-gray-800">
                    <li><a href="#informacion-sitio" className="hover:text-red-600">Información del sitio</a></li>
                    <li><a href="#responsable" className="hover:text-red-600">Responsable de tratamiento</a></li>
                    <li><a href="#recoleccion" className="hover:text-red-600">Recolección de información</a></li>
                    <li><a href="#finalidad" className="hover:text-red-600">Finalidad del tratamiento</a></li>
                    <li><a href="#uso" className="hover:text-red-600">Uso de la información</a></li>
                    <li><a href="#cesion" className="hover:text-red-600">Cesión y transferencia</a></li>
                    <li><a href="#seguridad" className="hover:text-red-600">Confidencialidad y seguridad</a></li>
                    <li><a href="#cambios" className="hover:text-red-600">Cambios en la estructura corporativa</a></li>
                    <li><a href="#menores" className="hover:text-red-600">Menores de edad</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <div className="flex-1">
                <Title
                    className="mb-5"
                    as="h1"
                    title="Términos y condiciones"
                    align="left"
                />

                <Accordion title="1. Información del Sitio" id="informacion-sitio">
                    <p>
                        <strong>1.1 </strong>
                        La presente Política de Privacidad (en adelante la “Política de Privacidad”) se aplica a la utilización de los datos personales del Usuario, conforme se describe a continuación, del Sitio Web publicado en la URL: <a className="underline text-red-600" target="_blank" href="https://radioamerica.com.ve/">https://radioamerica.com.ve/</a>  (en adelante, el “Sitio”),  que es una plataforma digital, diseñada para brindar soluciones de venta y comercialización de productos, servicios y avisos publicitarios, por tanto, cualquier Persona Natural o Jurídica que desee acceder a nuestro sistema, deberá aceptar los Términos y Condiciones descritos a continuación, por cuanto tiene un carácter obligatorio y vinculante, caso contrario, deberá abstenerse de usar nuestros servicios.
                        <br />
                        <br />
                        Por “datos” se entenderán todos aquellos hechos, conceptos, instrucciones o caracteres representados de una manera apropiada para que sean comunicados, transmitidos o procesados por seres humanos o por medios automáticos y a los cuales se les asigna o se les puede asignar un significado (de conformidad con el artículo 2 de la Ley Especial contra los Delitos Informáticos).
                    </p>
                    <br />
                    <p>
                        <strong>1.2 </strong>
                        El mero acceso al Sitio atribuye la condición de usuario de <strong>CLASIFICADOS RADIO AMERICA</strong> (en adelante el “Usuario” o los “Usuarios”) y expresa la aceptación plena y sin reservas de todas y cada una de las cláusulas de la Política de Privacidad en la versión publicada por <strong>CLASIFICADOS RADIO AMERICA</strong> en el momento mismo en que el Usuario acceda al Sitio o utilice su Servicio.
                        <br />
                        <br />
                        En consecuencia, la Política de Privacidad constituirá un acuerdo válido y obligatorio entre el Usuario y <strong>CLASIFICADOS RADIO AMERICA</strong> con relación a la privacidad. Asimismo, la utilización del Servicio expresa la aceptación plena y sin reservas del Usuario de los Términos y Condiciones de Utilización del Servicio (en adelante, los “Términos y Condiciones”) publicados por RADIO AMERICA, <a className="underline text-red-600" target="_blank" href="https://radioamerica.com.ve/politica-de-privacidad/">https://radioamerica.com.ve/politica-de-privacidad/</a>  que se complementan con la Política de Privacidad.
                    </p>
                    <br />
                    <p>
                        <strong>1.3 </strong>
                        El objeto de la Política de Privacidad es poner en conocimiento de los titulares de los Datos Personales, conforme se define a continuación, respecto de los cuales se está recabando información, los tratamientos específicos de sus datos, las finalidades de los tratamientos, los datos de contacto para ejercer los derechos que le asisten, los plazos de conservación de la información y las medidas de seguridad entre otras cosas.
                    </p>
                    <br />
                    <p><strong>1.4 </strong>Las disposiciones de la Política de Privacidad se aplicarán a todos los Usuarios de <strong>CLASIFICADOS RADIO AMERICA</strong>, haya estos ingresado sus Datos Personales o no. </p>
                    <br />
                    <p className="font-semibold">ANTES DE NAVEGAR Y/O UTILIZAR EL SITIO Y/O EL SERVICIO, POR FAVOR LEA ATENTAMENTE LA PRESENTE POLÍTICA DE PRIVACIDAD. SI EL USUARIO NO ESTÁ DE ACUERDO CON ESTA POLÍTICA DE PRIVACIDAD, DEBE ABSTENERSE DE UTILIZAR EL SITIO Y/O EL SERVICIO.</p>
                </Accordion>

                <Accordion title="2. Responsable de tratamiento de sus datos personales" id="responsable">
                    <p>
                        <strong>2.1 </strong> <strong>CLASIFICADOS RADIO AMERICA</strong> será la institución responsable del tratamiento de los Datos Personales que el Usuario facilite en el Sitio, o que se recopilen o procesen en el Sitio, por, para o mediante los Servicios, o en relación con ellos.
                        <br /><br />
                        En cualquier caso, si el titular de los Datos Personales es visitante del Sito o Usuario del mismo, cualesquiera recopilación, uso e información compartida en relación con sus Datos Personales quedarán sujetos a esta Política de Privacidad, la Política de Cookies   y sus actualizaciones las complementarían las cuales serían de igual manera informadas al Usuario mediante un aviso donde se informan que han sido modificadas y/o actualizadas.
                    </p>
                    <br />
                    <p><strong>2.2 </strong> Para <strong>CLASIFICADOS RADIO AMERICA</strong> la privacidad de los Datos Personales del Usuario es muy importante. En caso que el Usuario tenga alguna duda acerca de la Política de Privacidad, o sobre la utilización del Sitio o el Servicio, deberá ponerse en contacto con CLASIFICADOS RADIO AMERICA, en cualquier momento, enviando un correo electrónico a <span className="underline text-red-600">contacto@radioamerica.com.ve</span>.</p>
                </Accordion>

                <Accordion title="3. Recolección de Información de los Usuarios" id="recoleccion-informacion">
                    <p>
                        <strong>3.1 </strong>
                        CLASIFICADOS RADIO AMERICA trata los Datos Personales del Usuario únicamente con el consentimiento expreso que el Usuario le otorga con la aceptación de la presente Política de Privacidad. Asimismo, el Usuario acepta que CLASIFICADOS RADIO AMERICA pueda recolectar información suya utilizando cookies y tags, así como aquella información proporcionada por el Usuario a través de los formularios del Sitio al registrarse y/o al utilizar el Servicio. En caso que un Usuario del Sitio no desee aceptar estas cookies, podrá configurar su navegador para que le otorgue la opción de aceptar cada cookie y rechazar las que no desee.
                    </p>
                    <br />
                    <p>
                        <strong>3.2 </strong>
                        El Usuario da garantía que los datos aportados por él son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del suministro de datos falsos, incorrectos, y en general cualquier otro suministro de datos que viole la obligación acá descrita. En el caso de que los datos aportados pertenecieran a un tercero, El Usuario garantiza que ha informado a dicho tercero de los aspectos contenidos en este documento y obtenido su autorización para facilitar sus datos a CLASIFICADOS RADIO AMERICA para los fines señalados, y, de ser el caso, CLASIFICADOS RADIO AMERICA se reserva el derecho de solicitar en cualquier momento a El Usuario, la autorización de dicho tercero.
                    </p>
                    <br />
                    <p>
                        Detallamos a continuación toda la información que CLASIFICADOS RADIO AMERICA recolecta:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Información facilitada por el Usuario:</strong> i) nombre y apellido o razón social; (ii) Cédula de identidad y/o RIF ; (iii) teléfonos, (iv) dirección (v) dirección de correo electrónico; (vi) ubicación geográfica; (vii) página web y Redes Sociales; entre otros (en adelante, en su conjunto como los “Datos Personales”).
                        </li>
                        <li>
                            <strong>Información recopilada pasivamente:</strong> Cuando el Usuario accede al Sitio y/o utiliza el Servicio CLASIFICADOS RADIO AMERICA podrá recopilar y almacenar de forma automática ciertos tipos de información, tales como la dirección del protocolo de Internet (IP) de la computadora o dispositivo del Usuario y otra información técnica sobre el uso de la computadora o dispositivo, como el tipo y versión del navegador, la configuración de la zona horaria, y el sistema operativo, ubicaciones geográficas, sesiones de uso, permanencia en el Sitio, frecuencia de uso, [ ].
                        </li>
                        <li>
                            <strong>Información proveniente de cookies, tags y/o cualquier otro método de detección de información automatizada:</strong> La información que recopile CLASIFICADOS RADIO AMERICA podrá incluir el comportamiento de navegación, dirección IP, logs, y otros tipos de información. Sin embargo, CLASIFICADOS RADIO AMERICA no recolectará información personal identificable de manera directa de ningún Usuario usando cookies o tags o cualquier otro método de detección de información automatizada provisto por las herramientas que ofrece el Sitio.
                        </li>
                    </ul>
                    <br />
                    <p>
                        Toda la información a ser recopilada y anteriormente descrita, será recopilada por vías y métodos apegados a la legalidad de las normas vigentes.
                    </p>
                </Accordion>

                <Accordion title="4. Finalidad de Tratamiento de los Datos Personales" id="finalidad-tratamiento">
                    <p>
                        <strong>4.1 </strong>
                        CLASIFICADOS RADIO AMERICA trata la información personal del Usuario para las siguientes finalidades:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Crear y administrar una Base de Datos fundamental para la ejecución de sus servicios y programas, la cuál es y será de propiedad exclusiva de CLASIFICADOS RADIO AMERICA;</li>
                        <li>Proveer el Servicio y sus mejoras a los Usuarios;</li>
                        <li>Enviar a sus Usuarios, notificaciones, noticias y novedades de su interés, además de aquellas que revistan el carácter de notificaciones de índole institucional o legal;</li>
                        <li>Analizar las conductas y comportamientos de los Usuarios en carácter de tales en su Sitio, a los efectos de intentar mejorar su Servicio e intentar proveerlos de mejores soluciones a sus necesidades;</li>
                        <li>Enviar información y boletines de noticias sobre la actualidad de CLASIFICADOS RADIO AMERICA, su Servicios y eventos vía WhatsApp, teléfono, correo postal, correo electrónico, incluso cuando nuestra relación haya terminado salvo que la persona interesada manifieste lo contrario;</li>
                        <li>Facilitar el cumplimiento de obligaciones legales en caso de ser solicitadas por tribunales, u organismos estatales nacionales o internacionales que así lo requieran y lo soliciten en la forma correspondiente;</li>
                        <li>Obtener el diagnóstico de los eventuales problemas de conexión que puedan llegar a existir entre el Sitio de CLASIFICADOS RADIO AMERICA y los Usuarios, mejorando la calidad de los Servicios.</li>
                    </ul>
                </Accordion>


                <Accordion title="5. Uso de la Información de los Usuarios Recolectada" id="uso-informacion">
                    <p>
                        <strong>5.1 </strong>
                        CLASIFICADOS RADIO AMERICA utilizará y almacenará la información provista por los Usuarios y la recolectada por CLASIFICADOS RADIO AMERICA con el fin de proveer el Servicio y sus mejoras a los Usuarios, intentando ajustarse a sus necesidades, por el plazo máximo que establezca la legislación aplicable.
                    </p>
                    <p>
                        <strong>5.2 </strong>
                        CLASIFICADOS RADIO AMERICA conservará y utilizará los Datos Personales otorgados por el Usuario durante el período de ejecución de los programas en los que el “Usuario” haya decidido voluntariamente a participar. Una vez finalizada la relación entre las Partes, por el motivo que fuere, CLASIFICADOS RADIO AMERICA se reserva el derecho de conservar la información relacionada con los “Datos Personales” hasta completar la finalidad de su tratamiento. Posteriormente al plazo mencionado, CLASIFICADOS RADIO AMERICA procederá a la destrucción de los “Requisitos” pudiendo conservar para su base de datos los “Datos Personales”.
                    </p>
                    <p>
                        <strong>5.3 </strong>
                        CLASIFICADOS RADIO AMERICA podrá enviar a sus Usuarios notificaciones, noticias y novedades de su interés, además de aquellas que revistan el carácter de notificaciones de índole institucional o legal a los fines de ofrecer sus Servicios, ello, siempre y cuando sea aceptado por el Usuario.
                    </p>
                    <p>
                        <strong>5.4 </strong>
                        CLASIFICADOS RADIO AMERICA podrá compartir la información con otras empresas de servicios o sitios de internet o similares relacionadas a ella, a los fines de cumplir con el objetivo del Servicio de CLASIFICADOS RADIO AMERICA y mejorar su calidad. Generalmente dichas empresas o sitios de internet poseen sus propias políticas de privacidad de datos a los fines de su protección. De todas maneras CLASIFICADOS RADIO AMERICA empeñará sus mejores esfuerzos en que la privacidad de la información compartida sea protegida de la mejor manera posible. En los casos que corresponda, CLASIFICADOS RADIO AMERICA intentará firmar acuerdos expresos en materia de protección de datos y de privacidad de la información. Sin perjuicio de ello, CLASIFICADOS RADIO AMERICA no será responsable por los daños provocados por tales empresas y/o sitios de internet en cuanto a su deber de protección, confidencialidad y privacidad de los datos que ellas manejan.
                    </p>
                    <p>
                        <strong>5.5 </strong>
                        CLASIFICADOS RADIO AMERICA se compromete y garantiza que no compartirá información relacionada con los “Requisitos” entendiendo explícitamente que se trata de información confidencial.
                    </p>
                    <p>
                        <strong>5.6 </strong>
                        CLASIFICADOS RADIO AMERICA no venderá, alquilará ni negociará ningún Dato Personal a ningún tercero para fines comerciales. Cualquier persona que hubiera provisto información de contacto personal a través del Sitio de CLASIFICADOS RADIO AMERICA, podrá enviar un correo electrónico a <a className="underline text-red-600" href="mailto:contacto@venezuelacompetitiva.net">contacto@venezuelacompetitiva.net</a> a fin de actualizar, borrar y/o corregir su información personal de contacto. CLASIFICADOS RADIO AMERICA responderá dicho requerimiento dentro de las 48 (cuarenta y ocho) horas siguientes a la recepción del mismo vía correo electrónico.
                    </p>
                    <p>
                        <strong>5.7 </strong>
                        El Sitio de CLASIFICADOS RADIO AMERICA podrá contener enlaces a otros sitios de internet que no sean propiedad de CLASIFICADOS RADIO AMERICA. En consecuencia, CLASIFICADOS RADIO AMERICA no será responsable por el actuar de dichos sitios de internet, a los cuales no se aplicará la presente Política de Privacidad. Recomendamos examinar la política de privacidad detallada en aquellos sitios de internet para entender los procedimientos de recolección de información que utilizan y cómo protegen sus datos personales.
                    </p>
                    <p>
                        En la recopilación y uso de los datos a ser recabados, CLASIFICADOS RADIO AMERICA se compromete a tomar todas las medidas posibles a los fines de mantener los datos del Usuario de manera exacta, completa, íntegra, inalterables y actualizados, este último en la medida que la actualización de ellos provenga del propio Usuario.
                    </p>
                </Accordion>


                <Accordion title="6. Cesión y Transferencia de los Datos Personales" id="cesion-transferencia">
                    <p>
                        <strong>6.1 </strong>
                        Únicamente para cumplir con los fines establecidos en la presente Política de Privacidad y a efectos de prestar el Servicio, CLASIFICADOS RADIO AMERICA podrá revelar los Datos Personales y/o información personal del Usuario, cuando sea necesario, a las autoridades, los miembros de CLASIFICADOS RADIO AMERICA y otros terceros, como terceros proveedores de servicios utilizados en relación con el Servicio, por ejemplo para realizar servicios de marketing, publicidad, comunicación, infraestructuras y servicios de TI, para personalizar y mejorar nuestro Servicio. Cuando CLASIFICADOS RADIO AMERICA contratare a un proveedor de servicios le proporcionará la información que necesitara para realizar su función específica, que puede incluir Datos Personales y otra información que el Usuario proporcione a través del Sitio. Estos proveedores de servicio están autorizados a utilizar los Datos Personales sólo cuando sea necesario para proporcionar sus servicios.
                    </p>
                    <p>
                        <strong>6.2 </strong>
                        A su vez, CLASIFICADOS RADIO AMERICA podrá compartir los Datos Personales de los Usuarios con terceros, con el consentimiento previo y expreso del Usuario.
                    </p>
                    <p>
                        <strong>6.3 </strong>
                        CLASIFICADOS RADIO AMERICA, en apego a las normas aplicables, compartirá Datos Personales cuando así le sea requerido por las autoridades competentes, en aquellos casos donde las propias normas establecen esta obligación de suministrar Datos Personales a petición de las autoridades competentes.
                    </p>
                </Accordion>


                <Accordion title="7. Confidencialidad y Seguridad de la Información" id="confidencialidad-seguridad">
                    <p>
                        <strong>7.1 </strong>
                        CLASIFICADOS RADIO AMERICA ha adoptado medidas de seguridad razonables para proteger la información de los Usuarios e impedir el acceso no autorizado a sus datos o cualquier modificación, divulgación o destrucción no autorizada de los mismos. La información recolectada por CLASIFICADOS RADIO AMERICA, será mantenida de manera estrictamente confidencial. El acceso a los datos personales está restringido a aquellos empleados, contratistas, operadores, y representantes de CLASIFICADOS RADIO AMERICA que necesitan conocer tales datos para desempeñar sus funciones y desarrollar o mejorar nuestro Servicio. CLASIFICADOS RADIO AMERICA exige a sus proveedores los mismos estándares de confidencialidad. CLASIFICADOS RADIO AMERICA no permite el acceso a esta información a terceros ajenos a CLASIFICADOS RADIO AMERICA, a excepción de un pedido expreso del Usuario.
                    </p>
                    <p>
                        <strong>7.2 </strong>
                        Sin perjuicio de lo expuesto, considerando que internet es un sistema abierto, de acceso público, CLASIFICADOS RADIO AMERICA no puede garantizar que terceros no autorizados no puedan eventualmente ilegalmente superar las medidas de seguridad y utilizar la información de los Usuarios en forma indebida.
                    </p>
                </Accordion>

                <Accordion title="8. Cambios en la Estructura Corporativa" id="cambios-estructura">
                    <p>
                        <strong>8.1 </strong>
                        CLASIFICADOS RADIO AMERICA se reserva el derecho de transferir la información recolectada en caso de venta o fusión de CLASIFICADOS RADIO AMERICA, o de una adquisición de los activos principales de CLASIFICADOS RADIO AMERICA, o cualquier otra clase de transferencia de CLASIFICADOS RADIO AMERICA a otra entidad. En dicho supuesto, CLASIFICADOS RADIO AMERICA deberá adoptar las medidas razonables a efectos de asegurar que dicha información sea utilizada de una manera consistente con la Política de Privacidad.
                    </p>
                </Accordion>


                <Accordion title="9. Menores de Edad" id="menores-edad">
                    <p>
                        <strong>9.1 </strong>
                        Si bien el Sitio y/o Servicio no están dirigidos a menores de edad, en caso en que algún menor tenga acceso a los mismos, su uso deberá ser supervisado por los padres, madres, tutores o responsables legales. El Sitio y/o Servicio están permitidos sólo para quienes tengan edad legal para contratar y no se encuentren inhibidos legalmente o de algún modo vedados de ejercer actos jurídicos, derechos y/u obligaciones. Habida cuenta de ello, los menores de 18 años no tienen permitido el ingreso al Sitio y/o Servicio, así como tampoco suministrar ningún Dato Personal, ni ningún otro tipo de información.
                    </p>
                    <br />
                    <p>
                        <strong>9.2 </strong>
                        Asimismo, toda vez que los menores de edad pueden no alcanzar a comprender debidamente la Política de Privacidad y sus implicancias, ni decidir válidamente sobre las opciones disponibles a través de sus Servicios, CLASIFICADOS RADIO AMERICA insta a todos los padres, madres, tutores o responsables legales, bajo cuya supervisión se encuentren los menores que accedan al Servicio de CLASIFICADOS RADIO AMERICA, a participar activa y cuidadosamente en las actividades que el menor realice en internet o a través del Sitio, al Servicio on-line que utilicen dichos menores, a la información a la que estos accedan, ya sea cuando dichos menores visiten el Sitio de CLASIFICADOS RADIO AMERICA o cualquier otro sitio de terceros, a enseñarles y a guiarlos en cómo proteger su propia información personal mientras estén navegando en internet.
                    </p>
                </Accordion>

                <Accordion title="10. Derechos de los Usuarios sobre la Información" id="derechos-usuarios">
                    <p>
                        <strong>10.1 </strong>
                        CLASIFICADOS RADIO AMERICA tratará, por todos los medios a su alcance, de facilitar a los Usuarios sobre los cuales haya recopilado o almacenado información personal, el acceso a sus Datos Personales (“Derecho de Acceso”), así como la rectificación, modificación o actualización de los mismos (“Derecho de Rectificación”), o incluso la cancelación de dichos datos personales (“Derecho de Remoción”), a menos que CLASIFICADOS RADIO AMERICA pueda denegar dichas solicitudes (en adelante, las “Solicitudes”), en caso que se encuentre obligada o tenga derecho a conservar dichos Datos de acuerdo a la legislación aplicable.
                    </p>
                    <br />
                    <p>
                        a) A dichos efectos, el Usuario deberá enviar su Solicitud mediante el envío de un correo electrónico con el asunto “Acceso a Datos Personales” a <a className="underline text-red-600" href="mailto:contacto@venezuelacompetitiva.net">contacto@venezuelacompetitiva.net</a>. CLASIFICADOS RADIO AMERICA podrá requerir a dicho Usuario que se identifique, lo que podrá ser verificado por CLASIFICADOS RADIO AMERICA, así como que precise los Datos Personales a los cuales se desea acceder, rectificar o remover.
                    </p>
                    <br />
                    <p>
                        b) CLASIFICADOS RADIO AMERICA podrá rechazar la tramitación de Solicitudes que sean irrazonablemente repetitivas o sistemáticas, que requieran un esfuerzo técnico desproporcionado, que pongan en peligro la privacidad de los demás Usuarios, o que se consideren poco prácticas, o para las que no sea necesario acceder a los Datos Personales.
                    </p>
                    <br />
                    <p>
                        c) El servicio de acceso, rectificación y remoción de Datos Personales será prestado por CLASIFICADOS RADIO AMERICA en forma gratuita, excepto en caso que requiriera un esfuerzo desproporcionado o irrazonable, en cuyo caso podrá cobrarse un cargo de administración.
                    </p>
                    <br />
                    <p>
                        <strong>10.2 </strong>
                        Asimismo, el Usuario autoriza a CLASIFICADOS RADIO AMERICA a utilizar sus Datos Personales para el envío de comunicaciones y materiales publicitarios (tales como newsletters y folletos) referentes a las actividades de CLASIFICADOS RADIO AMERICA y/o que a exclusivo criterio de esta última pudieran llegar a ser de interés para los Usuarios. Los Usuarios podrán solicitar en cualquier momento la suspensión de dichos envíos.
                    </p>
                    <br />
                    <p>
                        <strong>10.3 </strong>
                        A fin de ejercer sus derechos, los Usuarios podrán enviar una solicitud a la casilla de correo <a className="underline text-red-600" href="mailto:contacto@venezuelacompetitiva.net">contacto@venezuelacompetitiva.net</a>.
                    </p>
                    <br />
                    <p>
                        <strong>10.4 </strong>
                        Asimismo, y ante cualquier eventualidad, se informa al Usuario que como titular de sus Datos Personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita, ante las autoridades de aplicación que correspondan, quienes tienen la atribución de atender las denuncias y/o reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
                    </p>
                </Accordion>

                <Accordion title="11. Divulgación de Información" id="divulgacion-informacion">
                    <p>
                        <strong>11.1 </strong>
                        No obstante cualquier otra provisión en contrario en la Política de Privacidad, CLASIFICADOS RADIO AMERICA podrá divulgar cierta información personal de los Usuarios, cuando crea de buena fe que esa divulgación resulte razonablemente necesaria para:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Evitar una responsabilidad legal;</li>
                        <li>Cumplir una exigencia legal, tal como una orden de allanamiento, una citación o una orden judicial;</li>
                        <li>Cumplir un requerimiento de una autoridad gubernamental o reguladora; y/o</li>
                        <li>Proteger los derechos, propiedad o seguridad de CLASIFICADOS RADIO AMERICA, de los Usuarios, o de un tercero.</li>
                    </ul>
                    <p>
                        Todo lo anterior en el marco de las normas aplicables y vigentes para la materia.
                    </p>
                </Accordion>

                <Accordion title="12. Modificación de la Política de Privacidad" id="modificacion-politica">
                    <p>
                        <strong>12.1 </strong>
                        CLASIFICADOS RADIO AMERICA podrá modificar la Política de Privacidad en cualquier momento. Las nuevas versiones de la Política de Privacidad serán notificadas mediante publicación de dicha nueva versión en el sitio web y notificada por las vías de contacto que el Usuario declare en su caso.
                    </p>
                    <p>
                        <strong>12.3 </strong>
                        En caso que el Usuario tenga alguna duda acerca de la Política de Privacidad, o sobre la aplicación de la misma, deberá ponerse en contacto con CLASIFICADOS RADIO AMERICA, en cualquier momento, vía correo electrónico a <a className="underline text-red-600" href="mailto:contacto@radioamerica.com.ve">contacto@radioamerica.com.ve</a>.
                    </p>
                </Accordion>

            </div>
        </div>
    );
}
