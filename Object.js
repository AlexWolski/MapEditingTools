class object
{
  constructor(objectScript)
  {
    var elementList = objectScript.split(',');

    this._type = elementList[0];
    this._shape = elementList[1];
    
    if((this._type == "custom" || this._type == "customb" || this._type == "base" || (this._type == "photon" && this._shape.substring(0,5) != "spawn")) && elementList.length >= 19)
    {
      this._texture = elementList[2];
      this._length = parseFloat(elementList[3]);
      this._height = parseFloat(elementList[4]);
      this._width = parseFloat(elementList[5]);
      this._color = Number(elementList[6]);
      this._red = parseFloat(elementList[7]);
      this._green = parseFloat(elementList[8]);
      this._blue = parseFloat(elementList[9]);
      this._tileX = parseFloat(elementList[10]);
      this._tileY = parseFloat(elementList[11]);
      this._Xpos = parseFloat(elementList[12]);
      this._Ypos = parseFloat(elementList[13]);
      this._Zpos = parseFloat(elementList[14]);
      this._Xangle = parseFloat(elementList[15]);
      this._Yangle = parseFloat(elementList[16]);
      this._Zangle = parseFloat(elementList[17]);
      this._Wangle = parseFloat(elementList[18]);
    }
    else if(this._type == "base" && elementList.length >= 9)
    {
      this._Xpos = parseFloat(elementList[2]);
      this._Ypos = parseFloat(elementList[3]);
      this._Zpos = parseFloat(elementList[4]);
      this._Xangle = parseFloat(elementList[5]);
      this._Yangle = parseFloat(elementList[6]);
      this._Zangle = parseFloat(elementList[7]);
      this._Wangle = parseFloat(elementList[8]);
    }
    else if((this._type == "racing" || (this._type == "misc" && this._shape == "barrier")) && elementList.length >= 12)
    {
      this._length = parseFloat(elementList[2]);
      this._height = parseFloat(elementList[3]);
      this._width = parseFloat(elementList[4]);
      this._Xpos = parseFloat(elementList[5]);
      this._Ypos = parseFloat(elementList[6]);
      this._Zpos = parseFloat(elementList[7]);
      this._Xangle = parseFloat(elementList[8]);
      this._Yangle = parseFloat(elementList[9]);
      this._Zangle = parseFloat(elementList[10]);
      this._Wangle = parseFloat(elementList[11]);
    }
    else if(this._type == "misc" && elementList.length >= 13)
    {
      this._name = elementList[2];
      this._length = parseFloat(elementList[3]);
      this._height = parseFloat(elementList[4]);
      this._width = parseFloat(elementList[5]);
      this._Xpos = parseFloat(elementList[6]);
      this._Ypos = parseFloat(elementList[7]);
      this._Zpos = parseFloat(elementList[8]);
      this._Xangle = parseFloat(elementList[9]);
      this._Yangle = parseFloat(elementList[10]);
      this._Zangle = parseFloat(elementList[11]);
      this._Wangle = parseFloat(elementList[12]);
    }
    else if(this._type == "spawnpoint" && elementList.length >= 9)
    {
      this._Xpos = parseFloat(elementList[2]);
      this._Ypos = parseFloat(elementList[3]);
      this._Zpos = parseFloat(elementList[4]);
      this._Xangle = parseFloat(elementList[5]);
      this._Yangle = parseFloat(elementList[6]);
      this._Zangle = parseFloat(elementList[7]);
      this._Wangle = parseFloat(elementList[8]);
    }
    else if(this._type == "photon" && elementList.length >= 11)
    {
      this._spawnTime = parseFloat(elementList[2]);
      this._endlessMode = Number(elementList[3]);
      this._Xpos = parseFloat(elementList[4]);
      this._Ypos = parseFloat(elementList[5]);
      this._Zpos = parseFloat(elementList[6]);
      this._Xangle = parseFloat(elementList[7]);
      this._Yangle = parseFloat(elementList[8]);
      this._Zangle = parseFloat(elementList[9]);
      this._Wangle = parseFloat(elementList[10]);
    }
    else
    {
      this._type = "comment";
      this._content = objectScript;
      delete this._shape;
    }
  }

  //class functions \o/
  isObject() {
    return this._type != "comment";
  }

  setSize(length, height, width) {
    this._length = length;
    this._height = height;
    this._width = width;
  }

  setQuat(quaternion) {
    this._Xangle = quaternion.X;
    this._Yangle = quaternion.Y;
    this._Zangle = quaternion.Z;
    this._Wangle = quaternion.W;
  }

  setQuat(x, y, z, w) {
    this._Xangle = x;
    this._Yangle = y;
    this._Zangle = z;
    this._Wangle = w;
  }







}

