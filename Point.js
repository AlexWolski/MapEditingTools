class Point
{
  constructor()
  {
    switch(arguments.length)
    {
      case 0:
        this.X = 0;
        this.Y = 0;
        this.Z = 0;
        break;
      
      case 1:
        this.X = arguments[0].X
        this.Y = arguments[0].Y
        this.Z = arguments[0].Z
        break;
      
      case 3:
        this.X = arguments[0];
        this.Y = arguments[1];
        this.Z = arguments[2];
        break;
      }
    }
  
  scalarAdd(scalar)
  {
    this.X += scalar;
    this.Y += scalar;
    this.Z += scalar;
  }
  
  scalarMultiply(scalar)
  {
    this.X *= scalar;
    this.Y *= scalar;
    this.Z *= scalar;
  }
  
  Rotate(pivot, rotation)
  {
    var tempPosition = pointSubtract(this, pivot);
    var quatImaginary = new Point(rotation.X, rotation.Y, rotation.Z);
    
    var vector1 = new Point(quatImaginary);
    vector1.scalarMultiply(2*Dot(quatImaginary, tempPosition));
    
    var vector2 = new Point(tempPosition);
    vector2.scalarMultiply(Math.pow(rotation.W, 2) - Dot(quatImaginary, quatImaginary));
    
    var vector3 = Cross(quatImaginary, tempPosition);
    vector3.scalarMultiply(2*rotation.W);
    
    this.X = vector1.X + vector2.X + vector3.X + pivot.X;
    this.Y = vector1.Y + vector2.Y + vector3.Y + pivot.Y;
    this.Z = vector1.Z + vector2.Z + vector3.Z + pivot.Z;
  }
}

function pointAdd(point1, point2)
{
  var addedPoint = new Point();
  
  addedPoint.X = point1.X + point2.X;
  addedPoint.Y = point1.Y + point2.Y;
  addedPoint.Z = point1.Z + point2.Z;
  
  return addedPoint;
}

function pointSubtract(point1, point2)
{
  var subtractedPoint = new Point();
  
  subtractedPoint.X = point1.X - point2.X;
  subtractedPoint.Y = point1.Y - point2.Y;
  subtractedPoint.Z = point1.Z - point2.Z;
  
  return subtractedPoint;
}

function Dot(vector1, vector2)
{
  return vector1.X * vector2.X + vector1.Y * vector2.Y + vector1.Z * vector2.Z;
}

function Cross(vector1, vector2)
{
  var crossProduct = new Point;
  
  crossProduct.X = vector1.Y * vector2.Z - vector1.Z * vector2.Y;
  crossProduct.Y = vector1.Z * vector2.X - vector1.X * vector2.Z;
  crossProduct.Z = vector1.X * vector2.Y - vector1.Y * vector2.X;
  
  return crossProduct;
}