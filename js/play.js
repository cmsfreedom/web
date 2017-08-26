	window.onload=function ()
{
	var Movepic=document.getElementById('move_picture');
    var Oimg=Movepic.getElementsByTagName('img');
    var Movet=document.getElementById('move_txt');
    var Oli=Movet.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var now=0;
for(var i=0;i<Oimg.length;i++)
{
	Oimg[i],index=i;
	Oimg[i].onclick=function()
	{
		now=this.index;
		function tab() {
			for(var i=0;i<Oimg.length;i++)
			{
				Oli[i].className='';
			}
			Oli[now].className="active";
			startMovw(Oimg, {left:-100*now+'%'});
		}
	}
};
function next()
{
	now++;
		if(now==Oimg.length)
		{
			now=0;
		}
		function tab(){
			for(var i=0;i<Oimg.length;i++)
			{
				Oli[i].className='';
			}
			Oli[now].className="active";
			startMovw(Oimg, {left:-100*now+'%'});
		}

}
var timer=setInterval(next, 5000);
	Movepic.onmouseover=function()
	{
		clearInterval(timer);
	}
	Movepic.onmouseout=function()
	{
		timer=setInterval(next, 5000);
	}
}