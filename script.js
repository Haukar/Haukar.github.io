const projects = [

{
title:"Portfolio Website",
language:"Javascript, TailwindCSS, Html",
description:"Een portfolio website gebouwd met Flask",
github:"https://github.com/jouwnaam/flask-portfolio"
},


{
title:"Java Applicatie",
language:"Java",
description:"Desktop applicatie met Java",
github:"https://github.com/jouwnaam/java-project"
},


{
title:"PHP Website",
language:"PHP",
description:"Dynamische website met PHP",
github:"https://github.com/jouwnaam/php-project"
},


{
title:"JavaScript App",
language:"JavaScript",
description:"Interactieve webapplicatie",
github:"https://github.com/jouwnaam/javascript-project"
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