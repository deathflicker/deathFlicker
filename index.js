
// After whole document loads run this jQuery
$(document).ready(function(){
	setTimeout(removeAnim, 100);
});

/*********************************************************/
// all variables below
var mainGud = document.getElementById('mainGud');
var loadingAnim = document.getElementById('loadingAnim');
var scrollBody = document.getElementById('scrollBody');
var currentDegree = 0;




/**********************************************************/
//removes loading animation after page is properly loaded
function removeAnim(){
	loadingAnim.style.display = 'none';
}




/********************************************************/
//required functions below


//all stuffs will start from here, i.e. main function
function main(){
	currentDegree += 5;
	if (currentDegree<=90) 
	{
		mainGud.style.transform = "rotate("+currentDegree+"deg)";
		console.log(scrollBody.scrollTop,currentDegree);
	}
	else{
		scrollBody.style.overflowY = "hidden";
		scrollBody.scrollTop = 0;
	}
}



