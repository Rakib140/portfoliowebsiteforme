

// STCIKEY MENU

        window.addEventListener("scorll",function(){
            var x = document.querySelector("nav");
            x.classList.toggle("stickey",window.scrollY > 50);
        });

            


// MOBILE MENU

       function openNav(){
         document.querySelector(".mobileNav").setAttribute("style","width:100%");
        };

       function closeNav(){
         document.querySelector(".mobileNav").setAttribute("style","width:0%");
        };

