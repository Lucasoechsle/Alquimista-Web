export default function Footer() {
  return (
    <footer className='border-t-2 bg-black px-4' aria-labelledby='footerHeading'>
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto  py-0 px-6'>
        <div className='flex items-center justify-between border-black'>
          <p className='my-8 text-base leading-tight text-white'>
            Alquimista &copy;
            <br />
            <span className=' sm:inline-block'>Powered by bircle®</span>
            <br />
            <span className='hidden sm:inline-block'>All Rights Reserved.</span>
          </p>
          <a
            href='https://bircle.io'
            target='_blank'
            rel='noopener noreferrer'
          >
          <img src='/images/birclee.png' className='my-8 h-12' />
          </a>
        </div>
      </div>
    </footer>
  );
}