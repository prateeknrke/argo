$("<span></span>").insertAfter("li.menu-item-has-children a");
$("li.menu-item-has-children span").click(function(){
    $(this).parent().children(".sub-menu").slideToggle();
});