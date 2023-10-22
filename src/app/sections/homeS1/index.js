import styles from './style.module.css';
import ExploreSolutions from "@/components/exploreS";
import ContactUs from "@/components/contact";
function HomeS1(){
    return (
    <div className={styles.container}>
        <div className={styles.static}>
            <h1>Révolutionner ensemble l'avenir digital des institutions financières, éducations et des entreprises.</h1>
            <p> Quand la vision rencontre la réalisation : Créer des solutions exceptionnelles en finances, technologie et la formation pour un avenir digital.</p>
        </div>
        <div className={styles.buttons_container}>
            <ExploreSolutions/>
            <ContactUs/>
        </div>
    </div>
    )
}
export default HomeS1