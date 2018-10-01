let c=0;
$('.menu-items').click(function() {
    let x = $(this).attr('id')
    $('.menu-items').removeClass('now')
    $(this).addClass('now')
    let y = `.${x}`
    $('.page').removeClass('selected')
    $(y).addClass('selected')
    c++;
    $('.top-menu-mobile>ul').css('display','none')

})

$('.hamburger').click(function(){
    c++;
    if (c%2!=0) {$('.top-menu-mobile>ul').css('display','block')}
    else {$('.top-menu-mobile>ul').css('display','none')}
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



/*----------------------------------------- Populating home page-----------------------------------------------------------*/
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


w = $(document).width()
h = $(document).height()*0.5

html_str = ''
for (let i = 0; i < image_list.length; i++) {
    img = image_list[i]
    html_str = `${html_str}
<li><div style="width: 100%; height: ${h}px"><img src="img/${img}" /></div></li>
`
}

$('.slideshow-m>ul').html(html_str);
$('.slideshow-m>ul').slideshow({
    interval: 10000,
    width: w,
    height: h
});



/*----------------------------------------------------------------------------- Contact us Page functions---------------------------------------*/

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
        url: 'scripts/mail.php',
        data: formData,
        dataType: 'json',
        encode: true
    }).done(function(data) {
        $('#query-form').trigger("reset");
    });
    alert('Your message has been sent');

    event.preventDefault()

})

/*--------------------------------------------------Populating other pages-------------------------------------*/


r_loaded=0;
p_loaded=0;
g_loaded=0;
ga_loaded=0;
co_loaded=0;
c_loaded=0;


