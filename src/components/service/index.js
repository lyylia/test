import styles from './style.module.css';
function Service({image,title,description}) {
    return (
        <div class={styles.rectangle}>
            <img src={image} alt="img finace services 1" class={styles.img_finance_services}></img>
            <h1 class={styles.h1_finance_services}>{title}</h1>
            <p class={styles.p_finance_services}>{description}</p>
            <a href="#" class={styles.a_finance_services}>Know More<span className={`${"long_arrow"} ${"small_long_arrow_right"} ${styles.Span}`}></span></a>
        </div>
    )
}
export default Service