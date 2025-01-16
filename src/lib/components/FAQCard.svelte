<script>
    export let question;
    export let answer;
  </script>
  
  <div class="rounded-2xl p-8 m-4 bg-blue-100 bg-opacity-75 shadow-md w-full md:min-w-[250px] lg:min-w-[300px] border-4 border-blue-300 overflow-hidden max-h-[500px] flex flex-col justify-start">
    <h3 class="text-lg md:text-2xl font-extrabold text-blue-900 mb-2 leading-tight">
      {question}
    </h3>
    <p class="text-base md:text-lg text-blue-900 font-semibold flex-grow">
      {answer}
    </p>
  </div>