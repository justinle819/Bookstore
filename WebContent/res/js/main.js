/**
 * 
 */

$(document).ready(function(){
	var map = {};
    $("#all").click(function(){
        $.get("/4413project/Start/?reqtype=catalog&query=All",
        function(data,status){
        	$("#content").html($(data).find("data").html());
        });
    });
    
    $("#science").click(function(){
        $.get("/4413project/Start/?reqtype=catalog&query=Science",
        function(data,status){
        	$("#content").html($(data).find("data").html());
        });
    });
    
    $("#engineering").click(function(){
    	$.get("/4413project/Start/?reqtype=catalog&query=Engineering",
        function(data,status){
        	$("#content").html($(data).find("data").html());
        });
    });
    $("#fiction").click(function(){
        $.get("/4413project/Start/?reqtype=catalog&query=Fiction",
        function(data,status){
        	$("#content").html($(data).find("data").html());
        });
    });
    
    $("#checkout").click(function(){
    	map["reqtype"] = "checkout";
        $.post("/4413project/Start/",
        map,
        function(data, status){
//        	document.open();
//            document.write(data);
//            document.close();
        	$("body").html($(data).find("data").html());
        });
    });
    
    $(document).on('click', '.addCart', function() {
      
    	var key = $(this).attr("name");
    	var val = parseInt($(".addQuan").eq($(this).attr("value")).val());
    	if(val > 0){
    		//map[key] = val;
        	if(map.hasOwnProperty(key)){
        		var oldQuan = map[key];
        		var newQuan = oldQuan + val;
        		map[key] = newQuan;
        	}
        	else{
        		map[key] = val;
        		//alert(map[key]);
        	}
        	updateCart();
    	}
    	else{
    		alert("invalid quantity");
    	}
    
    	
    });
    
    function updateCart(){
    	var total = 0;
    	for(var prop in map){
    		total += + map[prop];
    	}
    	$("#cart").val(total);
    }
    
//    checkout area js
    var map2 = {};
    $(document).on('click', '.add', function() {
        //alert("hello");
    	var curQuan = parseInt($(".quan").eq($(this).attr("value")).text());
    	var val = parseInt($(".quanInput").eq($(this).attr("value")).val());
    	var newQuan = curQuan + val;
    	$(".quan").eq($(this).attr("value")).text(newQuan);
    	var key = $(this).attr("name");
    	var quan = $(".quan").eq($(this).attr("value")).text();
    	if(curQuan > 0){
        	map2["reqtype"] = "checkout";
    		map2[key] = quan;
        	$.post("/4413project/Start/",
        		    map2,
        		   function(data, status){
        		            //alert("Data: " + data + "\nStatus: " + status);
             			//$("#content").html($(data).find("data").html());
//    		    		 document.open();
//    		             document.write(data);
//    		             document.close();
            			$("body").html($(data).find("data").html());

        		     		        	
        	 		});
    	}
    	else{
    		alert("invalid quantity");
    	}
    	
    });
	
    $(document).on('click', '.remove', function() {
        //alert("hello");
    	var curQuan = parseInt($(".quan").eq($(this).attr("value")).text());
    	var val = parseInt($(".quanInput").eq($(this).attr("value")).val());
    	if(curQuan > 0 && curQuan >= val){
    		
    		var newQuan = curQuan - val;
    		$(".quan").eq($(this).attr("value")).text(newQuan);
    		var key = $(this).attr("name");
        	var quan = $(".quan").eq($(this).attr("value")).text();
        	map2["reqtype"] = "checkout";
        	map2[key] = quan;
        	$.post("/4413project/Start/",
        		    map2,
        		   function(data, status){
        		            //alert("Data: " + data + "\nStatus: " + status);
             			//$("#content").html($(data).find("data").html());
//    		    		 document.open();
//    		             document.write(data);
//    		             document.close();
            			$("body").html($(data).find("data").html());

       		 		     		        	
        	 		});
    	}
    	else{
    		alert("invalid quantity");
    	}
    });
    
	$(document).on('click', '.delete', function() {
       
    	var key = $(this).attr("name");
    	map2["reqtype"] = "checkout";
    	map2[key] = 0;
    	$.post("/4413project/Start/",
    		    map2,
    		   function(data, status){
//    		         
//		    		 document.open();
//		             document.write(data);
//		             document.close();
        			$("body").html($(data).find("data").html());

    		     		        	
    	 		});
    	
    });
	
	$(document).on('click', '#payment', function() {
		 $.get("/4413project/Start/?reqtype=payment",
			        function(data,status){
//					 document.open();
//		             document.write(data);
//		             document.close();
	        			$("body").html($(data).find("data").html());

	     		        	
			        });
    	
    });
	
//	login area js
	var map3 = {};
	$(document).on('click', '#sub', function(){
    	map3["reqtype"] = "payment";
    	map3["login"] = $("#log").val();
    	map3["password"] = $("#pass").val();
        $.post("/4413project/Start/",
        map3,
        function(data, status){
//        	document.open();
//            document.write(data);
//            document.close();
        	//alert(data);
			$("body").html($(data).find("data").html());

        });
    });
    

	$(document).on('click', '#acc', function(){
        $.get("/4413project/Start/?reqtype=account",
        function(data, status){
        	//alert(data);
//        	document.open();
//            document.write(data);
//            document.close();
			$("body").html($(data).find("data").html());

        });
    });
    
//    confirmation area
	$(document).on('click', '#confirm', function(){
        $.get("/4413project/Start/?reqtype=confirm",
        function(data, status){
        	//alert(data);
//        	document.open();
//            document.write(data);
//            document.close();
			$("body").html($(data).find("data").html());

        });
    });
    
    
//    credit card area
      var map4 = {};
      $(document).on('click', '#pay', function(){
	    	
	    	map4["reqtype"] = "confirm";
	    	map4["creditcard"] = $("#credit").val();
	        $.post("/4413project/Confirm",
	        map4,
	        function(data, status){
//	        	document.open();
//	            document.write(data);
//	            document.close();
	        	$("body").html($(data).find("data").html());
	        });
	    });
    
});