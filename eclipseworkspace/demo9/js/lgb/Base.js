

var lgb = (function(lgb) {



	lgb.Base = function() {

	};

	lgb.Base.prototype = {
		
		d: function(theFunction) {
			
			var delegate = $.proxy(theFunction, this);
			return delegate;
			
		},
		
		dispatch: function(eventName, value) {
			

			var msg =  ('EventBus - dispatch: {0}'.format(eventName));
			var newEvent = jQuery.Event(eventName);
			
			if (null !== value && undefined !== value) {
				newEvent.value = value;
				msg += " : " + value.toString();
			}
			
			console.log(msg);
			lgb.Base.eventBus.trigger(newEvent);
		},
		
		listen: function(eventName, func) {
			var delegate = jQuery.proxy( func, this );
			lgb.Base.eventBus.bind(eventName, delegate);
		},
		
		assertType: function(expectedType) {

			var msg = 'Error when calling assertType';
			
			if(null === expectedType || undefined === expectedType) {
				jQuery.error(msg + " expectedType is null or undefined");
			} else {
				if (!this instanceof expectedType) {
					jQuery.error(msg + " object is not of the expected type");
				}
			}
		}
		
		
	};

	lgb.Base.eventBus = $(new lgb.event.EventBus());
	
	return lgb;
	
})(lgb || {});