$('.menu-items').click(function(){
	if ($(this).attr('id')=="research" && r_loaded==0){$('.r-mid').html(markdown.toHTML(research_content));r_loaded=1}
	if ($(this).attr('id')=="publications" && p_loaded==0){$('.p-mid').html(markdown.toHTML(publication_list));p_loaded=1}
	if ($(this).attr('id')=="group" && g_loaded==0){
		g_loaded=1;
		$('.supervisor').html('<div class="head-card"><div class="info-wrapper"><h2 class="title"></h2><h2 class="name"></h2><div class="image-wrapper"></div><div class="info-wrapper-l"><p class="emails"></p><p class="positions"></p></div><div class="info-wrapper-r"><p class="qualifications"></p></div></div></div>')
		$('.supervisor .head-card .title').html(head_card.title)
		$('.supervisor .head-card .name').html(head_card.name)

		html_str_1 = '<strong>Emails:</strong><br>'
		for (i = 0; i < head_card.email.length; i++) {
		    html_str_1 = `${html_str_1}${head_card.email[i]}<br>`
		}

		$('.supervisor .emails').html(html_str_1)

		html_str_2 = '<h3>Positions:</h3><br>'
		for (i = 0; i < head_card.positions.length; i++) {
		    html_str_2 = `${html_str_2}${head_card.positions[i]}<br>`
		}

		$('.supervisor .positions').html(html_str_2)
		
		html_str_3 = '<h3>Qualifications:</h3><br>'
		for (i = 0; i < head_card.qualifications.length; i++) {
		    html_str_3 = `${html_str_3}${head_card.qualifications[i]}<br>`
		}

		$('.supervisor .qualifications').html(html_str_3)
		$('.supervisor .image-wrapper').html(`<img src='img/${head_card.photo}' />`)
		html_str_4 = ''
		for (i = 0; i < postdocs.length; i++) {
		    html_str_4 = `${html_str_4}<div class="card"><div class="card-img"><img src="img/${postdocs[i].photo}" /></div><div class="card-info">Name: <strong>${postdocs[i].name}</strong><br>Position: <strong>${postdocs[i].position}</strong><br>Duration: <strong>${postdocs[i].duration}</strong><br>Topic: <strong>${postdocs[i].topic}</strong><br>Profile: <strong>${postdocs[i].profile}</strong><br>Email: <strong>${postdocs[i].email}</strong></div></div>`
		}

		$('.postdoc').html(html_str_4)

		html_str_5 = ''
		for (i = 0; i < phds.length; i++) {
		    html_str_5 = `${html_str_5}<div class="card"><div class="card-img"><img src="img/${phds[i].photo}" /></div><div class="card-info">Name: <strong>${phds[i].name}</strong><br>Position: <strong>${phds[i].position}</strong><br>Duration: <strong>${phds[i].duration}</strong><br>Topic: <strong>${phds[i].topic}</strong><br>Profile: <strong>${phds[i].profile}</strong><br>Email: <strong>${phds[i].email}</strong><br>Contact: <strong>${phds[i].contact}</strong></div></div>`
		}

		$('.phd').html(html_str_5)

		html_str_6 = ''
		for (i = 0; i < iphds.length; i++) {
		    html_str_6 = `${html_str_6}<div class="card"><div class="card-img"><img src="img/${iphds[i].photo}" /></div><div class="card-info">Name: <strong>${iphds[i].name}</strong><br>Position: <strong>${iphds[i].position}</strong><br>Duration: <strong>${iphds[i].duration}</strong><br>Topic: <strong>${iphds[i].topic}</strong><br>Profile: <strong>${iphds[i].profile}</strong><br>Email: <strong>${iphds[i].email}</strong><br>Contact: <strong>${iphds[i].contact}</strong></div></div>`
		}

		$('.iphd').html(html_str_6)

		html_str_7 = ''
		for (i = 0; i < projectstudents.length; i++) {
		    html_str_7 = `${html_str_7}<div class="card"><div class="card-img"><img src="img/${projectstudents[i].photo}" /></div><div class="card-info">Name: <strong>${projectstudents[i].name}</strong><br>Position: <strong>${projectstudents[i].position}</strong><br>Topic: <strong>${projectstudents[i].topic}</strong><br>Email: <strong>${projectstudents[i].email}</strong><br>Contact: <strong>${projectstudents[i].contact}</strong></div></div>`
		}

		$('.project').html(html_str_7)

		html_str_8 = ''
		for (i = 0; i < visiting.length; i++) {
		    html_str_8 = `${html_str_8}<div class="card"><div class="card-img"><img src="img/${visiting[i].photo}" /></div><div class="card-info">Name: <strong>${visiting[i].name}</strong><br>Position: <strong>${visiting[i].current_position}</strong><br>Duration: <strong>${visiting[i].duration}</strong><br>Topic: <strong>${visiting[i].topic}</strong><br>Email: <strong>${visiting[i].email}</strong><br>Contact: <strong>${visiting[i].contact}</strong></div></div>`
		}

		$('.visitors').html(html_str_8)

		html_str_9 = ''
		for (i = 0; i < alumni.length; i++) {
		    html_str_9 = `${html_str_9}<div class="card"><div class="card-img"><img src="img/${alumni[i].photo}" /></div><div class="card-info">Name: <strong>${alumni[i].name}</strong><br>`
		    if (alumni[i].position != null) {
		        if (alumni[i].position.length > 0) {
		            html_str_9 = `${html_str_9}Position: <strong>${alumni[i].position}</strong><br>`;
		        }
		    }
		    if (alumni[i].current_position != null) {
		        if (alumni[i].current_position.length > 0) {
		            html_str_9 = `${html_str_9}Current Position: <strong>${alumni[i].current_position}</strong><br>`;
		        }
		    }
		    if (alumni[i].duration != null) {
		        if (alumni[i].duration.length > 0) {
		            html_str_9 = `${html_str_9}Duration: <strong>${alumni[i].duration}</strong><br>`;
		        }
		    }
		    if (alumni[i].topic != null) {
		        if (alumni[i].topic.length > 0) {
		            html_str_9 = `${html_str_9}Research Topic: <strong>${alumni[i].topic}</strong><br>`;
		        }
		    }
		    if (alumni[i].profile != null) {
		        if (alumni[i].profile.length > 0) {
		            html_str_9 = `${html_str_9}Profile: <strong>${alumni[i].profile}</strong><br>`;
		        }
		    }
		    if (alumni[i].email != null) {
		        if (alumni[i].email.length > 0) {
		            html_str_9 = `${html_str_9}Email: <strong>${alumni[i].email}</strong><br>`;
		        }
		    }
		    if (alumni[i].contact != null) {
		        if (alumni[i].contact.length > 0) {
		            html_str_9 = `${html_str_9}Contact: <strong>${alumni[i].contact}</strong><br>`;
		        }
		    }
		    html_str_9 = `${html_str_9}</div></div>`
		}

		$('.alumni').html(html_str_9)
	}
	if ($(this).attr('id')=="gallery" && ga_loaded==0){
		headings = JSON.parse(headings);
		photos = JSON.parse(photos);
		slides = JSON.parse(slideshow);
		w = $(document).width()*0.7
		h = $(document).height()
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		html_str_10 = '<div class="closer-x-button"><i class="fas fa-times-circle"></i></div>';
		
		for (i = 0; i < headings.length; i++) {
		    dir = `${i+1} ${headings[i]}`;
		    if (slides[i] == 0 || width < 600) {
		        html_str_10 = `${html_str_10}<h2>${headings[i]}</h2><div class="photobox">`;
		        for (j = 0; j < photos[i].length; j++) {
		            html_str_10 = `${html_str_10}<div><div tabindex=0><img src="gallery/${dir}/${photos[i][j]}"/></div></div>`
		        }
		    }
		    else{
		        html_str_10=`${html_str_10}<h2>${headings[i]}</h2><div class="slidebox"><ul>`;
		        for (let j = 0; j < photos[i].length; j++) {
		            img = photos[i][j]
		            html_str_10 = `${html_str_10}
		        <li><div style="width: 100%; height: ${h}px"><img src="gallery/${dir}/${img}" /></div></li>
		        `
		        }
		        html_str_10=`${html_str_10}</ul>`
		    }
		    html_str_10 = `${html_str_10}</div><hr>`

		}

		$('.ga-mid').html(html_str_10);


		$('.slidebox>ul').slideshow({
		    interval: 10000,
		    width: w,
		    height: h
		});

		ga_loaded=1;

		$('.photobox>div>div').focus(function(){
		    $('.top-menu').css('z-index','1');
		    $('.closer-x-button').css('display','flex');
		})

		$('.closer-x-button').click(function(){
		    $('.photobox>div>div').blur();
		    $('.top-menu').css('z-index',10000000);
		    $('.closer-x-button').css('display','none');

		})
	}
	if ($(this).attr('id')=="collaborators" && co_loaded==0){$('.co-mid').html(markdown.toHTML(collaborators));co_loaded=1;}

})




