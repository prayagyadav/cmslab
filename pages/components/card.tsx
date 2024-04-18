import styles from './custom.module.css'

export default function card() {
  return <>
        <div className={styles.card}>
         <div>
          <a href="https://github.com/prayagyadav/shivani_code/blob/master/plots/ver7/boosted/e/debug_MET_pTwithoutvetos_BCatTope_2018.png">
           <img src="https://github.com/prayagyadav/shivani_code/blob/master/plots/ver7/boosted/e/debug_MET_pTwithoutvetos_BCatTope_2018.png?raw=true" width="30%" />
          </a>
         </div>
         <div className="container">
           <p><b>Dr. Bhawna Gomber</b></p>
           <a href="bhawna.gomber@cern.ch"><i>Email</i></a>
         </div>
        </div>
        </>
}
