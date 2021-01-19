<script>
	import Tailwindcss from '../Tailwindcss.svelte';
</script>

<div class='object-cover h-auto bg-cover bg-coding-computer'>
	<div class="container max-w-lg mx-auto sm:max-w-xl lg:max-w-full lg:flex lg:h-screen">

		<!-- div container for left LG Font -->
		<div class='lg:w-1/2'> 
			<h1 class='px-2 py-8 font-serif text-4xl font-bold text-center md:text-5xl lg:text-7xl lg:leading-normal lg:py-2 lg:tracking-tight xl:text-8xl xl:tracking-normal xl:my-8'>Hello! I’m Noah Hein, I design and build
		websites for entrepreneurs and startups</h1>
		</div>
		
		<!--div Container for Right side-->
		<div class='font-sans lg:w-1/2'>
				<div class= 'bg-opacity-70 bg-true-blue sm:mt-8 lg:h-96'>
				<div class='container flex justify-around pt-3 m-0 md:text-xl lg:text-2xl xl:text-3xl'>
					<a class='no-underline visited:text-black hover:no-underline' alt='link to homepage' href='/'>Home</a>
					<a class='no-underline visited:text-black hover:no-underline' alt='link to about page' href='/'>About</a>
					<!--Button needs to be updated to not go to google-->
					<button type='button' onclick="location.href='https://google.com'" value='go to google' class='flex p-1 border-2 border-yellow-400 rounded hover:bg-yellow-400 hover:text-white out border-'>Say Hello <img class='py-1 mx-2 h-7' src='chatBox.svg' alt='chat box icon'> </button>	
				</div>
				<img class='relative pl-4 mx-auto pointer-events-none -top-16 md:h-96 md:py-5 md:w-2/3 md:object-cover md:object-center md:-top-0 lg:absolute lg:w-1/3 lg:h-3/5 lg:inset-y-40 lg:right-20' src='meImage.png' alt="Noah Hein">
				<!--off-blue background for picture-->
		</div>
		<div class='flex justify-center align-middle lg:my-56'>
			<button class='p-2 px-20 my-3 text-lg text-white bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-true-blue hover:bg-yellow-500 md:p-4 md:px-32 md:text-xl lg:w-64 lg:p-2 xl:p-5 xl:w-80 xl:ml-14'> HOW I CAN HELP</button>
		</div>	
		</div>
		</div>
		</div>