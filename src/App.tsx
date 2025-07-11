import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import heroPhone from './assets/hero-mobile.png'
import heroBlob from './assets/hero-blob.png'
import spotifyBG from './assets/spotify-bg.png'
import headphoneSVG from '../public/headphone.svg'

// Simulated Spotify fetch (replace with real fetch if token available)
const useSpotifyTopTracks = () => {
  const [tracks, setTracks] = useState<string[]>([])

  useEffect(() => {
    // Placeholder for Spotify API call
    setTimeout(() => {
      setTracks([
        'Blinding Lights',
        'Levitating',
        'Peaches',
        'Save Your Tears',
        'Watermelon Sugar',
        'Good 4 U',
      ])
    }, 1000)
  }, [])

  return tracks
}

export default function App() {
  const tracks = useSpotifyTopTracks()
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // const fadeListItem = {
  //   hidden: { opacity: 0, x: -30 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: { delay: i * 0.2, duration: 0.6 },
  //   }),
  // }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const testimonials = [
    {
      name: 'Lena',
      quote: 'Feel the Beat changed how I listen to music! Unbelievable sound quality.',
    },
    {
      name: 'Tamás',
      quote: 'I use it daily on all my devices — seamless and fun.',
    },
    {
      name: 'Aya',
      quote: 'This app is gorgeous and functional. Spotify who?',
    },
    {
      name: 'Marcus',
      quote: 'Pricing is fair, the catalog is huge, and I love the animations!',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className='bg-black text-white font-sans scroll-smooth'>
      {/* Navigation */}
      <header className='fixed top-0 w-full bg-black bg-opacity-70 z-50 shadow-md'>
        <nav className='flex justify-between items-center px-6 py-4'>
          <div className='flex justify-center align-center gap-2 text-xl font-bold'>
            <img src={headphoneSVG} alt='headphone icon' className='w-10' />
            <h1 className='flex text-align-center p-2'>Feel the Beat</h1>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} aria-label='Toggle menu'>
              {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
          <ul className='hidden md:flex space-x-6 text-sm md:text-base'>
            <li>
              <a href='#hero' className='hover:text-green-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#features' className='hover:text-green-400'>
                Features
              </a>
            </li>
            <li>
              <a href='#testimonials' className='hover:text-green-400'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#pricing' className='hover:text-green-400'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#spotify' className='hover:text-green-400'>
                Spotify
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            className='flex flex-col items-center space-y-4 bg-black py-4 md:hidden'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li>
              <a href='#hero' onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href='#features' onClick={toggleMenu}>
                Features
              </a>
            </li>
            <li>
              <a href='#testimonials' onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#pricing' onClick={toggleMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href='#spotify' onClick={toggleMenu}>
                Spotify
              </a>
            </li>
          </motion.ul>
        )}
      </header>

      {/* Hero Section */}
      <section
        id='hero'
        className='relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-white text-black pt-32 px-6 overflow-hidden'
      >
        {/* Left Text Content */}
        <motion.div
          className='flex-1 max-w-lg text-center lg:text-left z-12'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className='text-5xl md:text-6xl font-bold mb-6 '
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            It's play time.
          </motion.h1>
          <p className='text-lg md:text-xl mb-6'>
            Say hello to the most entertaining Spotify ever. Play free or subscribe to Spotify
            Premium.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <motion.button
              className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PLAY FREE
            </motion.button>
            <motion.button
              className='border border-black hover:bg-gray-200 text-black px-6 py-3 rounded-full font-semibold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GO PREMIUM
            </motion.button>
          </div>
          <p className='text-sm text-gray-600 mt-4'>
            Play on-demand, offline and ad-free. Take a free trial.
          </p>
        </motion.div>

        {/* Right Phone Image with Green Shape */}
        <motion.div
          className='flex-1 w-full max-w-lg relative'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute -top-10 -right-80 md:min-w-[50%] max-w-[190%] z-0 rotate-180'>
            <img src={heroBlob} alt='Background shape' className='w-full h-full object-contain' />
          </div>
          <div className='relative z-10'>
            <img
              src={heroPhone}
              alt='Spotify on phone'
              className='w-full h-auto drop-shadow-xl rounded-lg'
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-4 md:px-16 bg-gray-900'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-12'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
            <div className='text-green-400 text-5xl mb-4'>🎧</div>
            <h3 className='text-xl font-semibold mb-2'>High Quality Audio</h3>
            <p>Experience music like never before with crystal clear sound.</p>
          </motion.div>
          <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
            <div className='text-blue-400 text-5xl mb-4'>📱</div>
            <h3 className='text-xl font-semibold mb-2'>Cross-Platform</h3>
            <p>Enjoy seamless streaming on mobile, tablet, and desktop.</p>
          </motion.div>
          <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
            <div className='text-purple-400 text-5xl mb-4'>🎵</div>
            <h3 className='text-xl font-semibold mb-2'>Endless Library</h3>
            <p>Millions of songs, playlists, and podcasts at your fingertips.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-20 px-4 md:px-16 bg-gray-800 text-center'>
        <motion.h2
          className='text-3xl md:text-5xl font-bold mb-12'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>
        <div className='relative max-w-3xl mx-auto'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-lg md:text-xl'
          >
            <p className='italic mb-4'>“{testimonials[currentIndex].quote}”</p>
            <p className='font-semibold text-green-400'>- {testimonials[currentIndex].name}</p>
          </motion.div>
          <div className='flex justify-center mt-6 space-x-2'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === currentIndex ? 'bg-green-400' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 md:px-16 bg-gray-900'>
        <motion.h2
          className='text-3xl md:text-5xl font-bold text-center mb-12'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {['Free', 'Premium', 'Family'].map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-700 hover:border-green-400 transition-all'
            >
              <h3 className='text-2xl font-bold mb-4 text-green-400'>{plan}</h3>
              <p className='text-5xl font-extrabold mb-4'>
                {plan === 'Free' ? '$0' : plan === 'Premium' ? '$9.99' : '$14.99'}
              </p>
              <ul className='space-y-3 mb-6 text-left text-sm md:text-base'>
                {plan === 'Free' && (
                  <>
                    <li>✓ Ad-supported listening</li>
                    <li>✓ Limited skips</li>
                    <li>✓ Standard quality audio</li>
                  </>
                )}
                {plan === 'Premium' && (
                  <>
                    <li>✓ Ad-free experience</li>
                    <li>✓ Unlimited skips</li>
                    <li>✓ Offline listening</li>
                    <li>✓ High quality audio</li>
                  </>
                )}
                {plan === 'Family' && (
                  <>
                    <li>✓ All Premium features</li>
                    <li>✓ 6 accounts</li>
                    <li>✓ Parental controls</li>
                    <li>✓ Family Mix playlist</li>
                  </>
                )}
              </ul>
              <button className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition'>
                {plan === 'Free' ? 'Start Free' : 'Subscribe'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotify Section */}
      <section id='spotify' className='relative py-20 px-6 bg-neutral-900 overflow-hidden'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl font-bold mb-4 text-green-400'>Your Top Tracks</h2>
          <p className='text-lg text-gray-300'>Here are some of your recently played songs.</p>
        </motion.div>

        <motion.ul
          className='relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {tracks.map((track, index) => (
            <motion.li
              key={index}
              className='bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-neutral-700 transition'
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className='text-xl font-semibold text-white'>{track}</h3>
              <p className='text-sm text-gray-400 mt-2'>Your favorite beats, updated daily.</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Background Image (Right Side) */}
        <div className='flex justify-center align-center relative '>
          <div className='flex justify-center align-center absolute -top-140 w-80% opacity-25 z-0 '>
            <img src={spotifyBG} alt='Listening girl background' className='w-full rounded-2xl' />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black text-gray-400 px-6 pt-16 pb-12'>
        <div className='max-w-6xl mx-auto flex-direction-column sm:gap-4 sm:flex md:justify-between px-6'>
          <div>
            <h3 className='text-white text-xl font-bold mb-4 pt-2'>Feel the Beat</h3>
          </div>
          <div className='my-4 sm:mx-4'>
            <h4 className='uppercase font-semibold text-sm mb-2 text-white mb-4'>Company</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='hover:text-white'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Jobs
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  For the Record
                </a>
              </li>
            </ul>
          </div>
          <div className='my-4 sm:mx-4'>
            <h4 className='uppercase font-semibold text-sm mb-2 text-white mb-4'>Communities</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='hover:text-white'>
                  For Artists
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Developers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Brands
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Investors
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Vendors
                </a>
              </li>
            </ul>
          </div>
          <div className='my-4 sm:mx-4'>
            <h4 className='uppercase font-semibold text-sm mb-2 text-white mb-4'>Useful Links</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='hover:text-white'>
                  Help
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Web Player
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Free Mobile App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-700 pt-6 text-sm text-center space-y-2'>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#' className='hover:text-white'>
              Legal
            </a>
            <a href='#' className='hover:text-white'>
              Privacy Center
            </a>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white'>
              Cookies
            </a>
            <a href='#' className='hover:text-white'>
              About Ads
            </a>
            <a href='#' className='hover:text-white'>
              Additional CA Privacy Disclosures
            </a>
          </div>
          <p className='flex justify-center items-center gap-2'>
            <span>USA</span>
            <span role='img' aria-label='flag'>
              🇺🇸
            </span>
          </p>
          <p className='mt-2'>© 2025 Feel the Beat</p>
        </div>
      </footer>
    </div>
  )
}
