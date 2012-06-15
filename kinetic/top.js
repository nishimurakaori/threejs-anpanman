$(function() {
	//左メニューのタブ
	$( "#tabs" ).tabs();
	
	//左メニューのtree view
	$("#browser").treeview({
		toggle: function() {
			console.log("%s was toggled.", $(this).find(">span").text());
		}
	});
	$("#add").click(function() {
		var branches = $("<li><span class='folder'>New Sublist</span><ul>" + 
			"<li><span class='file'>Item1</span></li>" + 
			"<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
		$("#browser").treeview({
			add: branches
		});
	});



});
