import SeeMore1 from '@/components/more1';
import styles from './style.module.css';
function SolutionsS1(){
    return (
        <div className={styles.container}> 
            <div className={styles.static}>
                <h1>OUR PRODUCT RANGE IS CONSTANTLY GROWING TO MEET CUSTOMER EXPECTATIONS</h1>
                <p>hether creating quality customer experiences, delivering better patient outcomes, or streamlining the supply chain, enterprises need infrastructure that can deliver AI-powered insights.</p>
                <SeeMore1 text={"Contactez-nous"}/>
            </div>        
        </div>
    )
}

export default SolutionsS1