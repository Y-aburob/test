import starLogo from '../assets/star.svg'
import emptyStar from '../assets/emptyStar.svg'
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import apple from '../assets/iphone.svg'
import android from '../assets/android.svg'
import email from '../assets/sms.svg'
import call from '../assets/call.svg'
import timer from '../assets/timer.svg'
import logoFooter1 from '../assets/first_logo.svg'
import logoFooter2 from '../assets/second_logo.svg'

function Footer() {
    

return (  
    <div className="bg-[#C6BB9A] px-4 md:px-7 py-6 text-[#3A2E22]">

        {/* rating  */}
        <div className="flex flex-col flex-wrap items-center gap-4 p-8 bg-lightwhite md:flex-row md:justify-between rounded-2xl">  

                <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
                <img className='max-w-14' src={starLogo} alt="starLogo" />
                <h2 className='text-[24px] font-[500] text-center'>Please, rate your experience with us!</h2>
            </div>
            <div className='flex flex-wrap gap-1'>
                <img src={emptyStar} alt="emptyStar" />
                <img src={emptyStar} alt="emptyStar" />
                <img src={emptyStar} alt="emptyStar" />
                <img src={emptyStar} alt="emptyStar" />
                <img src={emptyStar} alt="emptyStar" />
            </div>
        </div>
        
        {/* FAQ section */}

        <div className='flex flex-col items-center justify-center gap-6 mt-10 md:flex-row md:justify-between'>
            <div className='flex gap-3 flex-wrap justify-center font-[400] text-[13px]'>
                <a href="#" className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]'>FAQ</a>
                <a href="#" className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]'>NCEMA - Feedback</a>
                <a href="#" className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]'>contact us</a>
            </div>
            <div className='flex gap-2 flex-wrap justify-center text-[14px] font-bold'>
                <p>Follow Us</p>
                <div className='flex items-center justify-center gap-2'>
                    <a href='#' className='hover:-translate-y-1 transition-all duration-[.4s]'><img className='w-[20px]' src={youtube} alt="youtube" /></a>
                    <a href='#' className='hover:-translate-y-1 transition-all duration-[.4s]'><img className='w-[10px]' src={facebook} alt="facebook" /></a>
                    <a href='#' className='hover:-translate-y-1 transition-all duration-[.4s]'><img className='w-[20px]' src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
        <hr className='mt-8 bg-[#D4CABB]' />


        {/* website pages section */}
        <div className='flex flex-wrap justify-center gap-4 mt-10 sm:justify-between lg:flex-nowrap'>
        
        <div className='flex justify-center text-center sm:justify-start sm:text-left gap-10 sm:gap-16 flex-wrap text-[13px]'>
        {/* <div className='grid grid-cols-8 md:grid-cols-4 sm:grid-cols-2 '>   using grid  */} 
            <div className="w-full sm:w-auto ">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">About ncema</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Purpose and Goals</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Vice President Message</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>NCEMA Departments</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Laws and Legislation</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">Initiatives</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>E-Supplier Registration Service</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Online Career</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Media Registration</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Tenders</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Auctions</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Supplier Zone</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Emirates Volunteer Platform</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">Publications Hub</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Media Center</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>social media</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Brochures</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>news articles</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Events</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">Publications Hub</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data Policy</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Sharik.ae</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">Services</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data Policy</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Sharik.ae</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">Media Center</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data Policy</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Sharik.ae</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">WCEMS</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data Policy</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Sharik.ae</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2">
                    <li className="font-bold text-[14.58px]">E-participation</li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data Policy</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Open Data</a></li>
                    <li className=""><a className='transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]' href='#'>Sharik.ae</a></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 text-center sm:text-left">
                <h2 className='font-bold text-[14.58px]'>Apps</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center gap-3 sm:justify-start'>
                        <img src={apple} alt="apple" />
                        <p className='text-[17px]'>IOS APP</p>
                    </div>
                    
                    <div className='flex justify-center gap-3 sm:justify-start'>
                        <img src={android} alt="android" />
                        <p className='text-[17px]'>ANDROID APP</p>
                    </div>
                    <p className='max-w-[400px] text-[12px]'>
                        Website last updated on: July 25, 2024 07:28AM
                        This site is best viewed in 1024x768 screen resolution Supports
                        Microsoft Internet Explorer 10.0+, Firefox 4.0+, Safari
                        1.2+, Opera 6.0+
                    </p>
                </div>
            </div>
        </div>


        {/* contact us section */}
        <hr className='mt-8 bg-[#D4CABB]' />

        <div className='flex flex-col flex-wrap justify-center gap-10 mt-10 text-center sm:justify-between sm:flex-row sm:text-left'>
            <div>
                <h2 className='text-[14.58px] font-bold'>CONTACT US</h2>
                <div className='flex flex-col gap-6 mt-5 sm:flex-row sm:gap-16 text-[14.58px]'>
                    <div className=''>
                        <img className='m-auto sm:m-0' src={email} alt="email" />
                        <ul className='flex flex-col gap-1 mt-2'>
                            <li><p>email address</p></li>
                            <li><p>info@ncema.gov.ae</p></li>
                        </ul>
                    </div>
                    <div>
                        <img className='m-auto sm:m-0' src={call} alt="phone" />
                        <ul className='flex flex-col gap-1 mt-2'>
                            <li><p>Phone number</p></li>
                            <li><p><span>02</span>4177000</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-3'>
                <img className='max-w-[24px] m-auto sm:m-0' src={timer} alt="timer" />
                <div className='text-[14.58px]'>
                    <h2 className='font-[500]'>Working hours</h2>
                    <p className='max-w-[400px] mt-4 m-auto sm:m-0 sm:mt-4'>Monday - Friday: 9:00 AM - 6:00 PMSaturday: 10:00 AM - 4:00 PMSunday: Closed</p>
                </div>
            </div>
            
        </div>


        {/* last section */}
        <hr className='mt-8 bg-[#D4CABB]' />

        <div className='flex flex-col gap-10 mt-10 text-center sm:text-left sm:justify-start sm:gap-5 text-[11.67px]'>
            <div className='flex justify-center w-full sm:justify-start'>
                <img className='w-[54px] h-[54px]' src={logoFooter1} alt="first logo" />
                <img className='w-[54px] h-[54px]' src={logoFooter2} alt="second logo" />
            </div>
            <div>
                <div className='flex flex-col gap-6 sm:flex-row sm:justify-between'>
                    <ul className='flex flex-wrap justify-center gap-1 sm:justify-start'>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">Disclaimer <span className='text-white'>|</span></a></li>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">Privacy Policy <span className='text-white'>|</span></a></li>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">Copyright <span className='text-white'>|</span></a></li>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">Terms & Conditions <span className='text-white'>|</span></a></li>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">Sitemap <span className='text-white'>|</span></a></li>
                        <li className="h-fit"><a href="" className="transition-all duration-300 hover:text-[#8a722a] active:text-[#735d46]">cookie policy</a></li>
                    </ul>
                    <div className='flex flex-col gap-2 text-center sm:text-right'>
                        <p>Copyright 2016 National Emergency Crisis and Disasters Management Authority</p>
                        <p>الهيئة-الوطنية-لإدارة-الطوارئ-والأزمات-والكوارث.امارات</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}



export default Footer;