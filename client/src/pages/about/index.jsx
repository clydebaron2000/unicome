import Footer from "../../components/footer"
import  profile from "../../media/Glen Lubao 08252021 57.jpg"
export default function About(props){
    return <>
    <div className='about'>
        <section>
                <div className='name'>
                    <h1>
                        Glen Lubao
                    </h1>
                    <h2>
                        Certified Interpreter
                    </h2>
                </div>
                <div className='description'>
                    <div className='box'>
                        <div className='img-container'>
                            <img   
                                className='profile-pic' src={profile} alt='aaaaa profile'/>
                        </div>
                    </div>
                    <div className='box'>
                        <p>
                            Almost 10 years of professional experience in providing medical and medical-legal interpretation language services in specific areas of healthcare, Industrial labor (Worker’s Compensation), education, public and social services. 
                        </p>
                        <p>
                            Experienced Certified Medical Interpreter with a demonstrated history of working in public relations, healthcare, spiritual care, administrative hearings & language services. Purpose driven in teaching, volunteering, community service, humanitarian service, and charity. Compassion is a passion to assist the poor, the sick & the hurting.
                        </p>
                        <p>
                            Providing on-site, telehealth, or virtual remote certified medical-legal
                            language interpretation services (Tagalog-English) in some cities in California like San Diego County, Riverside County, Orange County, Los Angeles County
                            and San Francisco (Virtual Remote, VRI). The type of appointments I have had provided services for are 
                            
                            physical therapy, acupuncture, chiropractic, psyche, behavioral or cognitive behavioral therapy, aqua, and speech therapy including
                            pain management program related appointments.
                            Medical treatment appointments and follow-up visits with pre & post-surgery
                            medical examination, imaging, MRI CT X-Ray, nerve tests, EEG, EKG.
                            Translation of medical consent forms, advance directives,
                            compromise & release (C&R), and court-recorded transcripts.
                            {/* were mostly
                            worker’s compensation related cases like medical-legal exams, QME, IME, AME
                            & PQME including administrative hearings & depositions but not limited to the
                            following. */}
                        </p>
                        <p>
                            I am privileged and honored to be one among the 5 Certified Healthcare Interpreters in the United States at the present time for Tagalog language and sole provider of certified medical interpretation services in Greater San Diego, California.
                        </p>
                    </div>
                </div>
        </section>
        <section>
            <h3>
                Professional Commitment
            </h3>
            <p>
                Protect and ensure the well-being of the patient or the person with limited English proficiency (LEP). Speak for those who cannot speak for themselves, for the rights of all who are hurting and destitute. Speak the truth wholly to bridge the gap of language and cultural barriers between the LEP and healthcare providers (HCP) or legal counselors. 
            </p>
        </section>
        <section>
            <h3>Education</h3>
            <ul>
                <li>
                    <h4>Bachelor’s Degree of Science in Electronics and Communication Engineering</h4>
                    <p>University of the East, Philippines -1982-1987</p>
                </li>    
                <li>
                    <h4>Completion of training on Fundamentals of Interpreting, Standards of Practice Code of Ethics, Cultural Awareness, Medical Terminology & Skill Building in Three Modes of Interpretation. </h4>
                    <p>Medical Interpreter Training School (MITS)</p>
                </li>      
                <li>
                    <h4>
                        Completion of Court Interpreter Training, Legal Terminology, Ethical Responsibility Code of Ethics & Professional responsibility.
                    </h4>
                    <p>
                        De La Mora Interpreter Training (DMIT) 
                    </p>
                </li>
                <li>
                    <h4>
                        Medication Management Course Completion
                    </h4>
                    <p>
                        Ron’s Pharmacy Services
                    </p>
                </li>
            </ul>
        </section>
        <section>
            <div>
                <h3>Certification</h3>
                <ul>
                    <li>
                        <h4>CoreCHI Cert. No. xxx825 (Exp. 06/28/2022)</h4>
                        <p>Certification Commission for Healthcare Interpreters (CCHI), Washington, D.C.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div>
                <h3>Professional Affiliations</h3>
                <ul>
                    <li>
                        <h4>San Diego Certified Medical Interpreters Network, SDCMIN</h4>
                        <p>Former Board Member</p>
                    </li>
                    <li>
                        <h4>California Federation of Interpreters, CFI</h4>
                        <p>Member</p>
                    </li>
                    <li>
                        <h4>National Council on Interpreting in Health Care, NCIHC</h4>
                        <p>Washington, DC – Member</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <Footer/>
    </>
}