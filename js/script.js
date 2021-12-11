

let fruts={
	apple:20,
	banana:30,
	orange:50
}


let total=fruts.apple+fruts.banana+fruts.orange;


function countAngle(a){
	let angle=2*Math.PI*a/total;
	return angle;
}



class PipeChart{
	constructor(x, y, rad, ctx){
		this.x=x;
		this.y=y;
		this.rad=rad;
		this.ctx=ctx;
	}
	draw(ang1,ang2,color){
		

		this.ctx.fillStyle=color;
		this.ctx.beginPath();
		this.ctx.moveTo(this.x,this.y);
		this.ctx.arc(this.x,this.y,this.rad, ang1, ang2);
		this.ctx.closePath();
		this.ctx.fill();
	}

}



document.addEventListener('DOMContentLoaded', ()=>{
	let cvs=document.querySelector('.cvs');
	let ctx = cvs.getContext('2d');
	let pipeChart=new PipeChart(200, 200, 50, ctx);
	pipeChart.draw(0, countAngle(fruts.apple), 'red');
	pipeChart.draw(countAngle(fruts.apple), (countAngle(fruts.apple)+countAngle(fruts.banana)), 'yellow');
	pipeChart.draw((countAngle(fruts.apple)+countAngle(fruts.banana)), (countAngle(fruts.apple)+countAngle(fruts.banana)+countAngle(fruts.orange)), 'orange');

})

