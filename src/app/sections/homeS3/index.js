import styles from './style.module.css';
import Solution from "@/components/solution";
import ButtonLAR from "@/components/buttonLAR";

function HomeS3(){
    return (
        <>
      <h3 className={styles.Our_Solutions}>Nos Solutions</h3>
      <Solution image={"Landing-page 1.png"} title={"Plateforme ALFA+"} description={"ALFA  est une plateforme de simulation digitale des marchés financiers virtuels destinée à la formation des professionnels, étudiants et particuliers qui veulent renforcer leurs compétences en Finance des Marchés."} />
      <Solution image={"Landing-page 3.png"} title={"E-TRADE"}          description={`E-TRADE pour le commerce extérieur : Banque à distance 100% Digitale•	Plateforme sécurisée de E-banking : Rendre les opérations du commerce extérieur plus simples pour la banque et son client.\n•	Le produit de banque à distance E-Trade permet aux Clients Entreprises de créer, modifier et consulter les opérations soit à l’importation ou l’exportation effectuées sous les trois modalités de paiements, à savoir : crédit documentaire et remise documentaire et Transfert libre.\n	Une disponibilité à tout moment 24h/24 et 7j/7.\n•	Accès internet en tout lieu et de n’importe quel poste\n•	Gain de temps.\n•	Plusieurs niveaux de validation selon la matrice de signature du client.\n•	Gestion des opérations en toute simplicité\n`} direction={"row-reverse"}/>
      <Solution image={"Landing-page 2.png"} title={"Solution GRH"}     description={"Découvrez notre solution tout-en-un de gestion du personnel et des ressources humaines, conçue pour simplifier et optimiser la gestion de votre équipe. Notre plateforme offre une gamme complète de fonctionnalités, de la gestion des effectifs à la paie, en passant par le recrutement, la formation et bien plus encore. Automatisez vos processus RH, suivez les performances de vos employés, assurez la conformité légale et donnez aux employés un accès en libre-service. Avec notre solution, vous pouvez libérer du temps précieux pour vous concentrer sur la stratégie de votre entreprise tout en améliorant l'efficacité de votre gestion des ressources humaines. Rejoignez-nous pour transformer la gestion du personnel en une expérience fluide et efficace."} />
      <div className ={styles.button_explore_more_solutions_container}>
        <ButtonLAR text={"Explorez plus de solutions"}/>
      </div> 
        </>
    )
}
export default HomeS3

