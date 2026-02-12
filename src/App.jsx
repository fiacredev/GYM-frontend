import { useState, useEffect } from 'react'
import { Home, Search, User,Dumbbell, HeartCrack, RocketIcon,ArrowBigDown,ArrowRight,Mail} from 'lucide-react'
import './input.css'
import gym from './assets/images/less.jpg'


function App() {

    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
      let timer = null;

      const handleScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        if (y > 50) {
          // user scrolled down — start or restart the delay
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => setNavSticky(true), 2); // becomes fixed after 1.5s
        } else {
          // near top — cancel and reset
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          setNavSticky(false);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (timer) clearTimeout(timer);
      };
    }, []);

    return (
      <>
        <div
          style={{ backgroundImage: `url(${gym})` }}
          className="bg-cover bg-center min-h-screen relative"
        >
          {/* translucent overlay for better contrast */}
          <div className="absolute inset-0 bg-black/50" />

          <nav
            className={`relative z-10 ${navSticky ? 'sticky top-0 left-0 w-full bg-blue-500 transparent' : ''
              }`}
          >
            {/* bg-black/20 backdrop-blur-sm shadow-md transition-all duration-300 */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                  <h3 className="text-white text-4xl font-extrabold tracking-wider">
                    GYM
                  </h3>
                </div>

                <div className="hidden md:block">
                  <ul className="flex items-center space-x-6 font-medium">
                    <li>
                      <a
                        href="/"
                        className="text-white/90 hover:text-blue-300 transition"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        href="#about"
                        className="text-white/80 hover:text-blue-300 transition"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#contacts"
                        className="text-white/80 hover:text-blue-300 transition"
                      >
                        Contacts
                      </a>
                    </li>

                    <li>
                      <a
                        href="#services"
                        className="text-white/80 hover:text-blue-300 transition"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href="#home"
                    aria-label="Home"
                    className="p-2 rounded-md text-white/90 hover:text-blue-300 hover:bg-white/10 transition"
                  >
                    <Home size={20} />
                  </a>

                  <a
                    href="#"
                    aria-label="Search"
                    className="p-2 rounded-md text-white/90 hover:text-blue-300 hover:bg-white/10 transition"
                  >
                    <Search size={20} />
                  </a>

                  <a
                    href="#"
                    aria-label="Profile"
                    className="p-2 rounded-md text-white/90 hover:text-blue-300 hover:bg-white/10 transition"
                  >
                    <User size={20} />
                  </a>

                  <button className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transform transition">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* spacer to avoid content jump when nav becomes fixed */}
          
          {navSticky && <div className="h-20" />}

          <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between py-24">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  Ultimate CrossFit
                </h1>
                <p className="mt-4 text-lg text-white/90 max-w-2xl">
                  Strength training facility focused on functional fitness,
                  community, and results. Build strength, agility, and confidence
                  with tailored programs and expert coaches.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 transition">
                    Get Started
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full border border-white/20">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                  <h4 className="text-white text-lg font-semibold">Quick Signup</h4>
                  <p className="mt-2 text-white/80 text-sm">
                    Try a free class today — limited spots available.
                  </p>
                  <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold px-4 py-3 rounded-lg shadow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
       


       {/* section about our services */}
        

        <div className='text-center py-20 space-y-6'>
          <div className='space-y-7'>
            <h3 className='text-5xl font-bold'>Our Services</h3>
            <ArrowBigDown size={40} className="mb-4 text-blue-500 mx-auto" />
          </div>

          <div className='flex items-center justify-center space-x-10 pr-10 pt-10'>

            <div className='mx-10 p-10 border-2 border-blue-200 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center space-y-7'>
              <Dumbbell size={40} className="mb-4 text-blue-500 mx-auto" />
                <h5 className='capitalize font-bold text-gray-700 text-xl'>personal training</h5>
                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste sapiente soluta ut dolorum iure, sint animi,
                    magnam voluptate saepe cum expedita laboriosam et?
                      Et inventore, ut fugit deserunt ex nemo?
                  </h3>
                  <ArrowRight size={30} className="mt-4 text-blue-500 mx-auto" />
            </div>
            
            <div className='mx-10 p-10 border-2 border-blue-200 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center space-y-7'>
              <Dumbbell size={40} className="mb-4 text-blue-500 mx-auto" />
                <h5 className='capitalize font-bold text-gray-700 text-xl'>personal training</h5>
                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste sapiente soluta ut dolorum iure, sint animi,
                    magnam voluptate saepe cum expedita laboriosam et?
                      Et inventore, ut fugit deserunt ex nemo?
                  </h3>
                  <ArrowRight size={30} className="mt-4 text-blue-500 mx-auto" />
            </div>
            
            <div className='mx-10 p-10 border-2 border-blue-200 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center space-y-7'>
              <Dumbbell size={40} className="mb-4 text-blue-500 mx-auto" />
                <h5 className='capitalize font-bold text-gray-700 text-xl'>personal training</h5>
                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste sapiente soluta ut dolorum iure, sint animi,
                    magnam voluptate saepe cum expedita laboriosam et?
                      Et inventore, ut fugit deserunt ex nemo?
                  </h3>
                  <ArrowRight size={30} className="mt-4 text-blue-500 mx-auto" />
            </div>

          </div>
        </div>

       {/* what we offer */}

        <div className="flex items-center justify-center flex-col py-20 space-y-6">
          <h5 className="uppercase font-bold">what we offer</h5>
          <h3 className="capitalize font-bold text-6xl">
            archieve amazing results <br />
            with our services..
          </h3>

          <div className="flex items-center justify-between py-20 space-y-7">
            <div className="mx-10 p-10 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center">
              <Dumbbell size={40} className="mb-4 text-blue-500 mx-auto" />
              <br />
              <h3 className="capitalize font-bold">best equipment</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint,
                perferendis reprehenderit fugit ipsum esse, maxime repellendus,
              </p>
            </div>

            <div className="mx-10 p-10 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center">
              <HeartCrack size={40} className="mb-4 text-blue-500 mx-auto" />
              <br />
              <h3 className="capitalize font-bold">best equipment</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint,
                perferendis reprehenderit fugit ipsum esse, maxime repellendus,
              </p>
            </div>

            <div className="mx-10 p-10 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center">
              <RocketIcon size={40} className="mb-4 text-blue-500 mx-auto" />
              <br />
              <h3 className="capitalize font-bold">best equipment</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint,
                perferendis reprehenderit fugit ipsum esse, maxime repellendus,
              </p>
            </div>

            <div className="mx-10 p-10 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 text-center">
              <Dumbbell size={40} className="mb-4 text-blue-500 mx-auto" />
              <br />
              <h3 className="capitalize font-bold">best equipment</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint,
                perferendis reprehenderit fugit ipsum esse, maxime repellendus,
              </p>
            </div>

          </div>


          {/* welcome to the gym section */}
          
        <div className='flex items-center jsutify-between space-x-10 pt-10 px-10'>
          <img src={gym} alt="" className='w-25 rounded' style={{marginTop:"-140px"}}/>
          <div className='space-y-7'>
            <h3 className='text-2xl capitalize font-bold'>welocome to the gym..</h3>
            <h2 className='text-3xl font-bold'>
              forget all your worries and: <br />
              gym and crossfit <br /> adgventures
            </h2>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna <br />
               Ut enim ad minim.
            </p>
            <img src={gym} alt=""  className='w-25 rounded'/>
          </div>
        </div>


        {/* contact us page */}


          <div className='flex items-center justify-between space-x-30 space-y-10 pt-20 p-20 bg-gray-200 py-10 w-full'>

            <div className='space-y-10'>
            <h2 className='text-5xl font-bold'>GYM</h2>
            <form action="">
              <div className='flex items-center'>
              <Mail/><input type="text" placeholder='enter your email' className='border-b-2 rounded-lg p-2 m-2 outline-none bg-transparent'/>
              </div>
              <hr />
              <input type="checkbox" /> i agree to the <a href="" className='underline'>privacy policy</a>
            </form>
          </div>
          
          <div className='spce-y-10 p-30 p-20 rounded-lg'>

            <h2 className='text-4xl capitalize font-bold' style={{marginLeft:"65px"}}>transform your body,<br />
            transform your life.</h2>

            <div className='flex items-center justify-between space-x-10 pt-10 px-10'>

              <table className='text-left mr-10 p-5 border-separate border-spacing-3 min-w-full border-collapse space-y-7' style={{border:"1",cellpadding:"18"}}>

                  <tr>
                    <th>Socials</th>
                    <th>Menu</th>
                    <th>Say hello</th>
                  </tr>

                  <tr>
                    <td>facebook</td>
                    <td>Home</td>
                    <td>inf@gmail.com</td>
                  </tr>

                  <tr>
                    <td>instagram</td>
                    <td>About us</td>
                  </tr>

                  <tr>
                    <td>drible</td>
                    <td>Services</td>
                  </tr>

                  <tr>
                    <td>twitter</td>
                    <td>Contacts</td>
                  </tr>

                  <tr>
                    <td>x</td>
                    <td>Shop</td>
                  </tr>

              </table>

              <hr  className='boder-b-3 text-red-200'/>

          </div>

          </div>


        </div>




        </div>
      
      </>
    )
}

export default App
