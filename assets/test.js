require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
    	var value = $('.test_id').data('id');
        alert("TEST" + value);
    };

    gitbook.events.bind("page.change", init);
});
