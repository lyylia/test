import styles from './style.module.css';

function HomeS4(){
    return (
        <>
        <div className="companies_News_container">
            <h3>Entreprises avec lesquelles les nous travaillons</h3>
            <p>Dictum tortor, sed scelerisque mattis malesuada. Urna sed magna a sed nulla egestas bibendum eget. Consectetur urna varius dolor, fermentum turpis. Sit malesuada id tortor viverra gravida cras. In quis.</p>
            <div className={styles.companies_logo_container}>
                <img src="pepsi.svg" alt="logo1" className={styles.companies_logo}></img>
                <img src="Ellipse 64.svg" alt="logo2" className={styles.companies_logo}></img>
                <img src="Ellipse 65.svg" alt="logo3" className={styles.companies_logo}></img>
                <img src="Ellipse 66.svg" alt="logo4" className={styles.companies_logo}></img>
                <img src="Ellipse 67.svg" alt="logo5" className={styles.companies_logo}></img>
                <img src="Ellipse 68.svg" alt="logo6" className={styles.companies_logo}></img>
                <img src="Huawei.svg" alt="logo7" className={styles.companies_logo}></img>
            </div>   
        </div> 
        </>
    )
}

export default HomeS4