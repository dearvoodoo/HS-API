var price = "€39.99" //<strike>€39.99</strike> €20.00
var promo = false
var discount = "Save 50%"

$(function () {
    $.getJSON("https://huntshowdown-api.herokuapp.com/v", function (data) {
        $("#version").html(data[0]["version"]);
        $("#version_game").html(data[0]["game_version"]);
    })
});

//$(function () {
//    $("#price").html(price);
//    if (promo) {
//        $("#discount").html(discount).show();
//    }
//});

$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function () {
    $(".main-header-link").click(function () {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
        var id = $(this).attr("tag")
        $(".endpointlist").hide()
        $("#" + id).show()
    });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

$(".search-bar input")
    .focus(function () {
        $(".header").addClass("wide");
    })
    .blur(function () {
        $(".header").removeClass("wide");
    });

$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        dd.removeClass("is-active");
    }
});

$(function () {
    $(".dropdown").on("click", function (e) {
        $(".content-wrapper").addClass("overlay");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown") === false) {
            $(".content-wrapper").removeClass("overlay");
        }
    });
});

$(function () {
    $(".status-button:not(.open)").on("click", function (e) {
        $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
        $(".overlay-app").removeClass("is-active");
    });
});

$(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
});

//const toggleButton = document.querySelector('.dark-light');
//
//toggleButton.addEventListener('click', () => {
//    document.body.classList.toggle('light-mode');
//    if ($('body').hasClass('light-mode')) {
//        localStorage.setItem("theme", "light")
//    } else {
//        localStorage.setItem("theme", "dark")
//    }
//});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

