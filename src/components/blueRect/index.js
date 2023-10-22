import styles from './style.module.css';

function BlueRectangle(){
    return (
        
        <div className={styles.rectangle}>
            <div className={styles.content}>
            <h3 className={styles.title}>Get in Tech</h3>
            <div>
                <h3 className={styles.title}>Visit Us</h3>
                <p className={styles.text}>lot n° 187 2eme etage, boudiaf mohamed e, Ouled Fayet 16094</p>
            </div>
            <div>
                <h3 className={styles.title}>Chat with us</h3>
                <p className={styles.text}>Our friendly team is here to help.<br/>Finntude@finntude.com</p>
            </div>
            <div>
                <h3 className={styles.title}>Call us</h3>
                <p className={styles.text}>Mon-Fir from 8am to 5pm<br/>+213 666-55-55-55</p>
            </div>
            <div>
            <h3 className={styles.title}>Social media</h3>
            <div classNme={styles.socialMedia}>
                <img className={styles.logo} src="instagram-fill.svg" alt="social media logo"></img>
                <img className={styles.logo} src="linkedin-box-fill.svg" alt="social media logo"></img>
                <img className={styles.logo} src="twitter-fill.svg" alt="social media logo"></img>
                <img className={styles.logo} src="facebook-circle-fill.svg" alt="social media logo"></img>
            </div> 
            </div>
            </div>
        </div>

    )
}

export default BlueRectangle