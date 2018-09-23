$('.menu-items').click(function() {
    let x = $(this).attr('id')
    $('.menu-items').removeClass('now')
    $(this).addClass('now')
    let y = `.${x}`
    $('.page').removeClass('selected')
    $(y).addClass('selected')
    //window.history.pushState("string", "Nano Materials research Lab @IISER Kolkata", x)
})


if ($(this).scrollTop() > 0) {
    $('.top-menu').css({
        "margin": "0",
        "border-radius": "0",
        "width": "100%",
        "position": "relative",
        "height": "65px"
    })
} else {
    $('.top-menu').css({
        "margin": "",
        "border-radius": "",
        "width": "",
        "position": "",
        "height": ""
    })
}


$('.page').scroll(function() {
    if ($(this).scrollTop() > 70) {
        $('.top-menu').css({
            "margin": "0",
            "border-radius": "0",
            "width": "100%",
            "position": "relative",
            "height": "65px"
        })
    } else {
        $('.top-menu').css({
            "margin": "",
            "border-radius": "",
            "width": "",
            "position": "",
            "height": ""
        })
    }
})


$(window).bind("load", function() {
    setTimeout(function() {
        $('.wrapper').css('opacity', '0')
    }, 1000)
    $('.wrapper').css('display', 'none')
})


$(".left").html(markdown.toHTML(research_interests))
$(".right").html(markdown.toHTML(advertisements))


let w = $(document).width() - 20
let h = $(document).height()

let html_str = ''
for (let i = 0; i < image_list.length; i++) {
    img = image_list[i]
    html_str = `${html_str}
<li><div style="width: 100%; height: ${h}px"><img src="img/${img}" /></div></li>
`
}

$('.slideshow>ul').html(html_str);
$('.slideshow>ul').slideshow({
    interval: 10000,
    width: w,
    height: h
});

$('.r-mid').html(markdown.toHTML(research_content))
$('.p-mid').html(markdown.toHTML(publication_list))
$('.current-email').html(markdown.toHTML(email))
$('.current-address').html(markdown.toHTML(physicaladdr))

$('#query-form').submit(function(event){
    let formData = {
        'name' : $('input[name=name]').val(),
        'email' : $('input[name=email]').val(),
        'comments' : $('textarea[name=comments]').val()
    }
    $.ajax({
            type : 'POST',
            url : 'mail.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function(data) {
            $('#query-form').trigger("reset");
        });
        alert('Your message has been sent');
        
    event.preventDefault()

})
