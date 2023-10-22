import styles from './style.module.css'

function ButtonLAR({text}){
    return (
        <button className= {`buttons ${styles.btn}`}>{text}<span className= {`long_arrow small_long_arrow_right ${styles.Span}`}></span></button> 
    )
}
export default ButtonLAR