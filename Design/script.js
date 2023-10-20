$(document).ready(function(){
  const items = document.querySelectorAll('.slider-item');
  
  const itemCount = items.length;
  console.log(items);
  const nextItem = document.querySelector('.next');
  const previousItem = document.querySelector('.previous');
  const navItem = document.querySelector('a.toggle-nav');
  let count = 0;
  
  
  
  // 도트 생성
  $("#Design .controls").prepend('<ul class="list"></ul>');
  for(var a=0;a<items.length;a++){
    $("#Design .controls ul.list").prepend('<li class="slider-dot"></li>');
  }
  // 도트 묶음
  const itemsdot = document.querySelectorAll('.slider-dot');
  itemsdot[0].classList.add('active');
  
  //도트 이벤트
  const sliderdot = document.querySelector('.slider-dot');
  
  
  
    function showNextItem() {
      items[count].classList.remove('active');
  
      // 도트 active
      itemsdot[count].classList.remove('active');
  
      if(count < itemCount - 1) {
        count++;
      } else {
        count = 0;
      }
    
      items[count].classList.add('active');
  
      // 도트 active
         itemsdot[count].classList.add('active');
  
      console.log(count);
    }
    
    function showPreviousItem() {
  
      items[count].classList.remove('active');
  
      // 도트 active
        itemsdot[count].classList.remove('active');
    
      if(count > 0) {
        count--;
      } else {
        count = itemCount - 1;
      }
    //도트클릭
  
      items[count].classList.add('active');
  
      // 도트 active
          itemsdot[count].classList.add('active');
      // Check if working...
      console.log(count);
    }
    
    function toggleNavigation(){
      this.nextElementSibling.classList.toggle('active');
    }
    
    function keyPress(e) {
      e = e || window.event;
      
      if (e.keyCode == '37') {
        showPreviousItem();
      } else if (e.keyCode == '39') {
        showNextItem();
      }
    }
    
    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
   
    document.addEventListener('keydown', keyPress);
  
    
  });
  