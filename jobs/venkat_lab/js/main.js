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

$('#query-form').submit(function(event) {
    let formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'comments': $('textarea[name=comments]').val()
    }
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: formData,
        dataType: 'json',
        encode: true
    }).done(function(data) {
        $('#query-form').trigger("reset");
    });
    alert('Your message has been sent');

    event.preventDefault()

})


$('.supervisor').html('<div class="head-card"><div class="info-wrapper"><h2 class="title"></h2><h2 class="name"></h2><div class="info-wrapper-l"><p class="emails"></p><p class="positions"></p></div><div class="info-wrapper-r"><p class="qualifications"></p></div></div><div class="image-wrapper"></div></div>')
$('.supervisor .head-card .title').html(head_card.title)
$('.supervisor .head-card .name').html(head_card.name)

html_str = '<strong>Emails:</strong><br>'
for (i = 0; i < head_card.email.length; i++) {
    html_str = `${html_str}${head_card.email[i]}<br>`
}

$('.supervisor .emails').html(html_str)

html_str = '<h3>Positions:</h3><br>'
for (i = 0; i < head_card.positions.length; i++) {
    html_str = `${html_str}${head_card.positions[i]}<br>`
}

$('.supervisor .positions').html(html_str)

html_str = '<h3>Qualifications:</h3><br>'
for (i = 0; i < head_card.qualifications.length; i++) {
    html_str = `${html_str}${head_card.qualifications[i]}<br>`
}

$('.supervisor .qualifications').html(html_str)

$('.supervisor .image-wrapper').html(`<img src='img/${head_card.photo}' />`)


html_str = ''
for (i = 0; i < postdocs.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${postdocs[i].photo}" /></div><div class="card-info">Name: <strong>${postdocs[i].name}</strong><br>Position: <strong>${postdocs[i].position}</strong><br>Duration: <strong>${postdocs[i].duration}</strong><br>Topic: <strong>${postdocs[i].topic}</strong><br>Profile: <strong>${postdocs[i].profile}</strong><br>Email: <strong>${postdocs[i].email}</strong></div></div>`
}

$('.postdoc').html(html_str)

html_str = ''
for (i = 0; i < phds.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${phds[i].photo}" /></div><div class="card-info">Name: <strong>${phds[i].name}</strong><br>Position: <strong>${phds[i].position}</strong><br>Duration: <strong>${phds[i].duration}</strong><br>Topic: <strong>${phds[i].topic}</strong><br>Profile: <strong>${phds[i].profile}</strong><br>Email: <strong>${phds[i].email}</strong><br>Contact: <strong>${phds[i].contact}</strong></div></div>`
}

$('.phd').html(html_str)

html_str = ''
for (i = 0; i < iphds.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${iphds[i].photo}" /></div><div class="card-info">Name: <strong>${iphds[i].name}</strong><br>Position: <strong>${iphds[i].position}</strong><br>Duration: <strong>${iphds[i].duration}</strong><br>Topic: <strong>${iphds[i].topic}</strong><br>Profile: <strong>${iphds[i].profile}</strong><br>Email: <strong>${iphds[i].email}</strong><br>Contact: <strong>${iphds[i].contact}</strong></div></div>`
}

$('.iphd').html(html_str)

html_str = ''
for (i = 0; i < projectstudents.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${projectstudents[i].photo}" /></div><div class="card-info">Name: <strong>${projectstudents[i].name}</strong><br>Position: <strong>${projectstudents[i].position}</strong><br>Topic: <strong>${projectstudents[i].topic}</strong><br>Email: <strong>${projectstudents[i].email}</strong><br>Contact: <strong>${projectstudents[i].contact}</strong></div></div>`
}

$('.project').html(html_str)

html_str = ''
for (i = 0; i < visiting.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${visiting[i].photo}" /></div><div class="card-info">Name: <strong>${visiting[i].name}</strong><br>Position: <strong>${visiting[i].current_position}</strong><br>Duration: <strong>${visiting[i].duration}</strong><br>Topic: <strong>${visiting[i].topic}</strong><br>Email: <strong>${visiting[i].email}</strong><br>Contact: <strong>${visiting[i].contact}</strong></div></div>`
}

$('.visitors').html(html_str)

html_str = ''
for (i = 0; i < alumni.length; i++) {
    html_str = `${html_str}<div class="card"><div class="card-img"><img src="img/${alumni[i].photo}" /></div><div class="card-info">Name: <strong>${alumni[i].name}</strong><br>`
    if (alumni[i].position != null) {
        if (alumni[i].position.length > 0) {
            html_str = `${html_str}Position: <strong>${alumni[i].position}</strong><br>`;
        }
    }
    if (alumni[i].current_position != null){
        if (alumni[i].current_position.length > 0) {
            html_str = `${html_str}Current Position: <strong>${alumni[i].current_position}</strong><br>`;
        }
    }
    if (alumni[i].duration != null) {
        if (alumni[i].duration.length > 0) {
            html_str = `${html_str}Duration: <strong>${alumni[i].duration}</strong><br>`;
        }
    }
    if (alumni[i].topic != null) {
        if (alumni[i].topic.length > 0) {
            html_str = `${html_str}Research Topic: <strong>${alumni[i].topic}</strong><br>`;
        }
    }
    if (alumni[i].profile != null) {
        if (alumni[i].profile.length > 0) {
            html_str = `${html_str}Profile: <strong>${alumni[i].profile}</strong><br>`;
        }
    }
    if (alumni[i].email != null) {
        if (alumni[i].email.length > 0) {
            html_str = `${html_str}Email: <strong>${alumni[i].email}</strong><br>`;
        }
    }
    if (alumni[i].contact != null) {
        if (alumni[i].contact.length > 0) {
            html_str = `${html_str}Contact: <strong>${alumni[i].contact}</strong><br>`;
        }
    }
    html_str = `${html_str}</div></div>`
}

$('.alumni').html(html_str)

$('.co-mid').html(markdown.toHTML(collaborators))