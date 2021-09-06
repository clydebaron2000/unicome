import DoctorPic from "../../media/doctor-patient-interpreter Image.png"
export default function Home(props){
    return <>
        <div
            className='hero home'
        >
            <div className='foreground'>
                <div>
                    <h1>Understanding where you need it most</h1>
                    <h2>Certified Medical-Legal Tagalog Interpretation</h2>
                    <div>QME, IME, PQME, AME, DME, Deposition, & Administrative Hearing</div>
                    <button className='action-button'>
                        contact me
                    </button>
                </div>
            </div>
        </div>
        <div className='mini-about'>
            <div className='content'>
                As a spoken language interpreter, I have recognized the need and importance
                to be understood and have one’s thoughts or feelings validated. I uphold and
                support the language access rights as mandated in Title VI of the Civil Rights
                Act of 1964.
                Through my professional service, both the language and cultural gaps in
                communication were bridged to ensure sound communication between the
                parties with limited English proficiency and the healthcare or legal counsel
                service providers.
            </div>
            <div className='profile'>
                <div>image</div>
                <div>Glen Lubao, CoreCHI</div>
                <div>Certified Medical Interpreter</div>
                <div>Tagalog-English</div>
                <div>Learn more about me</div>
            </div>
        </div>
        <div>
            <div>
                why choose certified?
            </div>
            <div>
                <div className='column'>
                    <div>title</div>
                    <div>img</div>
                    <div>stuff</div>
                </div>
                <div className='column'>
                    <div>title</div>
                    <div>img</div>
                    <div>stuff</div>
                </div>
            </div>
        </div>
        <div>
            <div>let's talk!</div>
            <div>
                <button>
                    contact me
                </button>
            </div>
        </div>
    </>
}