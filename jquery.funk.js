/*
 *jQuery funk plugin.
 *Cycles between two functions when an object is clicked
 *This basically has the same functionality as .toggle() used to have
 *Syntax: $('someobject').funk(function(){ // some logic }, function(){ //some more logic });
 */
(function( $ ) {
    jQuery.fn.funk = function(funkarray, event) {
        this.data("funks",funkarray);
        var event = event;
        this.on(event, function() {
            execute = $(this).data("funks").shift();
            $.proxy(execute, $(this))();
            $(this).data("funks").push(execute);
        });
    };
})( jQuery );
    