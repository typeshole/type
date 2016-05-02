class Car
{
  double fuelLeft;
  // A double represents a double precision floating point number.
  // useful for specific measurements particularly volume or cost.
  // a common statement to would be something like...
  // fuelLeft = 12.33;

  // In DrJava's Interactions pane try typing
  Car aFerrari = new Car();

  // then type...

  aFerrari.fuelLeft = 2.32;
  // this . sybolizes aFerrari (an object of type Car)
  // and its ownership of the fuel it has left
  // remember  the "." represents ownership

  // For starters, to see the ferrari's fuel left one would type...
  System.out.print("Ferrari's fuel left = " + aFerrari.fuelLeft);

  // which should display 2.32
}
