import React from 'react';

function Hero(){
    return (
        <>
            <div className=" mainhero grid grid-cols-12 mt-35 bg-[#0B1830] 
                max-[480px]:grid-cols-1">

  {/* LEFT SIDE → 7 Columns */}
  <div className="col-span-7 ml-20 flex items-center  
                max-[480px]:col-span-1 
                max-[480px]:order-2 
                max-[480px]:ml-0 
                max-[480px]:px-6">
    <div className=" heroclass pt-3 pl-3 space-y-4 ">

      <h2 className="text-white text-8xl 
               max-[480px]:text-3xl">
        Hi, I'm Praveen
      </h2>

      <h1
        id="typeText"
        className="typewriter text-[10rem] font-bold text-[#22D3EE] text-[10rem] max-[480px]:text-4xl"
        onMouseEnter={() => {
          const el = document.getElementById("typeText");
          el.style.animation = "none";
          void el.offsetWidth;
          el.style.animation =
            "typing 4s steps(24,end) forwards, blink 0.8s linear 5";
        }}
      >
        Full Stack Web Developer
      </h1>

      <p className="text-gray-400 text-2xl 
              max-[480px]:text-base  ">
        MERN Full Stack Developer building scalable web applications, <br /> with strong problem-solving skills and object-oriented <br />programming expertise in Java.
      </p>

    </div>
  </div>

  {/* RIGHT SIDE → 5 Columns */}
  <div className=" heroimage col-span-5 flex items-center justify-center mr-11
                max-[480px]:col-span-1
                max-[480px]:order-1
                max-[480px]:mr-0
                max-[480px]:mb-6">
    <img
      className="w-[90%] max-h-[90vh]
             max-[480px]:w-[80%]
             max-[480px]:h-[40vh]
             object-contain "
      src="/portfolioImage.svg"
      alt="Portfolio"
    />
  </div>

</div>
        </>
    )
}

export default Hero;