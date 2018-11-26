function Request(){

	var requestParam ="";

        this.getParameter = function(param){

    	var url = unescape(location.href); //현재 주소를 decoding

        var paramArr = (url.substring(url.indexOf("?")+1,url.length)).split("&"); //파라미터만 자르고, 다시 &그분자를 잘라서 배열에 넣는다. 

        

        for(var i = 0 ; i < paramArr.length ; i++){

            var temp = paramArr[i].split("="); //파라미터 변수명을 담음

            

            if(temp[0].toUpperCase() == param.toUpperCase()){

            	requestParam = paramArr[i].split("=")[1]; // 변수명과 일치할 경우 데이터 삽입

                break;

            }

        }

        return requestParam;

    };

}