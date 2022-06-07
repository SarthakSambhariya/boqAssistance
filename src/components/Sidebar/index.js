import React,{useState,useEffect} from "react";
// import lock from "./Assets/lock.svg";
// import caution from "./Assets/caution.svg";
import { SIDE_MENU } from "../Common/navBar";
import styles from "./Sidebar.module.css";

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return height;
}

const Sidebar = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setScreenHeight(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.sidebar} style={{height:screenHeight}}>
      <div className={styles.sidebarLead}>
        <ul>
          {SIDE_MENU.map((item, i) => (
            <li key={i} className="">
              <div className={styles.ulBoth}>
                {item?.target ? (
                  <nobr>
                  <a href={item.to} target="_blank" rel="noreferrer">
                    <img src={item.icon} alt="menu" />
                    <span>{item.label}</span>
                  </a></nobr>
                ) : (
                  <nobr>
                    <img src={item.icon} alt="menu" />
                    <span>{item.label}</span>
                  </nobr>
                )}
              </div>
              {/* {<img src={lock} alt="lock" />} */}
            </li>
          ))}
        </ul>
        {/* {
          <div className={styles.completeProfile}>
            <h5>
              Complete profile to
              <br />
              Unlock all features.
            </h5>
            <img src={caution} alt="error" />
          </div>
        } */}
      </div>
    </section>
  );
};

export default Sidebar;
