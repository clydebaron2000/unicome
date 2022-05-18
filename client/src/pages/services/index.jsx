import Footer from "../../components/footer"
import stripes from '../../media/stripes.png'
import { ReactComponent as Medlegal } from '../../media/legal medical.svg'

const Stripes = ()=> <img className='stripes' src={stripes} alt='stripes' width='fill'/>
export default function About(props){
    return <>
    <div className='services'>
        <div className='stripped-card'>
            <Stripes/>
            <h1>
                <Medlegal style={{display:'inline',paddingInline:'5px',width:'var(--fs-700)',height:'auto'}}/>
                Certified Language Interpretation Services <br/> (Tagalog-Ilonggo-English)
            </h1>
            <h2>
                On-Site/In-Person | Virtual/Remote & Telehealth
            </h2>
            <section>
                <h3>
                    Worker’s Compensation Related Cases
                </h3>
                <ul>
                    <li>
                        Medical treatment, evaluation, and Physician’s follow-up appointments
                    </li>
                    <li>
                        Medical-Legal Appointments: IME, QME, AME, PQME
                    </li>
                    <li>
                        Therapy Appointments: Physical Therapy, Speech Therapy, Aqua Therapy, Psyche Therapy, Cognitive or Behavioral Therapy, Acupuncture Therapy, and Chiropractic.
                    </li>
                    <li>
                        Pain Management and Rehabilitation/Functional Restoration Programs
                    </li>
                    <li>
                        Administrative Hearings
                    </li>
                    <li>
                        Depositions in Industrial Labor/Worker’s Comp. cases and motor vehicle accident
                    </li>
                    <li>
                        Sight Translations of various patient’s intake forms, pre and post-surgery, healthcare consent forms, hospital discharge instructions, Advance Healthcare Directives, and Compromise & Release Agreement
                    </li>
                </ul>
            </section>
            <section>
                <h3>
                    Community Services
                </h3>
                <ul>
                    <li>
                        Small-Group Facilitator with Therapeutic Spiritual Health Class (4-6 Sessions, 1 hr./Session/Week)
                    </li>
                    <li>
                        Wedding Ceremony Officiant (On-site only)
                    </li>
                    <li>
                        Funeral Celebrant Minister: Celebration of Life Memorial Services
                    </li>
                </ul>
            </section>
            <Stripes/>
        </div>
    </div>
    <Footer/>
    </>
}