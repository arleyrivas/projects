import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';


const colorSeed = Color(0xff424CB8);
const scaffoldBackgroundColor = Color(0xFFF8F7F7);

class AppTheme {

  ThemeData getTheme() => ThemeData(
    ///* General
    useMaterial3: true,
    colorSchemeSeed: colorSeed,

    ///* Texts
    textTheme: TextTheme(
      titleLarge: GoogleFonts.ubuntu()
        .copyWith(fontSize: 40, fontWeight: FontWeight.bold),
      titleMedium: GoogleFonts.ubuntu()
        .copyWith(fontSize: 30, fontWeight: FontWeight.bold),
      titleSmall: GoogleFonts.ubuntu()
        .copyWith(fontSize: 20),
      bodyLarge: GoogleFonts.ubuntu()
        .copyWith(fontSize: 16),
      bodyMedium: GoogleFonts.ubuntu()
        .copyWith(fontSize: 14),
    ),

    ///* Scaffold Background Color
    scaffoldBackgroundColor: scaffoldBackgroundColor,
    
    ///* Buttons
    filledButtonTheme: const FilledButtonThemeData(
      style: ButtonStyle(
        textStyle: MaterialStatePropertyAll(
          TextStyle(
            fontFamily: 'Gilroy',
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    ),

    ///* AppBar
    appBarTheme: const AppBarTheme(
      color: scaffoldBackgroundColor,
      titleTextStyle: TextStyle(
        fontFamily: 'Gilroy',
        fontSize: 25,
        fontWeight: FontWeight.bold,
        color: Colors.black,
      ),
    ),
  );
}
