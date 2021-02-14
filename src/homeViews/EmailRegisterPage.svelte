<script>
  let name = 'name';
</script>

<style>
span{
	position:absolute;
	overflow: hidden;
	transform: translateX(-100%);
	transition: transform 275ms ease;
}
a:hover span{
	transform: translateX(0);
}
span::before { 
  display: inline-block;
  content: attr(data-content);
  color: rgba(251, 191, 36, 1);
  transform: translateX(100%);
  transition: transform 275ms ease;
  text-decoration: underline;
}
a:hover span::before {
  transform: translateX(0);
}

  p{
    @apply py-1;
    @apply text-lg;
    @apply text-center;
    @apply md:text-left;
    @apply lg:text-xl;
    @apply md:px-20;
  }

  input[type=text]{
    @apply w-full;
    @apply bg-gray-200;
    @apply p-2;
    @apply m-2;
    @apply md:p-5;
    @apply md:mx-0;
    @apply border-0;
    @apply border-b-2;
    @apply border-yellow-400;
  }
</style>
<div class='w-auto h-auto p-6 bg-true-blue'>
    <div class="container relative p-10 mx-auto bg-gray-100 rounded-full">
      <p class='tracking-widest text-gray-500 md:px-20 lg:ml-0'>Free download</p>
      <h4 class='text-4xl font-bold text-center md:text-left md:px-20'>Have a free homepage!</h4>
      <img class='m-3 sm:mx-auto sm:w-3/5 md:w-1/5 md:absolute md:right-4 lg:w-1/6 xl:w-40 ' src="homePage.png" alt="slanted smaller version of the homepage seen above">
      <p> You can see the principles I used to design my homepage so you can apply it to your own website.</p>
      <p>See if you like what I provide.</p>
      <p>All For free!</p>
      <form action="" method="POST" role="form" class='md:px-20 md:flex'>
        <input type='text' bind:value={name} id='Name' name='fName' placeholder='First Name'>
        <a href="mailto:noahjhein@nhein.dev?subject=Email Newsletter Subscription&body=Hi! My name is {name}, I would like to subscribe to your newsletter!"
         class='w-full p-4 m-2 text-xl text-center text-white no-underline transition duration-500 ease-in-out bg-yellow-400 border-2 border-yellow-400 hover:border-gray-100 hover:bg-true-blue md:mx-0'
          type='submit' value='Get It Now'><span data-content='Get It Now' aria-hidden='true'></span>
          Get It Now
        </a>
      </form>
      <p class='mx-8 mb-8 text-center sm:mx-12 md:mx-0 md:relative md:z-10 lg:mx-0'>This adds you to an emailing list. you will get curated content relevant to you delivered to your inbox
        You can unsubscribe at any time.
      </p>
    </div>
</div>