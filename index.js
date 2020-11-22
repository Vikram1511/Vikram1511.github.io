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


