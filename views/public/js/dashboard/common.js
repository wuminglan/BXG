
// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });
define(['jquery','cookie','template'], 
function($,cookie,template) {
	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
	location.href = 'login';
}

if (location.pathname != '/login') {
	var txInfo = JSON.parse($.cookie('resultRult'));
	console.log(txInfo);

	var htmlInfo = template('tp_silde_tx', txInfo);
	$('.aside>.profile').html(htmlInfo);
}

});

