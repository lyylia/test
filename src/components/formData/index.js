import styles from './style.module.css';

function FormData(){
    return(
        <div className={styles.container}>
            <h6>We would love to hear about your ideas and how we can help you realize them.</h6>
            <p>Interest in the solution*</p>
            <form className={styles.formC}>
                <div  className="checkboxC">
                    <input type='checkbox'></input>
                    <label>Alfa+</label>

                    <input type='checkbox'></input>
                    <label>Alfa+</label>

                    <input type='checkbox'></input>
                    <label>Alfa+</label>
                </div>
            </form>
        </div>
    )
}

export default FormData