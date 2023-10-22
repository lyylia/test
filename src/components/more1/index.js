import styles from './style.module.css'
function SeeMore1({text="See More"}){
    return (
        <button className= {`buttons ${styles.btn}`}>{text}</button>

    )
}
export default SeeMore1