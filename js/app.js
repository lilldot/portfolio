// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('header').outerHeight();

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    // If they scrolled down and are past the header, add class .header-up.
    if (st > lastScrollTop && st > headerHeight) {
        // Scroll Down
        $('header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up').addClass('header-down');
            if (st < headerHeight) {
                $('header').removeClass('header-down');
            }
        }
    }


    lastScrollTop = st;
}

$(window).scroll(function (e) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


// Make hero image full height of the window and center the title within
function adjustHero() {
    //reset
    $('.hero').height($(window).height());
    $('.hero .title').css('margin-top', 0 + 'px');

    //center quote vertically
    var title_offset = -($('.hero .title').height() / 2);
    $('.hero .title').css('margin-top', title_offset + 'px');
}

function goToByScroll() {
    // Scroll
    $('html,body').animate({
        scrollTop: $(".scroll-top").offset().top
    }, 'slow');
}

$(window).resize(function () {
    adjustHero();
});

$(window).load(function () {
    adjustHero();
});

$(document).ready(function () {
    $('.scroller').click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll();
    });

    $('.slider').each(function(i, el) {
      var $el = $(el);
      var $slider_class = $el.attr('class');
      if($slider_class.includes('home')) {
        $el.unslider();
      } else {
        $el.unslider({
          arrows: {
            prev: false,
            next: false
          }
        });
      }
    });

    // $('.slider').unslider('initSwipe');
    //
    // var wrap = $('.slider'),
    //   slides = wrap.find(li),
    //   active = slides.filter('.unslider-active'),
    //   i = slides.index(active);
    //
    // slides
    // .on('swipeleft', function(e) {
    //   if (i === slides.length - 1) { return; }
    //   slides.eq(i + 1).trigger('activate');
    // })
    // .on('swiperight', function(e) {
    //   if (i === 0) { return; }
    //   slides.eq(i - 1).trigger('activate');
    // })
		// .on('activate', function(e) {
		// 	slides.eq(i).removeClass('unslider-active');
    //
		// 	$(e.target).addClass('unslider-active');
    //
		// 	// Update the active slide index
		// 	i = slides.index(e.target);
		// })
    // .on('movestart', function(e) {
    //   // If the movestart is heading off in an upwards or downwards
    //   // direction, prevent it so that the browser scrolls normally.
    //   if ((e.distX > e.distY && e.distX < -e.distY) ||
    //       (e.distX < e.distY && e.distX > -e.distY)) {
    //     e.preventDefault();
    //   }
    // });
});

d3.json('js/process.json', function (data) {
    nv.addGraph(function () {
        var chart = nv.models.multiBarHorizontalChart()
            .x(function (d) {
                return d.label;
            })
            .y(function (d) {
                return d.value;
            })
            .margin({
                top: 30,
                right: 20,
                bottom: 50,
                left: 185
            })
            .showValues(true) //Show bar value next to each bar.
            .tooltips(false) //Show tooltips on hover.
            .transitionDuration(350)
            .showYAxis(false)
            .showLegend(false)
            .showControls(false); //Allow user to switch between "Grouped" and "Stacked" mode.


        chart.valueFormat(d3.format('.0%'));

        d3.select('#process svg')
            .datum(data)
            .call(chart);

        setTimeout(function () {
            d3.select(".nv-x")
                .attr("transform", "translate(-10,0)");

            d3.selectAll(".nv-barsWrap text")
                .attr("transform", "translate(8,0)");

            d3.selectAll(".nv-bar > rect")
                .attr("transform", "translate(0,10) scale(1,.5)")
                .attr("rx", 8)
                .attr("ry", 16);
        }, 100);

        nv.utils.windowResize(chart.update);

        return chart;
    });
});


//var skillsData = [
//    {
//        value: 300,
//        color: "#F7464A",
//        highlight: "#FF5A5E",
//        label: "Omnigraffle"
//    },
//    {
//        value: 150,
//        color: "#46BFBD",
//        highlight: "#5AD3D1",
//        label: "Illustrator"
//    },
//    {
//        value: 200,
//        color: "#FDB45C",
//        highlight: "#FFC870",
//        label: "Fireworks"
//    },
//    {
//        value: 250,
//        color: "#949FB1",
//        highlight: "#A8B3C5",
//        label: "Keynote"
//    },
//    {
//        value: 300,
//        color: "#4D5360",
//        highlight: "#616774",
//        label: "Photoshop"
//    },
//    {
//        value: 200,
//        color: "#4D5360",
//        highlight: "#616774",
//        label: "HTML5"
//    },
//    {
//        value: 300,
//        color: "#4D5360",
//        highlight: "#616774",
//        label: "CSS"
//    },
//    {
//        value: 150,
//        color: "#4D5360",
//        highlight: "#616774",
//        label: "Javascript"
//    },
//    {
//        value: 100,
//        color: "#4D5360",
//        highlight: "#616774",
//        label: "SQL"
//    }
//
//];
//


//var skills = document.getElementById("skills").getContext("2d");
//var skillsChart = new Chart(skills).PolarArea(skillsData, {
//    showScale : false,
//    tooltipTemplate: "<%if (label){%><%=label%><%}%>",
//    tooltipYPadding: 15,
//    tooltipXPadding: 15,
//    responsive: true
//});
