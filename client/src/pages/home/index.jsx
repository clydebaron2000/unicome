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
               As a second language speaker, I know the struggles of speaking and understanding English, which is why I have gone the extra mile to become a certified interpreter. Through my services, I bridge the language gap between limited English proficient speakers and their service providers so they may have sound communication when it counts.
            </div>
            <div className='profile'>
                <div>image</div>
                <div>Glen Lubao, CoreCHI</div>
                <div>Certified Medical Interpreter</div>
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