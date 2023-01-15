$('.navbar-toggle').on('click',function(){
            $('.sidebar-wrapper').toggleClass('on');
})
function openPage(e){
        // if(e.getAttribute!=null){
        if(document.querySelector('#navlist a.active')!=null){
            const elem = document.querySelector('#navlist a.active');
            elem.classList.remove('active')
            var prevIdName = elem.getAttribute("href")
            $(prevIdName).css("display","none");

        }
        e.target.className='active';
        console.log(e)
        var triggeredPageId = document.querySelector("#navlist a.active").getAttribute("href");
        // $(triggeredPageId).css("display","block");
        $(triggeredPageId).fadeIn(2000)
        $('.sidebar-wrapper').toggleClass('on');
    // }
}

function jumpToPage(id){
    if (!window.matchMedia('screen and (max-width: 768px)').matches) {
            if(document.querySelector('#navlist a.active')!=null){
                const elem = document.querySelector('#navlist a.active');
                elem.classList.remove('active')
                var prevIdName = elem.getAttribute("href")
                $(prevIdName).css("display","none");

            }
            $(id).addClass('active');
            var triggeredPageId = document.querySelector("#navlist a.active").getAttribute("href");
            // $(triggeredPageId).css("display","block");
            $(triggeredPageId).fadeIn(2000)
    }else{
        $('.sidebar-wrapper').toggleClass('on');
    }
    

// }
}

function openProjects(e){
    // if(e.getAttribute!=null){
    if(document.querySelector('#projectNavList a.active')!=null){
        const elem = document.querySelector('#projectNavList a.active');
        elem.classList.remove('active')
        var prevIdName = elem.getAttribute("href")
        $(prevIdName).css("display","none");

    }
    $(e.target).addClass('active');
    console.log(e)
    var triggeredPageId = document.querySelector("#projectNavList a.active").getAttribute("href");
    $(triggeredPageId).css("display","block");
// }
}

function openProjectColumn(e){
    // if(e.getAttribute!=null){
    if(document.querySelector('#navProjectCardColumn li.active')!=null){
        const elem = document.querySelector('#navProjectCardColumn li.active');
        elem.classList.remove('active')
        var prevIdName = elem.getAttribute("data-filter")
        $(prevIdName).css("display","none");

    }
    $(e.target).addClass('active');
    console.log(e)
    var triggeredPageId = document.querySelector("#navProjectCardColumn li.active").getAttribute("data-filter");
    console.log(triggeredPageId);
    $(triggeredPageId).fadeIn(500);
    // $(triggeredPageId).css("display","block");
// }
}

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });


