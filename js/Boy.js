class Boy
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);
	}

	display()
	{
		var boyPos=this.body.position;	
		push()
		translate(boyPos.x, boyPos.y);
		rotate(this.body.position)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image);
		pop()
 }
}