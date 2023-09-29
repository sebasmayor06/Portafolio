import javas from '../../../../public/imageTec/javascript.png'
import Reacts2 from '../../../../public/imageTec/React.svg.png'
import reduxs from '../../../../public/imageTec/free-redux-3629018-3030243.png'
 import githubs from '../../../../public/imageTec/github.png'
import git from '../../../../public/imageTec/Git-Icon-1788C.png'
import POSTGRESQL2 from '../../../../public/imageTec/Postgresql_elephant.svg.png'
import Express2 from '../../../../public/imageTec/express.png'
 import trello from '../../../../public/imageTec/trello_logo_icon_189227.png'
 import css3 from '../../../../public/imageTec/CSS3_logo_and_wordmark.svg.png'
import html from '../../../../public/imageTec/HTML5_logo_and_wordmark.svg.png'
import node from '../../../../public/imageTec/node.png'
import insomnia from '../../../../public/imageTec/insomnia-logo-A35E09EB19-seeklogo.com.png'
import taildwind from '../../../../public/imageTec/Tailwind_CSS_Logo.svg.png'
import scrum from '../../../../public/imageTec/scrum.png'
import sequelize from '../../../../public/imageTec/sequelize-logo-9A5075DB9F-seeklogo.com.png'
import postman from '../../../../public/imageTec/postman.svg'
import next from '../../../../public/imageTec/nextjs-icon-dark-background.png'
import Halo from "../../../../public/image/HaloGame.png"
import MedC from "../../../../public/image/MedConnect.png"
import portafolio from "../../../../public/image/Portafolio2.png"
import kacena from "../../../../public/image/kacena.png"
import php from "../../../../public/imageTec/php.png"

export const proyectos2 = [
    {
        name:'PORTAFOLIO',
        deploy:"https://portafolio-topaz-one.vercel.app/",
        image:portafolio,
        tecno:[next, taildwind, javas],
        parrafo:"Es mi pagina web personal, donde enseño mis proyectos y conocimientos. La estare actualizando constantemente a medida que pase el tiempo y obtenga mas experiencia."
    },
    {
        name:'KACENA',
        deploy:"https://latkacena.com",
        image:kacena,
        tecno:[php, html,css3],
        parrafo:"Diseño y Desarrollo de una aplicación web, cotizador y script con base de datos con perfil asesor y administrador para el manejo de cotizaciones",
    },
    {
    name:'HALOGAME APP',
    deploy:"https://deploy-pi-blond.vercel.app/",
    image:Halo,
    tecno:[Reacts2, reduxs, html, css3, Express2, insomnia, sequelize, javas,git, githubs, node, POSTGRESQL2],
    parrafo:"Diseño y Desarrollo de una aplicación de VideoJuegos que renderiza un paginado con cartas donde se muestran la información de cada videojuego, se incluyó filtros combinados, ordenamientos, barra de búsqueda y por último se implementó una landing donde el usuario puede crear, eliminar y actualizar su propia carta."
},
{
    name:'MEDCONNECT APP',
    deploy:"https://medconnectfront-production.up.railway.app/",
    image:MedC,
    tecno:[next, reduxs, taildwind, Express2, postman, sequelize, javas,git, githubs, trello, node, POSTGRESQL2],
    parrafo:"MedConnect es una aplicación web desarrollada como plataforma de gestión de citas. Su característica destacada es el sistema integral de gestión de horarios, que brinda a los usuarios una experiencia fluida en la reserva de citas y el manejo de todas las tareas administrativas necesarias dentro del centro médico a través del panel de administración. La plataforma también integra un método de pago externo, así como inicio de sesión externo con Google. "
}

]