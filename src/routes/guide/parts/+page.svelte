<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import GuideMD from './guide.md.svx';
    import Sidebar from '../Sidebar.svelte';
  
    let isClient = false;
  
    onMount(() => {
      isClient = true;
    });
  
    const sidebarLinks = [
      { href: '/guide', label: 'DIY Guide' },
      { href: '/guide/parts', label: 'Parts List' },
    ];
  </script>
  
  <style>
    .fade-in {
      animation: fadeIn 1s ease-in-out;
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>
  
  <div class="flex flex-col min-h-screen">
    <header class="bg-slate-100 text-white fixed top-0 z-10 w-full border-b-4 border-slate-500 border-dashed">
      <div>
        <h1 class="text-2xl font-bold font-mono flex justify-between ml-4">
          <a href="/" class="text-black bg-green-400 px-2 py-1 rounded-sm my-2">
            HACKY HOLIDAYS
          </a>
          <img 
            src="/OrpheusFlag.svg" 
            alt="Orpheus Flag" 
            width="48" 
            height="48" 
            class="max-w-12 sm:max-w-24 hidden sm:right-20 sm:block absolute" 
          />
          <a 
            href="https://github.com/hackclub/onboard" 
            class="block" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub repository"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-8 h-8 fill-current transition-all text-slate-950 hover:text-cyan-800 inline-block my-2 mr-6">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6z"/>
            </svg>
          </a>
        </h1>
      </div>
    </header>
  
    <div class="flex flex-1 pt-16">
      <!-- Sidebar -->
      <aside class="hidden sm:block w-48 fixed top-16 h-full">
        <Sidebar links={sidebarLinks} />
      </aside>
  
      <main class="flex-1 p-8 max-w-4xl mx-auto sm:ml-48">
        <div class="prose prose-slate prose-headings:my-4 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 fade-in" in:fade>
          <GuideMD /> <!-- Render the MDX content -->
        </div>
      </main>
    </div>
  </div>