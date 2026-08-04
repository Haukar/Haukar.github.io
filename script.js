const projects = [

{
title:"Portfolio Website",
language:"Javascript, Tailwind CSS, Html",
description:"Een portfolio website gebouwd met JavaScript, Tailwind CSS en HTML",
github:"https://github.com/Haukar/Haukar.github.io"
},


{
title:"Solana Webscraper",
language:"Python",
description:"Een modulaire, uitbreidbare marktinformatie-scraper voor Solana (SOL).",
github:"https://github.com/Haukar/SolanaWebscraper"
}

];



const container=document.getElementById("projects");



projects.forEach(project=>{


container.innerHTML += `

<div class="
bg-gray-800 
rounded-2xl
p-6
w-72
text-center
hover:-translate-y-2
transition
hover:shadow-lg
hover:shadow-cyan-500/50
">


<h3 class="text-2xl font-bold">
${project.title}
</h3>


<p class="mt-3">
${project.description}
</p>


<span class="
inline-block
mt-4
bg-cyan-600
px-4
py-2
rounded-full">

${project.language}

</span>


<br>


<a 
href="${project.github}"
target="_blank"
class="
inline-block
mt-5
text-cyan-400
hover:text-white">

GitHub →

</a>


</div>


`;

});