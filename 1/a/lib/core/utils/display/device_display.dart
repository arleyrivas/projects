import 'package:flutter/material.dart';

class DeviceDisplay {
  static late BuildContext _context;


  static void init(BuildContext context) {
    _context = context;
  }

  static double get screenWidth => MediaQuery.of(_context).size.width;

  static double get screenHeight => MediaQuery.of(_context).size.height;
}
