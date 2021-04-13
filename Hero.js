class Hero {
  constructor(xp,yp,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=xp;
		this.y=yp;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);
		this.mousepos = {x:xp, y:yp}

	}
	
	display()
	{
			if (mouseisdown) {
				Matter.Body.setPosition(this.body, this.mousepos)
			}
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
