import styles from './style.module.css';
function Footer (){
    return(
        <div class={styles.footer}>
            <div>
                <p class={styles.logo}>Logo</p>
                <p class={styles.Text} style={{width: "20vw"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
            </div>
        <div class={styles.footer_sections}>
            <p class={styles.Title}>About us</p>
            <ul class={styles.list1}>
                <li><a href="#" class={styles.Text}>Mission</a></li>
                <li><a href="#" class={styles.Text}>Our team</a></li>
                <li><a href="#" class={styles.Text}>Testimonials</a></li>
                <li><a href="#" class={styles.Text}>Privacy policy</a></li>
            </ul>
        </div>

        <div class={styles.footer_sections}>
            <p class={styles.Title}>Solutions</p>
            <ul class={styles.list1}>
                <li><a href="#" class={styles.Text}>Alfa+</a></li>
                <li><a href="#" class={styles.Text}>E-trade</a></li>
                <li><a href="#" class={styles.Text}>Ask for solution</a></li>
            </ul>
        </div>

        <div class={styles.footer_sections}>
            <p class={styles.Title}>Ressources</p>
        <ul class={styles.list1}>
            <li><a href="#" class={styles.Text}>Blog</a></li>
            <li><a href="#" class={styles.Text}>Carrières</a></li>
            <li><a href="#" class={styles.Text}>Contactez-nous</a></li>
        </ul>
        </div>

        <div class={styles.footer_sections}>
            <p className={styles.Title}>Contact us</p>
            <ul class={`${styles.list1} ${styles.listSM}`}>
                <li><a href="#" class={styles.Text}><div class={styles.social_media}><img src="Facebook.svg" alt="facebook icon"></img><p> Facebook </p>  </div></a></li>
                <li><a href="#" class={styles.Text}><div class={styles.social_media}><img src="Instagram.svg" alt="Instagram icon"></img><p> Instagram</p> </div></a></li>
                <li><a href="#" class={styles.Text}><div class={styles.social_media}><img src="Twitter.svg" alt="Twitter icon"></img><p> Twitter  </p> </div></a></li>
                <li><a href="#" class={styles.Text}><div class={styles.social_media}><img src="Group 73.svg" alt="LinkdIn icon"></img><p> LinkedIn </p> </div></a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer 