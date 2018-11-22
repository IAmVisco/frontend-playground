// does not work on mobile
// $(document).ready(function() {
//     var currentElement = 1,
//         scrollAllowed = true,
//         maxLength = $("div[id^='page']").length;

//     function scrollHandle(e) {
//         if (scrollAllowed) {
//             scrollAllowed = false;
//             if (e.originalEvent.wheelDelta > 0) {
//                 currentElement = currentElement > 1 ? currentElement - 1 : 1;
//                 $("html, body").animate({
//                     scrollTop: $("#page-" + currentElement).offset().top
//                 }, "easeOutCubic", function () {
//                     scrollAllowed = true;
//                 });
//             } else {
//                 currentElement = currentElement < maxLength ? currentElement + 1 : currentElement;
//                 $("html, body").animate({
//                     scrollTop: $("#page-" + currentElement).offset().top
//                 }, "easeOutCubic", function () {
//                     scrollAllowed = true;
//                 });
//             }
//         }
//     }

//     $(document).on("mousewheel", scrollHandle);
// });
$(function () {
    $.scrollify({
        section: ".page",
        sectionName: "page-name",
        easing: "easeOutCubic",
        scrollSpeed: 600,
        scrollbars: false,
        before: function(i, panels) {
            var ref = panels[i].attr("data-page-name");
            $(".pages-dots .active").removeClass("active");
            $(".pages-dots").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function() {
            var pagination = '<ul class="pages-dots">';
            $(".page").each(function(i) {
                pagination += '<li><a class="' + (i === 0 ? "active " : "") + '" href="#' + $(this).attr("data-page-name") + '"><span class="hover-text">' + $(this).attr("data-page-name").charAt(0).toUpperCase() + $(this).attr("data-page-name").slice(1) + '</span></a></li>';
            });
            pagination += "</ul>";
            $(".container-fluid").append(pagination);
            $(".pages-dots a").on("click", $.scrollify.move);
        }
    });
});