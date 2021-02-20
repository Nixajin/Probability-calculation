$(function() {
    var fleet = {
	    Ise: { name: '伊勢改二', flack: 48, rflack: 85 },
            Hyuga: { name: '日向改二', flack: 46 },
    };

    $(document).on('input', '#name', function(e) {
	if($('#name').val() == '伊勢改二')
	{
		$('#flack').val([fleet.Ise.flack]);
		if($('#f:checked').val() == "on")
		{
			$('#flack').val([fleet.Ise.rflack]);
		}
	}
	else if($('#name').val() == '日向改二')
	{
		$('#flack').val([fleet.Hyuga.flack]);
	}
    });
    
    
});
