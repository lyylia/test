import styles from './style.module.css';
import Start1 from "@/components/start1";
import SeeMore1 from "@/components/more1";

function Solution({image,title,description,direction="row"}){

    if(direction!=="row") {
    return (
        <div className={styles.Alfa_Platform_Container} style={{flexDirection:direction , gap:"16vw"} }>
            <img src={image} alt="Landing page"></img>
            <section>
                <h4>{title}</h4>
                <p>{description}</p>
                <div class={styles.buttons_container}>
                    <Start1/>
                    <SeeMore1/>
                </div>
            </section>
      </div>
    )
    }
    else {
        return (
            <div className={styles.Alfa_Platform_Container} style={{flexDirection:direction}}>
                <img src={image} alt="Landing page"></img>
                <section>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div class={styles.buttons_container}>
                        <Start1/>
                        <SeeMore1/>
                    </div>
                </section>
          </div>
        )
    }
}

export default Solution