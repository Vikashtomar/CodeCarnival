
let users = [
   {
      profilePic:"https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://cdn.pixabay.com/photo/2016/08/19/05/47/soccer-1604597_1280.jpg",
      pendingMessage:3,
      location: "Delhi,India",
      name:"Arfi",
      age:23,
      interests:[{
         icon:`<i class="ri-music-2-fill"></i>`,
         interest: "music",
      },
      {
         icon: `<i class="ri-quill-pen-fill"></i>`,
         interest:"writing",
      }
   ],
      bio: "Lorem ipsum, fuh , isdfosdhvdfoh uhfivho hvfih oyvidf ohioyfdd  ihbdfiuy",
      isFriend: null

   },
   {
      profilePic:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic:"https://plus.unsplash.com/premium_photo-1661726574613-ee323dd79fc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage:2,
      location: "Mathura,India",
      name:"aditi",
      age:22,
      // interest:["music,singing"],
      interests:[{
         icon:`<i class="ri-music-2-fill"></i>`,
         interest: "music",
      },
      {
         icon: `<i class="ri-quill-pen-fill"></i>`,
         interest:"writing",
      }
   ],
      bio: "Lorem ipsum, fuh , isdfosdhvdfoh uhfivho hvfih oyvidf ohioyfdd  ihbdfiuy",
      isFriend: null

   },
   {
      profilePic:"https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic:"https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage:5,
      location: "Agra,India",
      name:"Kuku",
      age:23,
         interests:[{
         icon:`<i class="ri-music-2-fill"></i>`,
         interest: "music",
      },
      {
         icon: `<i class="ri-quill-pen-fill"></i>`,
         interest:"writing",
      }
   ],
      bio: "Lorem ipsum, fuh , isdfosdhvdfoh uhfivho hvfih oyvidf ohioyfdd  ihbdfiuy",
      isFriend: null

   },
   {
      profilePic:"https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic:"https://images.unsplash.com/photo-1592188657297-c6473609e988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage:4,
      location: "usfar,India",
      name:"beerwati",
      age:20,
      // interest:["music,singing"],
      interests:[{
         icon:`<i class="ri-music-2-fill"></i>`,
         interest: "music",
      },
      {
         icon: `<i class="ri-quill-pen-fill"></i>`,
         interest:"writing",
      }
   ],
      bio: "Lorem ipsum, fuh , isdfosdhvdfoh uhfivho hvfih oyvidf ohioyfdd  ihbdfiuy",
      isFriend: null

   },
   
 ];

 function select(elem){
   return document.querySelector(elem)   
 }

 let curr = 0;
 let isAnimating = false;

 function setData(ind){
   select(".prflimg img").src = users[ind].profilePic;
      select(".badge h5").textContent = users[ind].pendingMessage;
      select(".location h3").textContent = users[ind].location; 
      select(".names h1").textContent = users[ind].name;
      select(".names .second").textContent = users[ind].age;

      var clutter = "";
      users[ind].interests.forEach(function(interest){
         clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                        ${interest.icon}
                        <h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
                    </div>`

      })
      
      select(".tags").innerHTML = clutter;
      select(".bio p").textContent = users[curr].bio;
 }

 ( function setIntial(){
      select(".maincard img").src = users[curr].displayPic;
      select(".incomingcard img").src = users[curr+1]?.displayPic;
      
setData(curr);
      curr = 2;
   }
 )();

 
function imageChange(){
   if(!isAnimating){
      isAnimating = true;
      let tl = gsap.timeline({
         onComplete: function(){
            isAnimating = false;
            let main = select(".maincard");
            let incoming = select(".incomingcard");
            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");
   
            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main,{
               scale:1,
               opacity: 1
            })
            if(curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard")
         }
      });
   
      tl.to(".maincard",{
         scale:1.1,
         opacity:0,
         ease:Circ,
         duration:.9
   
      },"a")
      .from(".incomingcard",{
         scale:.9,
         opacity:0,
         ease:Circ,
         duration:1.1
      },"a")
   
   } 

}


let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click",function(){
   imageChange();
   setData(curr-1)
   gsap.from(".details .element",{
      y:"100%",
      opacity:0,
      stagger:0.6,
      ease:Power4easeInOut,
      duration:1.5
   })
});

accept.addEventListener("click",function(){
   imageChange();
   setData(curr-1)
   gsap.from(".details .element",{
      y:"100%",
      opacity:0,
      stagger:0.6,
      ease:power4.easeInOut,
      duration:1.5
   })
});

(function containerCreator(){
   document.querySelectorAll(".element")
   .forEach(function(element){
      let div = document.createElement("div");
      div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
      // console.log(div);
      div.appendChild(element);
      select(".details").appendChild(div)
      
   })
})();


 