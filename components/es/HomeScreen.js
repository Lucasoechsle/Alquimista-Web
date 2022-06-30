export default function Component() {
  return (

    
      <div className="mx-auto grid h-screen min-h-full  bg-black items-center justify-center">
        
      
          <div className='items-center lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1 lg:gap-10 lg:px-8'>
            <div className='p-6 mx-auto max-w-xl sm:px-6 lg:col-start-1 lg:mx-0 lg:max-w-none lg:py-0 lg:px-0 mt-16 w-96' >
              <img
                className='w-full -mt-10' 
                width={800}
                height={800}
                src='/images/alquimista.svg'
              />
            </div>
      
        

      
          </div>
        

    
  
  

        <div className=' content-center relative px-0 py-1 sm:py-1 text-center place-self-center bg-transparent -mt-10'>
                
          <img className='mx-auto max-w-auto sm:flex sm:justify-center sm-w-[75%] md-w-[75%] rounded-full' src='/images/AlquimistaRender.gif'/>
                          
        </div> 


        <div className='text-2xl tracking-tight-2 lg:p-0 p-0 lg:text-4xl md:text-4x1 place-self-center p-3 -mt-6 content-center text-center place-self-center mb-4'>
                  <span className='font-brandon text-white lg:leading-tight '>
                  Join us, turn on notifications and don't miss our first drop...
                  </span>
        </div>

        
        <div className='mx-auto mt-10 max-w-7xl text-center sm:flex sm:max-w-none sm:justify-center -mt-8'>
          <div className='grid gap-3 grid-cols-2 sm:gap-5'>
              <a
                href='https://discord.gg/XcvRNnBzbb'
                target='_blank'
                className='rounded-md border border border-transparent border-transparent bg-zinc-800 bg-origin-border px-6 py-3 font-medium text-white sm:px-8 sm:py-3 md:text-lg'
              >
                Discord
              </a>
              <a
                href='https://twitter.com/alquimistaginok'
                target='_blank'
                className='rounded-md border border border-transparent border-transparent bg-zinc-800 bg-origin-border px-6 py-3 font-medium text-white sm:px-8 sm:py-3 md:text-lg'
              >
                Twitter
              </a>
            </div>
        
        </div>
        
        


      





      </div>
  );
}