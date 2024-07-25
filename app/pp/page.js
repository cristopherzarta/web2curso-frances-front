"use client";

import Header from "@/components/Header";

const pp = () => {
  return (
    <>
      <Header />

      <div
        className="df fdc main-container"
        style={{ margin: "2rem auto 1rem auto" }}
      >
        <h2>Política de privacidad</h2>

        <h3>Introducción</h3>

        <p>
          Proteger su información privada es nuestra prioridad. Esta Declaración
          de Privacidad se aplica al Sitio y rige la recopilación y el uso de
          datos. Al utilizar el sitio web cursofrancesparatodos.dev, usted
          acepta las practicas relacionadas con todos los datos que se describen
          en esta declaración.
        </p>
        <h3>Recopilación de su información personal</h3>
        <p>
          Si compra productos y servicios de cursofrancesparatodos.dev, no
          recopilamos información de facturación y tarjeta de crédito. La
          transacción de compra se encuentra delegada en terceros.
          cursofrancesparatodos.dev no es responsable de las declaraciones de
          privacidad u otro contenido en sitios web fuera del sitio web de
          cursofrancesparatodos.dev.
        </p>
        <h3>Uso de su información personal</h3>
        <p>
          cursofrancesparatodos.dev recopila y utiliza su información personal
          para brindar los servicios que ha solicitado.
          cursofrancesparatodos.dev también puede usar su información de
          identificación personal para informarle de otros productos o servicios
          disponibles de cursofrancesparatodos.dev. cursofrancesparatodos.dev
          también puede comunicarse con usted a través de encuestas para
          realizar una investigación sobre su opinión sobre los servicios
          actuales o sobre los posibles nuevos servicios que se pueden ofrecer.
          cursofrancesparatodos.dev no vende, alquila ni cede sus listas de
          Usurarios a terceros. cursofrancesparatodos.dev divulgara su
          información personal, sin previo aviso, solo si así lo requiere la ley
          o si cree de buena fe que dicha acción es necesaria para: (a) cumplir
          con los ed ictos de la ley o cumplir con el proceso legal presentado a
          cursofrancesparatodos.dev; (b) proteger y defender los derechos o
          propiedad de cursofrancesparatodos.dev; y, (c) actuar de acuerdo con
          las circunstancias exigentes para proteger la seguridad personal de
          los usuarios de cursofrancesparatodos.dev o del público.
        </p>
        <h3>¿Cómo elimino mi información personal de la aplicación?</h3>
        <p>
          Para eliminar la información personal podrás hacerlo desde la sección
          &ldquo;Mi Perfil&rdquo; de tu menú de usuario. Allí tendrás que
          presionar el boton &ldquo;Eliminar mis datos personales&rdquo;
          (nombre, apellido, e imagen ), y luego presionar el botón de
          &ldquo;Guardar cambios&rdquo;. Solo conservaremos tu correo
          electrónico por que es el dato que nos permite vincularte a toda tu
          información transaccional dentro de cursofrancesparatodos.dev. De esta
          manera, cuanado decidas volver a la aplicación, no habrás perdido el
          acceso a tus cursos.
        </p>
        <h3>
          Información recopilada automáticamente cursofrancesparatodos.dev
        </h3>
        <p>
          cursofrancesparatodos.dev puede recopilar automáticamente información
          sobre el hardware y software de su computadora. Esta información puede
          incluir: su dirección IP, tipo de navegador, nombres de dominio,
          tiempos de acceso y direcciones de sitios web de referencia. Esta
          información se utiliza para el funcionamiento del servicio, para
          mantener la calidad del servicio y para proporcionar estadísticas
          generales sobre el uso del sitio web de cursofrancesparatodos.dev.
          cursofrancesparatodos.dev utiliza tanto cookies de origen (que son
          establecidas por nuestro sitio web cuando se visita) como cookies de
          terceros (que son configuradas por un servidor ubicado fuera del
          dominio de nuestro sitio web). Algunas cookies son necesarias para que
          el sitio web de cursofrancesparatodos.dev funcione correctamente. Por
          ejemplo, utilizamos cookies para autenticarlo. Cuando inicia sesión en
          nuestra plataforma, se establecen cookies de autenticación que nos
          permiten saber quien es usted durante una sesión de navegación. Estas
          cookies también facilitan la funcionalidad de inicio de sesión en las
          redes sociales en nuestro sitio web. Tiene la posibilidad de aceptar o
          rechazar estas cookies. La mayoría de los navegadores web de
          escritorio aceptan automáticamente las cookies, pero normalmente
          pueden modificar la configuración de su navegador para rechazar las
          cookies si lo prefiere. Si opta por rechazar las cookies, es posible
          que no pueda disfrutar por completo de las funciones de los servicios
          de cursofrancesparatodos.dev.
        </p>
      </div>

      <style jsx>{`
        .main-container {
          width: 50vw;
        }

        h2 {
          text-align: center;
          text-transform: uppercase;
        }

        p {
          margin-top: 0.3rem;
        }

        h3 {
          margin-bottom: 0.5rem;
          text-decoration: underline;
        }

        @media (max-width: 1000px) {
          .main-container {
            width: 95vw;
          }
        }
      `}</style>
    </>
  );
};

export default pp;
