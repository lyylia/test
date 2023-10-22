import styles from './style.module.css'
function Formation1({image,title,description}) {
    return (
    <div class={styles.News_component}>
    <img src={image} alt="img"></img>
    <div style={{position: "relative"}}>
    <h6>formation</h6>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href="#" className= {`a_finance_services`}>Know More<span className= {`long_arrow small_long_arrow_right ${styles.Span}`}></span></a>
    </div>
    </div>

    )
}
export default Formation1