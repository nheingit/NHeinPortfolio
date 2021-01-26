<style>
  p{
    @apply py-1;
    @apply text-lg;
    @apply text-center;
    @apply lg:text-xl;
  }
  input[type=email]{
    @apply w-full;
    @apply p-2;
    @apply bg-gray-200;
    @apply m-2;
    @apply border-0;
    @apply border-b-2;
    @apply border-yellow-400;
  }
  input[type=text]{
    @apply w-full;
    @apply bg-gray-200;
    @apply p-2;
    @apply m-2;
    @apply border-0;
    @apply border-b-2;
    @apply border-yellow-400;
  }
</style>
<div class='w-auto h-auto p-6 bg-true-blue'>
    <div class="container p-10 mx-auto bg-gray-100 rounded-full">
      <p class='tracking-widest text-gray-500 sm:text-center'>Free download</p>
      <h4 class='text-4xl font-bold text-center'>Have a free homepage!</h4>
      <img class='m-3 sm:mx-auto sm:w-3/5 lg:w-1/3' src="homePage.png" alt="slanted smaller version of the homepage seen above">
      <p> You can see the principles I used to design my homepage so you can apply it to your own website.</p>
      <p>See if you like what I provide.</p>
      <p>All For free!</p>
      <form class='md:px-16 lg:mx-12'>
        <input type='text' name='fName' placeholder='First Name'>
        <input type='email' name='email' placeholder='email'>
        <input  class='w-full p-2 m-2 bg-gray-200 border-2 border-yellow-400' type='submit' value='Get It Now'>
      </form>
      <p class='mx-8 mb-8 text-center sm:mx-12 md:mx-16 lg:px-16'>This adds you to an emailing list. you will get curated content relevant to you delivered to your inbox
        You can unsubscribe at any time.
      </p>
    </div>
</div>