object.prototype.toString = function()
{
  var objectScript = this._type + "," + this._shape;
  
  //I used this regex to change them all cause i'm lazy, i'd recommend altering it if you are undoing this/making changes
  //  find: (this._length|this._height|this._width|this._color|this._red|this._green|this._blue|this._tileX|this._tileY|this._Xpos|this._Ypos|this._Zpos|this._Xangle|this._Yangle|this._Zangle|this._Wangle)
  //  replace: parseFloat($1.toFixed(7))
  
  if(this._type == "custom" || this._type == "customb" || this._type == "base" || (this._type == "photon" && this._shape.substring(0,5) != "spawn"))
  {
    objectScript = objectScript.concat(",", [this._texture, parseFloat(this._length.toFixed(7)), parseFloat(this._height.toFixed(7)), parseFloat(this._width.toFixed(7)), parseFloat(this._color.toFixed(7)), parseFloat(this._red.toFixed(7)), parseFloat(this._green.toFixed(7)), parseFloat(this._blue.toFixed(7)), parseFloat(this._tileX.toFixed(7)), parseFloat(this._tileY.toFixed(7)), parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
  }
  else if(this._type == "base")
  {
    objectScript = objectScript.concat(",", [parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
  }
  else if(this._type == "racing" || (this._type == "misc" && this._shape == "barrier"))
  {
    objectScript = objectScript.concat(",", [parseFloat(this._length.toFixed(7)), parseFloat(this._height.toFixed(7)), parseFloat(this._width.toFixed(7)), parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
  }
  else if(this._type == "misc")
  {
    objectScript = objectScript.concat(",", [this._name, parseFloat(this._length.toFixed(7)), parseFloat(this._height.toFixed(7)), parseFloat(this._width.toFixed(7)), parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
  }
  else if(this._type == "spawnpoint")
  {
    objectScript = objectScript.concat(",", [parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
  }
  else if(this._type == "photon")
  {
    objectScript = objectScript.concat(",", [this._spawnTime, this._endlessMode, parseFloat(this._Xpos.toFixed(7)), parseFloat(this._Ypos.toFixed(7)), parseFloat(this._Zpos.toFixed(7)), parseFloat(this._Xangle.toFixed(7)), parseFloat(this._Yangle.toFixed(7)), parseFloat(this._Zangle.toFixed(7)), parseFloat(this._Wangle.toFixed(7))].join(","));
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
    if(pivot == null)
    {
      pivot = new Point();
      
      for(var i = 0; i < this.objects.length; i++)
      {
        if(this.objects[i]._type != "comment")
        {
          pivot.X += this.objects[i]._Xpos;
          pivot.Y += this.objects[i]._Ypos;
          pivot.Z += this.objects[i]._Zpos;
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
  
  Scale(Scale, center)
  {
    if(center == null)
    {
      center = new Point();
      
      for(var i = 0; i < this.objects.length; i++)
      {
        if(this.objects[i]._type != "comment")
        {
          center.X += this.objects[i]._Xpos;
          center.Y += this.objects[i]._Ypos;
          center.Z += this.objects[i]._Zpos;
        }
      }
      
      center.X /= this.objects.length;
      center.Y /= this.objects.length;
      center.Z /= this.objects.length;
    }
    
    for(var i = 0; i < this.objects.length; i++)
    {
      if(this.objects[i]._type != "comment")
      {
        this.objects[i]._length *= Scale;
        this.objects[i]._height *= Scale;
        this.objects[i]._width *= Scale;
        this.objects[i]._Xpos = ((this.objects[i]._Xpos - center.X) * Scale) + center.X;
        this.objects[i]._Ypos = ((this.objects[i]._Ypos - center.Y) * Scale) + center.Y;
        this.objects[i]._Zpos = ((this.objects[i]._Zpos - center.Z) * Scale) + center.Z;
      }
    }
  }

  Mirror(axes, pivot)
  {
    var mirrorX = axes[0];
    var mirrorY = axes[1];
    var mirrorZ = axes[2];

    //get maxs and mins for each axes
    var xMax, xMin;
    var yMax, yMin;
    var zMax, zMin;

    for(var i = 0; i < this.objects.length; i++) {
      if (typeof this.objects[i]._Xpos === "number") {
        xMax = this.objects[i]._Xpos;
        xMin = this.objects[i]._Xpos;
        yMax = this.objects[i]._Ypos;
        yMin = this.objects[i]._Ypos;
        zMax = this.objects[i]._Zpos;
        zMin = this.objects[i]._Zpos;
        break;
      }
    }

    for(var i = 0; i < this.objects.length; i++) {
      if (typeof this.objects[i]._Xpos === "number") {
        xMax = Math.max(xMax, this.objects[i]._Xpos);
        xMin = Math.min(xMin, this.objects[i]._Xpos);

        yMax = Math.max(yMax, this.objects[i]._Ypos);
        yMin = Math.min(yMin, this.objects[i]._Ypos);

        zMax = Math.max(zMax, this.objects[i]._Zpos);
        zMin = Math.min(zMin, this.objects[i]._Zpos);
      }
    }



    //get the relative center
    if (pivot == null) {
      pivot = new Point((xMax + xMin) / 2.0,(yMax + yMin) / 2.0,(zMax + zMin) / 2.0);
    }

    

    if (mirrorX) {
      for(var i = 0; i < this.objects.length; i++) {
        if(this.objects[i].isObject()) {
          //x, y, z, w -> y, x, -w, -z
          this.objects[i].setQuat(this.objects[i]._Yangle, this.objects[i]._Xangle, -this.objects[i]._Wangle, -this.objects[i]._Zangle);
          
          //a special case
          if (this.objects[i]._height == 0)
            this.objects[i]._height = 0.000001;

          this.objects[i]._height = -this.objects[i]._height;

          this.objects[i]._Xpos = (pivot.X - this.objects[i]._Xpos) + pivot.X;
        }
      }
    }

    if (mirrorY) {
      for(var i = 0; i < this.objects.length; i++) {
        if(this.objects[i].isObject()) {
          //x, y, z, w -> x, -y, z, -w 
          this.objects[i].setQuat(this.objects[i]._Xangle, -this.objects[i]._Yangle, this.objects[i]._Zangle, -this.objects[i]._Wangle);
          
          //a special case
          if (this.objects[i]._height == 0)
            this.objects[i]._height = 0.000001;

          this.objects[i]._height = -this.objects[i]._height;

          this.objects[i]._Ypos = (pivot.Y - this.objects[i]._Ypos) + pivot.Y;
        }
      }
    }

    if (mirrorZ) {
      for(var i = 0; i < this.objects.length; i++) {
        if(this.objects[i].isObject()) {
          //x, y, z, w -> y, x, -w, -z
          this.objects[i].setQuat(this.objects[i]._Yangle, this.objects[i]._Xangle, -this.objects[i]._Wangle, -this.objects[i]._Zangle);
          
          //a special case
          if (this.objects[i]._length == 0)
            this.objects[i]._length = 0.000001;
          if (this.objects[i]._height == 0)
            this.objects[i]._height = 0.000001;
          if (this.objects[i]._width == 0)
            this.objects[i]._width = 0.000001;

          this.objects[i]._length = -this.objects[i]._length;
          this.objects[i]._height = -this.objects[i]._height;
          this.objects[i]._width = -this.objects[i]._width;

          this.objects[i]._Zpos = (pivot.Z - this.objects[i]._Zpos) + pivot.Z;
        }
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