$(function(){
    $('.faq').on('click', '.ques', function(e){
        e.preventDefault();
        $(this).find('.btn').toggleClass('show');
        $(this).parent().find('.ans').toggleClass('show');
        $(this).toggleClass('active');
    });
});