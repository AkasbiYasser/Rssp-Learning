import styles from './About.module.css';

//images
import group from "../../assets/images/group.png";
import curve from "../../assets/images/headline-curve.svg";

import ArticleIcon from '@mui/icons-material/Article';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

//components
import IconTitleCard from '../IconTitleCard/IconTitleCard';

const data = [
  {
    title: 'Facilement accessible',
    description: 'Trouver le contenu dont vous avez besoin est aussi simple qu’un clic.',
    icon: <ArticleIcon  />,
  },
  {
    title: 'Coût plus abordable',
    description: 'Nous croyons en l’accessibilité de l’éducation pour tous.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Horaires d’étude flexibles',
    description: 'Que vous soyez un lève-tôt ou un oiseau de nuit, nos cours sont disponibles 24h/24 et 7j/7',
    icon: <AccessTimeIcon />,
  },
  {
    title: 'Consultation avec un professeur',
    description: 'L’apprentissage va au-delà du contenu ; il s’agit également d’orientation et de soutien.',
    icon: <ContactSupportIcon />,
  },
]

function About() {

  return (
    <div id='about' className={styles.container}>
      <div className={styles.image}>
        <img src={group} alt='group work' />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h2><span className='green'>Apprentissage</span> Agréable</h2>
          <img src={curve} alt='curve line' />
        </div>

        <p>Définissez la méthode d'apprentissage selon vos souhaits avec certains des avantages que vous obtenez de nous, afin que vous puissiez profiter des leçons que nous proposons.</p>

        <div className={styles.grid}>
          {data.map((value, index) => (
            <IconTitleCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
