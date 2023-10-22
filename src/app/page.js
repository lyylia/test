import styles from "@/components/style.css";
import HomeS1 from "./sections/homeS1";
import HomeS2 from "./sections/homeS2";
import HomeS3 from "./sections/homeS3";
import HomeS4 from "./sections/homeS4";
import HomeS5 from "./sections/homeS5";



export default function Home() {
  return (
    
    <div className={styles}>
      <HomeS1/>
      <HomeS2/>
      <HomeS3/>
      <HomeS4/>
      <HomeS5/>
    </div>
  )
}
