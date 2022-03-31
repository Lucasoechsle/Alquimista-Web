export default function Navbar() {
    return (
      <div
        className={
          'fixed w-full z-20 border-b-1  backdrop-filter backdrop-blur-lg  sm:block'
        }
      >
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-center py-3 lg:justify-end lg:space-x-10 px-4'>
            <div className='flex justify-between lg:w-0 lg:flex-1'>
              <a href='/es'>
                <span className='sr-only'>Dreamurs</span>
                {/* <img
                  className='h-14 md:h-16 w-auto hidden dark:block'
                  src='/images/Logo-01.png'
                  alt=''
                  width={540}
                  height={160}
                /> */}
                </a>
            </div>
            <a href='/es'>
                <img
                  className='h-6 md:h-8 w-auto  dark:block '
                  src='/images/instagram.svg'
                  alt=''
                  width={540}
                  height={160}
                />
            </a>
            <a href='https://twitter.com/dreamursNFT'>
                <img
                  className='h-6 md:h-8 w-auto  dark:block'
                  src='/images/twitter.svg'
                  alt=''
                  width={540}
                  height={160}
                />
            </a>
                <img
                  className='h-6 md:h-9 w-auto  dark:block '
                  src='/images/discord.svg'
                  alt=''
                  width={540}
                  height={160}
                />
                
              
            
          </div>
        </div>
      </div>
    );
  }
  