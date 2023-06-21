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

export const proyectos2 = [
    {
    name:'HALOGAME APP',
    deploy:"https://deploy-pi-blond.vercel.app/",
    image:Halo,
    tecno:[Reacts2, reduxs, html, css3, Express2, insomnia, sequelize, javas,git, githubs, node, POSTGRESQL2]
},
{
    name:'MEDCONNECT APP',
    deploy:"https://medconnectfront-production.up.railway.app/",
    image:MedC,
    tecno:[next, reduxs, taildwind, Express2, postman, sequelize, javas,git, githubs, trello, node, POSTGRESQL2]

},
{
    name:'PORTAFOLIO',
    deploy:"https://portafolio-topaz-one.vercel.app/",
    image:portafolio,
    tecno:[next, taildwind, javas]
}

]