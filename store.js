/* to setup the armor and check the balance and type of armor */
function armor(head, body, leg)
{
    if(head.type == "head" && body.type == "body" && leg.type == "leg")
    {
        var cost = head.cost + body.cost + leg.cost;
        if(cost > 20) {
            console.log("you don't have enough money!!");
            return false;
        }
        else{
            return [head.health, body.health, leg.health];
        }
        
    }
    else
    {
        console.log("The types you selected for armor are not correct");
        return false;
    }
}

/* select from this store */

var goldHead = 
    {
        health: 20,
        cost: 10,
        type: "head"
    };

var sliverHead = 
    {
        health: 10,
        cost: 5,
        type: "head"
    };

var goldBody = 
    {
        health: 20,
        cost: 10,
        type: "body"
    };

var sliverBody = 
    {
        health: 10,
        cost: 5,
        type: "body"
    };

var goldLeg = 
    {
        health: 20,
        cost: 10,
        type: "leg"
    };

var sliverLeg = 
    {
        health: 10,
        cost: 5,
        type: "leg"
    };