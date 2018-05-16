function toRadians(angle)
{
  return (angle % 360) * (Math.PI/180);
}

class quaternion
{
  constructor()
  {
    switch(arguments.length)
    {
      case 0:
        this.W = 1;
        this.X = 0;
        this.Y = 0;
        this.Z = 0;
        
        break;
      
      case 3:
        var cosx = Math.cos(toRadians(arguments[0]) * 0.5);
        var cosy = Math.cos(toRadians(arguments[1]) * 0.5);
        var cosz = Math.cos(toRadians(arguments[2]) * 0.5);
        var sinx = Math.sin(toRadians(arguments[0]) * 0.5);
        var siny = Math.sin(toRadians(arguments[1]) * 0.5);
        var sinz = Math.sin(toRadians(arguments[2]) * 0.5);
        
        this.W = cosx * cosy * cosz - sinx * siny * sinz;
        this.X = sinx * cosy * cosz + cosx * siny * sinz;
        this.Y = siny * cosx * cosz - sinx * sinz * cosy;
        this.Z = cosx * cosy * sinz + sinx * siny * cosz;
        
        break;
      
      case 4:
        
        if(arguments[0] == 0 && arguments[1] == 0 && arguments[2] == 0 && arguments[3] == 0)
        {
          this.W = 1;
          this.X = 0;
          this.Y = 0;
          this.Z = 0;
        }
        else
        {
          this.W = arguments[0];
          this.X = arguments[1];
          this.Y = arguments[2];
          this.Z = arguments[3];
          
          var magnitude = Math.sqrt(Math.pow(this.W, 2) + Math.pow(this.X, 2) + Math.pow(this.Y, 2) + Math.pow(this.Z, 2));
          
          this.W = this.W/magnitude;
          this.X = this.X/magnitude;
          this.Y = this.Y/magnitude;
          this.Z = this.Z/magnitude;
        }
        
        break;
    }
  }
}

function multiplyQuat(quat1, quat2)
{
  var multipliedQuat = new quaternion();
  multipliedQuat.W = -quat1.X * quat2.X - quat1.Y * quat2.Y - quat1.Z * quat2.Z + quat1.W * quat2.W;
  multipliedQuat.X = quat1.X * quat2.W + quat1.Y * quat2.Z - quat1.Z * quat2.Y + quat1.W * quat2.X;
  multipliedQuat.Y = -quat1.X * quat2.Z + quat1.Y * quat2.W + quat1.Z * quat2.X + quat1.W * quat2.Y;
  multipliedQuat.Z = quat1.X * quat2.Y - quat1.Y * quat2.X + quat1.Z * quat2.W + quat1.W * quat2.Z;
  
  return multipliedQuat;
}