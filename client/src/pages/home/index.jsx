// import DoctorPic from "../../media/doctor-patient-interpreter Image.png"
import {ReactComponent as MedicalLegal} from "../../media/legal medical.svg";
import Profile from "../../media/Glen Lubao 08252021 57.jpg";
import Footer from "../../components/footer";
export default function Home(props){
    return <>
        {/*TODO: get close to centering text in hero */}
        <div className='hero home'>
            <div className='foreground'>
                <div>
                    {/* <h1>Understanding where you need it most</h1> */}
                    {/* <h1>Understanding where <wbr></wbr> you need it most</h1> */}
                    <h1>Understanding where</h1>
                    <h1>you need it most</h1>
                    
                    <h2>Certified Medical-Legal Interpreter</h2>
                    <div className='button-container'>
                        <a className='action-button' href='/services'>
                            see my services
                        </a>
                        <button className='action-button' >
                            contact me
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className='mini-about'>
                <div className='content'>
                    <p>
                        As a spoken language interpreter, I have recognized the need and importance
                        to be understood and have one’s thoughts or feelings validated. I uphold and
                        support the language access rights as mandated in Title VI of the Civil Rights
                        Act of 1964.
                    </p>
                    <p>
                        Through my professional service, both the language and cultural gaps in
                        communication were bridged to ensure sound communication between the
                        parties with limited English proficiency and the healthcare or legal counsel
                        service providers.
                    </p>
                </div>
                <div className='profile'>
                    <div class='img-container'>
                        <img src={Profile} alt='Glen Lubao'/>
                    </div>
                    <div class='info'>
                        <h3>Glen Lubao, CoreCHI</h3>
                        <h5>Certified Medical Interpreter</h5>
                        <div>Tagalog-English</div>
                        <a href='/about' className='secondary-button'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <section className='why-choose-certified'>
            <h2>
                Why Choose Certified?
            </h2>
            <div className='column-layout'>
                <div className='box'>
                    <h3>Professionalism Balances the Scale</h3>
                    <div>
                        <p>
                            A language interpreter’s certification requires an education, rigorous testing,
                            training, and skills to get certified. However, there’s more to it that counts
                            than the certification number.
                        </p>
                        <p>
                            The professional expertise of certified medical-legal interpreters adheres to
                            their standards of practice & code of ethics. They balance the scale of the
                            health and well-being of the limited English proficient person and the integrity
                            of professional opinions and judgments by both the healthcare and legal counselor providers.
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <MedicalLegal/>
                </div>
                <div className='box'>
                    <h3>A Certified Interpreter is Required</h3>
                    <div>
                        <p>
                            For Worker’s Compensation related medical treatment appointments and medical legal exams, the interpreter providing the services for such type of
                            appointments must be “Certified” and meet the qualifications as mandated by
                            the law under the California Code of Regulations, Title 8, Section 9795.1.5(a)(1) and 9795.1.6(a)92). 
                        </p>
                        <p>
                            Their names must be listed in the registry for Certification Commission for Healthcare Interpreters (CCHI) or National
                            Board of Certification for Medical Interpreters (National Board).
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='lets-talk'>
            <h1>Let's Talk D'Lingo!</h1>
            <div>
                <p>
                    QME, IME, AME, PQME, Deposition, Administrative Hearing
                </p>
                <button className='action-button'>
                    contact me
                </button>
            </div>
        </section>
        <Footer/>
    </>
}