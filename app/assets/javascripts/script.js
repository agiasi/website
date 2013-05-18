$(&quot;.jquery_nudge ul li&quot;).hover(function(){
	$(this).stop().animate({ paddingLeft: '50px', backgroundColor: '#efefef', color : '#333' }, 500);	
}, function() {
	$(this).stop().animate({ paddingLeft: '25px', backgroundColor: '#ffffff', color : '#afafaf' }, 500);
});