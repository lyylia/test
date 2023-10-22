import styles from './style.module.css';
import ButtonLAR from "@/components/buttonLAR";
import Formation1 from "@/components/formation1";

function HomeS5(){
    return (
    <div className={styles.container}>
        <div className="companies_News_container">
            <h3>Our lastest News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="News_component_container">
                <Formation1 image={"Rectangle 29.png"} title={"Lorem ipsum dolor sit amet"} description={"A moins qu'ils ne soient aveuglés par la luxure et ne sortent pas, ceux qui ....."}/>
                <Formation1 image={"Rectangle 60.png"} title={"Lorem ipsum dolor sit amet"} description={"A moins qu'ils ne soient aveuglés par la luxure et ne sortent pas, ceux qui ....."}/>
                <Formation1 image={"Rectangle 54.png"} title={"Lorem ipsum dolor sit amet"} description={"A moins qu'ils ne soient aveuglés par la luxure et ne sortent pas, ceux qui ....."}/>
            </div>
            <ButtonLAR text={"Read All Blogs"}/>
        </div>
    </div>
        
    )
}
export default HomeS5