/* @pjs preload="mario.png","layer_01.png"; */

import java.util.Map;

Game game = new Game(1280, 720, 585);

void setup() 
{
  // general setup
  size (1280,720);
  smooth();
  
  game.load();
}

void draw() 
{
  // clear background
  background(255);
  stroke(0);
  
  game.display();
}

void keyPressed(){  
  game.mario.keyHandler.put(str(keyCode), true); 
}

void keyReleased(){  
  game.mario.keyHandler.put(str(keyCode), false); 
}

class Creature
{
  float  x;
  float  y;
  int    r;
  int    g;
  PImage    img;
  int    w;
  int    h;
  int    F;
  float  f;
  float  vx = 0;
  float  vy = 0;
  int    dir = 1;
  
  HashMap<String,Boolean> keyHandler = new HashMap<String,Boolean>();
    
  Creature(float x, float y, int r, int g, String img, int w, int h, int F)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.w = w;
    this.h = h;
    this.F = F;
    this.img = loadImage(img);
    
    this.keyHandler.put(str(LEFT), false); 
    this.keyHandler.put(str(RIGHT), false); 
    this.keyHandler.put(str(UP), false); 
  }
  
  void gravity() {
    if (this.y + this.r < this.g)
    {
      this.vy += 0.2;
            
      if (this.y+this.r+this.vy > this.g)
      {
        this.vy = this.g-this.y-this.r;
      }
    }
    else 
    {
      this.vy = 0;
    }
  }
  
  void upadate() {
  
    this.gravity();
    
    if (this.keyHandler.get(str(LEFT)))
    {
      this.vx = -5;
      this.dir = -1;
    }
    else if (this.keyHandler.get(str(RIGHT)))
    {
      this.vx = 5;
      this.dir = 1;
    }
    else
    {
      this.vx = 0;
    }
    
    if (this.keyHandler.get(str(UP)) && this.y+this.r == this.g)
    {
      this.vy = -10;
    }
    
    this.x += this.vx;
    this.y += this.vy;
  }
  
  void display() {
    this.upadate();
    
    if (this.vx != 0 && this.vy == 0)
    {
        this.f = (this.f+0.2)%this.F;
    } 
    else if (this.vy != 0) {
        this.f = this.F-1;
    }
    else {
        this.f = 3;
    }
            
    if (this.dir > 0) {
        image (this.img, this.x-this.r, this.y-this.r, this.w, this.h, int(this.f)*this.w, 0, (int(this.f)+1)*this.w, this.h);
    }
    else if (this.dir < 0) {
        image (this.img, this.x-this.r, this.y-this.r, this.w, this.h, (int(this.f)+1)*this.w, 0, int(this.f)*this.w, this.h);
    }

    //image (this.img, this.x-this.r, this.y-this.r, this.w, this.h, int(this.f)*this.w, 0, (int(this.f)+1)*this.w, this.h);
    noFill();
    circle(this.x, this.y, this.r*2);
  }
}
     
class Game 
{
  int w;
  int h;
  int g;
  Creature mario;
  PImage bg;
  
  Game(int w, int h, int g)
  {
    this.w = w;
    this.h = h;
    this.g = g;
  }
  
  void load() 
  {
    this.mario = new Creature(100,100,35,g,"mario.png",100,70,11);
    this.bg = loadImage("layer_01.png");
  }
  
  void display() 
  {
    image(this.bg,0,0);
        
    stroke(0,255,0);
    line(0,this.g,this.w,this.g);
                    
    this.mario.display();
  }
}