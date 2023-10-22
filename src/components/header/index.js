import styles from './style.module.css';
import Link from 'next/link';


function Header() {
    return (
        <div  className = {styles.container} >

<div className = {styles.logo}>
<img src="a.svg" alt="logo Finnetude"></img>
<p>Finnetude</p>
</div>

<nav className={styles.nav_bar}>
<ul>
    <li className={styles.navBarItem}><Link href="#" className={styles.selected}>Accueil</Link></li>
    <li className={styles.navBarItem}><Link href='./solutions'>Solutions</Link></li>
    <li className={styles.navBarItem}><Link href="./about">A propos de nous</Link></li>
    <li className={styles.navBarItem}><Link href="#">Carrière</Link></li>
    <li className={styles.navBarItem}><Link href="#">Blog</Link></li> 
</ul>
</nav>

<button className={styles.btn}>Contactez-nous</button>

</div>

)
}

export default Header