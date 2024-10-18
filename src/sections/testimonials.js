const { testimonials } = require("@/content/content");

const Testimonials = () => {
  return (
    <div class="flex items-center justify-center">
        <div class="w-full">
          <div class="text-center max-w-xl mx-auto">
            <h1 class="text-5xl md:text-5xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
            <h3 class="text-xl mb-5 font-light">Here are some testimonials by our club members....</h3>
            <div class="text-center mb-10">
              <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div class="md:flex">
            <div class="px-3 w-full flex flex-wrap gap-1">
                {
                    testimonials.reviews.map((test,index)=>{
                     return <div key={index} class="md:w-[33%] rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                     <div class="w-full flex mb-4 items-center">
                       <div class="flex-grow">
                         <h6 class="font-bold text-sm uppercase text-gray-600">
                          {test.user}
                         </h6>
                       </div>
                     </div>
                     <div class="w-full">
                       <p class="text-sm leading-tight">
                         <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                           "
                         </span>
                        {test.desc}
                         <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                           "
                         </span>
                       </p>
                     </div>
                   </div>
                    })
                }
              
            </div>
          </div>
        </div>
    </div>
  );
};


export default Testimonials;