class object
{
  constructor(objectScript)
  {
    var elementList = objectScript.split(',');

    this._type = elementList[0];
    this._shape = elementList[1];
    
    if((this._type == "custom" || this._type == "base" || (this._type == "photon" && this._shape.substring(0,5) != "spawn")) && elementList.length >= 19)
    {
      this._texture = elementList[2];
      this._length = elementList[3];
      this._hight = elementList[4];
      this._width = elementList[5];
      this._color = elementList[6];
      this._red = elementList[7];
      this._green = elementList[8];
      this._blue = elementList[9];
      this._tileX = elementList[10];
      this._tileY = elementList[11];
      this._Xpos = elementList[12];
      this._Ypos = elementList[13];
      this._Zpos = elementList[14];
      this._Xangle = elementList[15];
      this._Yangle = elementList[16];
      this._Zangle = elementList[17];
      this._Wangle = elementList[18];
    }
    else if(this._type == "base" && elementList.length >= 9)
    {
      this._Xpos = elementList[2];
      this._Ypos = elementList[3];
      this._Zpos = elementList[4];
      this._Xangle = elementList[5];
      this._Yangle = elementList[6];
      this._Zangle = elementList[7];
      this._Wangle = elementList[8];
    }
    else if((this._type == "racing" || (this._type == "misc" && this._shape == "barrier")) && elementList.length >= 12)
    {
      this._length = elementList[2];
      this._hight = elementList[3];
      this._width = elementList[4];
      this._Xpos = elementList[5];
      this._Ypos = elementList[6];
      this._Zpos = elementList[7];
      this._Xangle = elementList[8];
      this._Yangle = elementList[9];
      this._Zangle = elementList[10];
      this._Wangle = elementList[11];
    }
    else if(this._type == "misc" && elementList.length >= 13)
    {
      this._name = elementList[2];
      this._length = elementList[3];
      this._hight = elementList[4];
      this._width = elementList[5];
      this._Xpos = elementList[6];
      this._Ypos = elementList[7];
      this._Zpos = elementList[8];
      this._Xangle = elementList[9];
      this._Yangle = elementList[10];
      this._Zangle = elementList[11];
      this._Wangle = elementList[12];
    }
    else if(this._type == "spawnpoint" && elementList.length >= 9)
    {
      this._Xpos = elementList[2];
      this._Ypos = elementList[3];
      this._Zpos = elementList[4];
      this._Xangle = elementList[5];
      this._Yangle = elementList[6];
      this._Zangle = elementList[7];
      this._Wangle = elementList[8];
    }
    else if(this._type == "photon" && elementList.length >= 11)
    {
      this._spawnTime = elementList[2];
      this._endlessMode = elementList[3];
      this._Xpos = elementList[4];
      this._Ypos = elementList[5];
      this._Zpos = elementList[6];
      this._Xangle = elementList[7];
      this._Yangle = elementList[8];
      this._Zangle = elementList[9];
      this._Wangle = elementList[10];
    }
    else
    {
      this._type = "comment";
      this._content = objectScript;
      delete this._shape;
    }
  }
}

object.prototype.toString = function()
{
  var objectScript = this._type + "," + this._shape;
  
  if(this._type == "custom" || this._type == "base" || (this._type == "photon" && this._shape.substring(0,5) != "spawn"))
  {
    objectScript = objectScript.concat(",", [this._texture, this._length, this._hight, this._width, this._color, this._red, this._green, this._blue, this._tileX, this._tileY, this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else if(this._type == "base")
  {
    objectScript = objectScript.concat(",", [this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else if(this._type == "racing" || (this._type == "misc" && this._shape == "barrier"))
  {
    objectScript = objectScript.concat(",", [this._length, this._hight, this._width, this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else if(this._type == "misc")
  {
    objectScript = objectScript.concat(",", [this._name, this._length, this._hight, this._width, this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else if(this._type == "spawnpoint")
  {
    objectScript = objectScript.concat(",", [this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else if(this._type == "photon")
  {
    objectScript = objectScript.concat(",", [this._spawnTime, this._endlessMode, this._Xpos, this._Ypos, this._Zpos, this._Xangle, this._Yangle, this._Zangle, this._Wangle].join(","));
  }
  else
  {
    objectScript = this._content;
  }
  
  if(this._type != "comment")
  {
    objectScript = objectScript.concat(";");
  }
  
  return objectScript;
}

class customMap
{
  constructor(mapScript)
  {
    var separatedList = mapScript.split(/(\n|;)/);
    this.objects = [];
    
    for(var i = 0; i < separatedList.length; i++)
    {
      if(separatedList[i] !== "" && separatedList[i] !== ";")
      {
        this.objects.push(new object(separatedList[i]));
        
        if(this.objects[this.objects.length - 1]._type == "comment" && separatedList[i + 1] == ";")
        {
          this.objects[this.objects.length - 1]._content = this.objects[this.objects.length - 1]._content.concat(";");
        }
      }
    }
  }
  
  Translate(displacement)
  {
    for(var i = 0; i < this.objects.length; i++)
    {
      if(this.objects[i]._type != "comment")
      {
        this.objects[i]._Xpos += displacement.X;
        this.objects[i]._Ypos += displacement.Y;
        this.objects[i]._Zpos += displacement.Z;
      }
    }
  }
  
  Rotate(rotation, pivot)
  {
    if(arguments.length = 1)
    {
      pivot = new Point();
      
      for(var i = 0; i < this.objects.length; i++)
      {
        if(this.objects[i]._type != "comment")
        {
          pivot.X += parseFloat(this.objects[i]._Xpos);
          pivot.Y += parseFloat(this.objects[i]._Ypos);
          pivot.Z += parseFloat(this.objects[i]._Zpos);
        }
      }
      
      pivot.X /= this.objects.length;
      pivot.Y /= this.objects.length;
      pivot.Z /= this.objects.length;
    }
    
    for(var i = 0; i < this.objects.length; i++)
    {
      if(this.objects[i]._type != "comment")
      {
        var objectRotation = new quaternion(this.objects[i]._Wangle, this.objects[i]._Xangle, this.objects[i]._Yangle, this.objects[i]._Zangle);
        objectRotation = multiplyQuat(rotation, objectRotation);
        
        this.objects[i]._Wangle = objectRotation.W;
        this.objects[i]._Xangle = objectRotation.X;
        this.objects[i]._Yangle = objectRotation.Y;
        this.objects[i]._Zangle = objectRotation.Z;
        
        var objectPosition = new Point(this.objects[i]._Xpos, this.objects[i]._Ypos, this.objects[i]._Zpos);
        objectPosition.Rotate(pivot, rotation);
        
        this.objects[i]._Xpos = objectPosition.X;
        this.objects[i]._Ypos = objectPosition.Y;
        this.objects[i]._Zpos = objectPosition.Z;
      }
    }
  }
}

customMap.prototype.toString = function()
{
  var mapScript = "";
  
  for(i = 0; i < this.objects.length; i++)
  {
    mapScript = mapScript.concat(this.objects[i].toString());
  }
  
  return mapScript;
}