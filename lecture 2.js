

//Task 2
let arrays = [[1, 2, 3], [4, 5], [6]];

function Flatten(variable)
{
    if(Array.isArray(variable))
    {
        return variable.reduce(function (flat, toFlatten)
        {
            return flat.concat(Array.isArray(toFlatten) ? Flatten(toFlatten) : toFlatten)
        }, []);
    }
    
    return null;
}

console.log(Flatten(arrays));


//Task 3
class Vec
{
    constructor(posX, posY)
    {
        this.x = posX;
        this.y = posY;
    }

    plus(obj) 
    {
        if( obj instanceof Vec)
        {
            this.x += obj.x;
            this.y += obj.y;
        }
        return this.x + "," + this.y;    
    }

    minus(obj)
    {
        if(obj instanceof Vec)
        {
            this.x -= obj.x;
            this.y -= obj.y;
        }
        return this.x + "," + this.y;
    }

    get length()
    {
        return Math.sqrt(this.x^2 + this.y^2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);



