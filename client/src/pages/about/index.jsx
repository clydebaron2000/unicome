import  profile from "../../media/Glen Lubao 08252021 57.jpg"
export default function About(props){
    console.log(profile)
    return <>
        <div>
            <img className='profile-pic' src={profile} alt='aaaaa profile'/>
            <div>
                Providing in-person, telehealth, or virtual remote certified medical-legal
                language interpretation services (Tagalog-English) for some cities in California like San Diego County, Riverside County, Orange County, Los Angeles County
                and San Francisco (Virtual Remote, VRI).
                The type of appointments I have had provided services for were mostly
                worker’s compensation related cases like medical-legal exams, QME, IME, AME
                & PQME including administrative hearings & depositions but not limited to the
                following.
                Therapy Appointments like physical therapy, acupuncture, chiropractic, psyche, behavioral or cognitive behavioral therapy, aqua, and speech therapy including
                pain management program related appointments.
                Medical treatment appointments and follow-up visits with pre & post-surgery
                medical examination, imaging, MRI CT X-Ray, nerve tests, EEG, EKG.
                Translation of documents like medical consent forms, advance directives,
                compromise & release (C&R), and court-recorded transcripts.
            </div>
            <ul>
                <li>
                    Education
                    Bachelor’s Degree of Science in Electronics and Communication Engineering
                    University of the East, Philippines -1982-1987
                </li>
                <li>
                    Medical Interpreter Training School (MITS)  
                    Completion of training on Fundamentals of Interpreting, Standards of Practice Code of Ethics, Cultural Awareness, Medical Terminology & Skill Building in Three Modes of Interpretation. 
                </li>
                <li>
                    De La Mora Interpreter Training (DMIT) 
                    Completion of Court Interpreter Training, Legal Terminology, Ethical Responsibility Code of Ethics & Professional responsibility.
                </li>
                <li>
                    Medication Management Course Completion
                    Ron’s Pharmacy Services
                </li>
                <li>
                    Certification
                    CoreCHI Cert. No. xxx825 (Exp. 06/28/2022)
                    Certification Commission for Healthcare Interpreters (CCHI), Washington, D.C.
                </li>
            </ul>
            <div>
                Professional Affiliations
            </div>
            <ul>
                <li>
                    San Diego Certified Medical Interpreters Network, SDCMIN
                    Former Board Member
                </li>
                <li>
                    California Federation of Interpreters, CFI
                    Member
                </li>
                <li>
                    National Council on Interpreting in Health Care, NCIHC
                    Washington, DC – Member
                </li>
            </ul>
        </div>
    
    
    </>
}