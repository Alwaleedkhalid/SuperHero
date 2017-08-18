/*
@param(name): name of the character
@param(armor): array of the wared armor (head, body, leg)
*/


function superHero(name, armor)
{
    this.name = name;
    this.health = 100;
    this.power = 5;
    this.armor = armor;
    this.attach = function(obj, pos)
    {
        if(pos == "head"){
            if(obj.armor[0] > 0)
                {
                   obj.armor[0] = obj.armor[0] - this.power; 
                }
            else {
                obj.health = obj.health - this.power;
            }    
        }
        else if(pos == "body"){
            if(obj.armor[1] > 0)
                {
                   obj.armor[1] = obj.armor[1] - this.power; 
                }
            else {
                obj.health = obj.health - this.power;
            }  
        }
        else if(pos == "leg"){
            if(obj.armor[2] > 0)
                {
                   obj.armor[2] = obj.armor[2] - this.power; 
                }
            else {
                obj.health = obj.health - this.power;
            }  
        }
        console.log(this.name + " Attached "+ obj.name +" in "+ pos +" resulted in health = "+ obj.health);
        if(obj.health <= 0)
            {
                console.log(this.name +" Has defeted "+ obj.name +" successfully");
            }
    }
    console.log(this.name + " Have been setup");
}

var armor1 = armor(sliverHead, goldBody, sliverLeg);
var armor2 = armor(sliverHead, goldBody, sliverLeg);

var player1 = new superHero("Hamad", armor1);
var player2 = new superHero("abdullah", armor1);

// build player attachs
player1.attach(player2, "head");

