import { clients } from "../constants"
import styles from "../style"

const Client = () => (

    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] h-[100px] object-contain "/>
          </div>
        ))}
      </div>
    </section>

  )


export default Client