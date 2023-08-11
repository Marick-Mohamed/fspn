$(document).ready(function(){

        $('.slider').slider({
            indicators:false,
            height: 700,
            transition:7000,
            interval:6000
        })

        $('.collapsible').collapsible();


    $('.dropdown-trigger').dropdown({
        coverTrigger:false,
        inDuration:1000,
        outDuration:500,
        constrainWidth:false,
        hover:true,
    });

    $('.sidenav').sidenav();
})