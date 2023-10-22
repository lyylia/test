import BlueRectangle from '@/components/blueRect';
import styles from './style.module.css';
import FormData from '@/components/formData';
function SolutionsS4(){
    return (
        <>
        <h3 className={styles.Our_Solutions}>Get in touch today</h3>
        <div className={styles.subContainer}>
            <div className={styles.blueRectangle}>
                <BlueRectangle/>
            </div>
            <div className={styles.formData}>
                <FormData/>
            </div>
        </div>
        </>
    )
}

export default SolutionsS4