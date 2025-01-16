<script>
  export let links = [];
</script>

<aside class="bg-slate-100 p-4 h-screen border-r-4 border-slate-500 border-dashed max-w-prose">
  <nav>
    <ul>
      {#each links as { href, label }}
        <li>
          <a href={href} class="block py-2 px-4 rounded text-slate-900 transition-all no-underline hover:bg-slate-200 hover:text-cyan-800">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>