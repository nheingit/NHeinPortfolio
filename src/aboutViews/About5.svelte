<script>
import {slide} from 'svelte/transition';
import {quintInOut} from 'svelte/easing';
  let isHover = false;
</script>
<div class='w-full h-auto bg-gray-100 sm:h-full'>
  <div class='flex flex-col justify-between h-full py-3 mx-auto '>
    <div class='sm:flex'>
      <img src='homeIcon.svg' alt='icon of a home' class='pb-2 mx-auto sm:hidden'>
      <div class='p-6 transition-colors duration-200 ease-in bg-true-blue hover:bg-blue-400'>
        <b>Landing Page</b>
        <p>Tell me what you want on the landing page and send me some pages or designs that inspire you. After that, we're off to the races!</p>
      </div>
      <img src='homeIcon.svg' alt='icon of a home' class='hidden sm:block md:mx-16'>
    </div>
    <div class='my-12 sm:flex'>
      
      <img src='dollarIcon.svg' alt='icon of a $' class='pb-2 mx-auto md:mx-16'>
      <div class='p-6 transition-colors duration-200 ease-in bg-true-blue hover:bg-blue-400'>
        <b>E-Commerce/SaaS</b>
        <p>We can discuss all of the features you would like on your platform and what it is you want to deliver to the customers. We get to collaborate on what would work best for you, and deliver results to your customers!</p>
      </div>
    </div>
    <div class='sm:flex'>
      <div class='p-6 mr-3 transition-colors ease-in bg-true-blue dutaion-200 hover:bg-blue-400'>
        <b>Mobile App</b>
        <p>Are you looking to expand your current product or service to the mobile realm?</p>
        <p>Let me help you!</p>
      </div>
      <div class='md:w-1/2 lg:w-1/3 lg:mx-auto'>
        <button on:mouseleave="{()=> isHover = false}" on:mouseenter="{() => isHover = true}"  onclick="location.href='https://calendly.com/nheindev'" class='p-3 text-white bg-yellow-400 md:w-full md:h-1/3 md:mt-2'>Let's See What I Can Do For You</button>
          {#if !isHover}
          <svg transition:slide={{delay: 100, duration: 300, easing: quintInOut}} class='mx-auto md:h-1/3 md:pt-1' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 13.3H34.7V9.9C36.3 9.1 37.4 7.2 37.4 5.4C37.3 2.4 34.9 0 32 0C29.1 0 26.7 2.4 26.7 5.3C26.7 7.2 27.8 9 29.4 9.8V13.3H4C1.9 13.3 0 14.9 0 17.3V60C0 62.1 1.9 64 4 64H60C62.1 64 64 62.1 64 60V32V26.7V17.4C64 15.2 62.1 13.3 60 13.3ZM58.7 58.7H5.3V32H58.6V58.7H58.7ZM5.3 26.7V18.7H58.6V26.7H5.3Z" fill="#FFB75E"/>
            <path d="M14.7001 42.6999H17.4001C18.2001 42.6999 18.7001 42.1999 18.7001 41.3999V38.6999C18.7001 37.8999 18.2001 37.3999 17.4001 37.3999H14.7001C13.9001 37.3999 13.4001 37.8999 13.4001 38.6999V41.3999C13.3001 42.0999 13.9001 42.6999 14.7001 42.6999Z" fill="#FFB75E"/>
            <path d="M25.3 42.6999H28C28.8 42.6999 29.3 42.1999 29.3 41.3999V38.6999C29.3 37.8999 28.8 37.3999 28 37.3999H25.3C24.5 37.3999 24 37.8999 24 38.6999V41.3999C24 42.0999 24.5 42.6999 25.3 42.6999Z" fill="#FFB75E"/>
            <path d="M36 42.6999H38.7C39.5 42.6999 40 42.1999 40 41.3999V38.6999C40 37.8999 39.5 37.3999 38.7 37.3999H36C35.2 37.3999 34.7 37.8999 34.7 38.6999V41.3999C34.7 42.0999 35.2 42.6999 36 42.6999Z" fill="#FFB75E"/>
            <path d="M46.7001 42.6999H49.4001C50.2001 42.6999 50.7001 42.1999 50.7001 41.3999V38.6999C50.7001 37.8999 50.2001 37.3999 49.4001 37.3999H46.7001C45.9001 37.3999 45.4001 37.8999 45.4001 38.6999V41.3999C45.3001 42.0999 45.9001 42.6999 46.7001 42.6999Z" fill="#FFB75E"/>
            <path d="M14.7001 53.3H17.4001C18.2001 53.3 18.7001 52.8 18.7001 52V49.3C18.7001 48.5 18.2001 48 17.4001 48H14.7001C13.9001 48 13.4001 48.5 13.4001 49.3V52C13.3001 52.8 13.9001 53.3 14.7001 53.3Z" fill="#FFB75E"/>
            <path d="M25.3 53.3H28C28.8 53.3 29.3 52.8 29.3 52V49.3C29.3 48.5 28.8 48 28 48H25.3C24.5 48 24 48.5 24 49.3V52C24 52.8 24.5 53.3 25.3 53.3Z" fill="#FFB75E"/>
            <path d="M36 53.3H38.7C39.5 53.3 40 52.8 40 52V49.3C40 48.5 39.5 48 38.7 48H36C35.2 48 34.7 48.5 34.7 49.3V52C34.7 52.8 35.2 53.3 36 53.3Z" fill="#FFB75E"/>
            <path d="M46.7001 53.3H49.4001C50.2001 53.3 50.7001 52.8 50.7001 52V49.3C50.7001 48.5 50.2001 48 49.4001 48H46.7001C45.9001 48 45.4001 48.5 45.4001 49.3V52C45.3001 52.8 45.9001 53.3 46.7001 53.3Z" fill="#FFB75E"/>
          </svg>
          {/if}
      </div>

    </div>
  </div>
</div>