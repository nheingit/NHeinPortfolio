<script>
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
</style>

<div class='object-cover h-auto bg-fixed bg-coding-computer'>
	<div class="container max-w-lg mx-auto sm:max-w-xl lg:max-w-full lg:flex lg:h-screen">

		<!-- div container for left LG Font -->
		<div class='lg:w-2/3'> 
			<div class='h-full p-3 py-4 bg-gray-100 bg-opacity-60 sm:mt-8 lg:mt-0'>
 		   <h1 class='px-2 py-8 font-serif text-4xl font-bold text-center lg:text-7xl xl:text-8xl 2xl:text-9xl'>Hello! I’m Noah Hein, I design and build
				websites for entrepreneurs and startups</h1>
			</div>
		</div>
		
		<!--div Container for Right side-->
		<div class='font-sans lg:w-1/2'>
				<div class= 'bg-opacity-70 bg-true-blue sm:mt-8 lg:mt-2 lg:h-96 xl:h-screen/2'>
				<div class='container flex justify-around pt-3 m-0 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
					<a class='no-underline visited:text-black hover:no-underline' alt='link to about page' href='/about'>
						<span data-content='About' aria-hidden='true'></span>About</a>
					<!--Button needs to be updated to not go to google-->
					<a href="mailto:noahjhein@nhein.dev?subject=My Website&body=Hi Noah, I'd like to talk about my project!" target="_blank" rel="noopener noreferrer" value='Shoot me an Email' class='flex p-1 no-underline transition-all duration-700 ease-in border-2 border-yellow-400 rounded hover:border-black out border-'><span data-content='Say Hello' aria-hidden="true" class='pointer-events-none'></span>Say Hello <img class='py-1 mx-2 h-7' src='chatBox.svg' alt='chat box icon'> </a>
				</div>
				<img class='p-4 mx-auto pointer-events-none lg:relative lg:h-96 top-32' src='meImageDark.jpg' alt="Noah Hein">
				<!--off-blue background for picture-->
		</div>
		<div class='flex justify-center align-middle lg:my-56'>
			<button onclick="location.href='https://calendly.com/nheindev'" class='p-2 px-20 my-3 text-lg text-white bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-true-blue hover:bg-yellow-500 md:p-4 md:px-32 md:text-xl lg:w-64 lg:p-2'>Talk With Me</button>
			
		</div>
		</div>
		</div>
		</div>