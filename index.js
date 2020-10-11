
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
var bishalGudDiv = document.getElementById('bishalGudDiv');
var bishalGud = document.getElementById('bishalGud');




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
	}
	else{
		scrollBody.style.overflowY = "hidden";
		scrollBody.scrollTop = 0;
		if(currentDegree>=90){
			bishalGud.style.height = "60%";
			bishalGud.style.width = "100%";
			mainGud.style.transition = "2s";
			bishalGud.style.transition = "2s";
			bishalGud.style.opacity = "1";
			mainGud.style.width = "18%";
			mainGud.style.height = "18%";
			setTimeout(mainSub, 3000);
		}
	}
}

//Works as a timer
function mainSub(){
	scrollBody.setAttribute("onscroll", "showCake()");
	scrollBody.style.overflowY = "scroll";
	bishalGudDiv.style.display = "none";
	mainGud.style.display = "none";
}



// Second step in webpage, will show cake
function showCake(){
	
}