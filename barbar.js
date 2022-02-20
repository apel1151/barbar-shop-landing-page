
            
                const menuBtn = document.getElementById("menuBtn");
                const sideNav = document.getElementById("sideNav");
                const menu = document.getElementById("menu");
                sideNav.style.right = "-250px";
                menuBtn.onclick = function(){
                    if(sideNav.style.right == "-250px"){
                        sideNav.style.right = "0px";
                        menu.src = 'media/close.png';
                    }
                    else{
                        sideNav.style.right = "-250px";
                        menu.src = 'media/menu.png';
                    }
                }

                var scroll = new SmoothScroll('a[href*="#"]', {
                          speed: 1000,
                          speedAsDuration: true
                    });

        