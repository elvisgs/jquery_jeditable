/* Create an inline datepicker which leverages the
   jQuery UI datepicker 
*/
$.editable.addInputType('datepicker', {
    element: function(settings, original) {
        var $form = this;
        return $('<input />').datepicker({
            onSelect: function(dateText, inst) {
                $form.submit();
            }
        }).appendTo($form);
    },
    reset: function(settings, original) {
        return !$.datepicker._datepickerShowing && original.reset(this);
    }
});