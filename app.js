
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

//         for clicking footer links
      let forClick1 = document.querySelector('#one');
      let forClick2 = document.querySelector('#two');
      let forClick3 = document.querySelector('#three');
      let forClick4 = document.querySelector('#four');
//         for toggling menus
      let menu1 = document.querySelector('#menu1');
      let menu2 = document.querySelector('#menu2');
      let menu3 = document.querySelector('#menu3');
      let menu4 = document.querySelector('#menu4');
      


      forClick1.addEventListener('click', ()=>{
        menu1.classList.contains('active')?menu1.classList.remove('active'):menu1.classList.add('active');
        menu2.classList.remove('active');
        menu3.classList.remove('active');
        menu4.classList.remove('active');
      })
      forClick2.addEventListener('click', ()=>{
        menu2.classList.contains('active')?menu2.classList.remove('active'):menu2.classList.add('active');
        menu1.classList.remove('active');
        menu3.classList.remove('active');
        menu4.classList.remove('active');
      })
      forClick3.addEventListener('click', ()=>{
        menu3.classList.contains('active')?menu3.classList.remove('active'):menu3.classList.add('active');
        menu2.classList.remove('active');
        menu1.classList.remove('active');
        menu4.classList.remove('active');
      })
      forClick4.addEventListener('click', ()=>{
        menu4.classList.contains('active')?menu4.classList.remove('active'):menu4.classList.add('active');
        menu2.classList.remove('active');
        menu3.classList.remove('active');
        menu1.classList.remove('active');
      })