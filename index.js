module.exports = {

	blocks: {
		upverter: {
            process: function(args) {
            
				var params = args.body.split("/"); 
				
				if (this.generator != "website") {
					var upverterMd = "[![FaBo by GClue "+params[5]+" - Upverter]";
					upverterMd += "(https://upverter.com/"+params[3]+"/"+params[4]+"/"+params[5]+"/embed_img/"+params[7]+"/)]";
					upverterMd += "(https://upverter.com/"+params[3]+"/"+params[4]+"/"+params[5]+"/#/)";
					
                    return upverterMd;
                }
				
				var upverterHtml = "<iframe title='FaBo LED' width='800' height='600' scrolling='no'";
				upverterHtml += " frameborder='0' name='FaBo' class='eda_tool' ";
				upverterHtml +=  " src='https://upverter.com/eda/embed/#designId="+params[4]+",actionId='></iframe>";
			    
			    return upverterHtml;
			}
		}
	}
	
};