$(document).ready(function () {
    //var classCycle = [
    //    'https://www.huntshowdown.com//files/screenshots/32_Hunt_screenshot_Update6.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/02.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/30_Hunt_screenshot_Update5.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/29_Hunt_screenshot_Update5.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/28_Hunt_screenshot_Update4.1.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/26_Hunt_screenshot_Update4.1.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/27_Hunt_screenshot_Update4.1.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/25_Hunt_screenshot_Update4.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/24_Hunt_screenshot_Update3.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/22_Hunt_screenshot_Update3.041.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/21_Hunt_screenshot_Update3.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/10_Hunt_screenshot_Update2.0.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/04_Hunt_screenshot_E3_2017.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/03_Hunt_screenshot_E3_2017.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/02_Hunt_screenshot_E3_2017.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/01_Hunt_screenshot_E3_2017.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/Hunt-Wallpaper-3-2560x1440.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/Hunt-Wallpaper-1-2560x1440.jpg',
    //    'https://www.huntshowdown.com//files/screenshots/Hunt-Wallpaper-7-2560x1440.jpg',
    //    'https://cdn.discordapp.com/attachments/417601970988122112/889823033949323284/Wallpaper_4K_03.jpg',
    //    'https://pbs.twimg.com/media/FVeDrzYWUAEZPsK?format=jpg&name=large',
    //    'https://pbs.twimg.com/media/FUqjwwOWAAAjUDi?format=jpg&name=large',
    //    'https://pbs.twimg.com/media/FTIfzwtaIAQtweR?format=jpg&name=large',
    //    'https://pbs.twimg.com/media/FS41XNiWYAMX4DC?format=jpg&name=large',
    //    'https://pbs.twimg.com/media/FRm3XArXIAU1jg-?format=jpg&name=4096x4096',
    //    'https://pbs.twimg.com/media/FQj6qh7XIAE4Ujt?format=jpg&name=large',
    //    'https://pbs.twimg.com/media/FP_qE9cXoAcwKyA?format=jpg&name=large',
    //    'https://i.ibb.co/9n1XdCK/WEu4-Ah8-Imgur.jpg',
    //    'https://i.ibb.co/NYLcx1q/wp4770745-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/fqM5BTr/wp4770744-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/kgR4MJr/wp4770731-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/Lp808W1/wp4770730-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/87ST3P3/wp4770727-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/k3Y60jP/wp4770724-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/Qd7nQCv/wp4770721-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/zP83h5B/wp4770712-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/wdcVphB/wp4770711-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/K0WGb0S/wp4770706-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/pZbK3ZY/wp4770698-hunt-showdown-wallpapers.jpg',
    //    'https://i.ibb.co/ZxGs5BV/wp4770750-hunt-showdown-wallpapers.jpg'
    //];

    //var randomNumber = Math.floor(Math.random() * classCycle.length);
    //var classToAdd = classCycle[randomNumber];

    //$('body').css('background-image', 'url(' + classToAdd + ')');
    $('body').css('background-image', 'url(https://huntshowdown-api.herokuapp.com/background.jpg)');
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "light") {
            $('body').addClass('light-mode')
        } else {
            $('body').removeClass('light-mode')
        }
    }

    $("[data-audio-url]").each(
        function () {
            $(this).on('click', function () {
                var mp3Url = $(this).attr('data-audio-url');
                var a = new Audio("https://huntshowdown-api.herokuapp.com/" + mp3Url + ".mp3");
                a.play();
            });
        }
    );

    var url = `https://store.steampowered.com/api/appdetails/?appids=594650`
    $.getJSON(`https://api.allorigins.win/get?url=${url}&l=french`, function(data) {
        var data = JSON.parse(data.contents);
        var data = data["594650"];
        var details = data.data
        if (data.success == true) {
            var price_overview = details.price_overview
            var initial_formatted = price_overview.initial_formatted
            var final_formatted = price_overview.final_formatted
            var discount_percent = price_overview.discount_percent
            var final_price = `<span class="badge bg-success">-{0}%</span>
            <strike>{1}</strike> {2}`
            if (price_overview.discount_percent == 0) {
                var finalPrice = final_formatted
                $("#price").html(finalPrice)
            } else {
                $("#price").html(`<strike>${initial_formatted}</strike> ${final_formatted}`)
                $("#discount").show().html("-" + discount_percent + "%")
            }
        }
    });

    /* Set changelogs */
    if(window.location.href.indexOf("changelogs") > -1){
        var c_new =    `<p class="changelog-text"><span class="badge bg-changelog-new">New</span> {0}</p>`
        var c_fix =    `<p class="changelog-text"><span class="badge bg-changelog-fix">Fix</span> {0}</p>`
        var c_remove = `<p class="changelog-text"><span class="badge bg-changelog-remove">Remove</span> {0}</p>`
        var c_hotfix = `<p class="changelog-text"><span class="badge bg-changelog-hotfix">Hotfix</span> {0}</p>`
        var c_soon =   `<p class="changelog-text"><span class="badge bg-changelog-soon">Soon</span> {0}</p>`
        var c_update = `<p class="changelog-text"><span class="badge bg-changelog-update">Update</span> {0}</p>`

        var changelog_html = `
        <div class="content-section" id="version-{0}">
            <div style="font-size: small;font-weight: 400;color: var(--content-title-color);">{1}</div>
            <div class="content-section-title">Version {2}</div>
            <div class="card">
                {3}
            </div>
        </div>
        `

        $.getJSON("https://huntshowdown-api.herokuapp.com/changelogs_json", function(data) {
        $.each(data, function(i, item) {
            if (i % 2 === 0) { //even
                $('#even').append(`<a class="dropdown-item" href="#version-${data[i]['version'].replace(".", "")}">${data[i]['version']}</a>`)
            } else { //odd
                $('#odd').append(`<a class="dropdown-item" href="#version-${data[i]['version'].replace(".", "")}">${data[i]['version']}</a>`)
            }

            var changes = []
            $.each(data[i]['changes'], function(c, change) {
                if (change['tag'] === "new") {
                    changes.push(c_new.f(change['change']))
                } else if (change['tag'] === "fix") {
                    changes.push(c_fix.f(change['change']))
                } else if (change['tag'] === "remove") {
                    changes.push(c_remove.f(change['change']))
                } else if (change['tag'] === "hotfix") {
                    changes.push(c_hotfix.f(change['change']))
                } else if (change['tag'] === "soon") {
                    changes.push(c_soon.f(change['change']))
                } else if (change['tag'] === "update") {
                    changes.push(c_update.f(change['change']))
                }
            })
            var edited_html = changelog_html.f(data[i]['version'].replace(".", ""), data[i]['date'] , data[i]['version'], changes.join(' '))
            $('#changelogs').append(edited_html)
        });
    })
    }
});

//_______________ Bootstrap Tooltips
$(function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})
//_______________ Bootstrap Popover
$(function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
})

$(window).on("load", function(e) {
    $(".loader").addClass("loader-hidden");
})

String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;
    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};