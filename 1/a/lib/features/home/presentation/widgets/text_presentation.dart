import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:auto_size_text/auto_size_text.dart';

class TextPresentation extends StatelessWidget {
  final String text;
  final double fontSize;
  final FontWeight fontWeight;

  const TextPresentation({
   super.key, 
   required this.text,
   required this.fontSize,
   required this.fontWeight
  });


  @override
  Widget build(BuildContext context,) {
    return AutoSizeText( 
      text,
      textAlign:TextAlign.left,
      style: TextStyle(
        color: AppColor.white,
        fontSize: fontSize,
        fontWeight: fontWeight
      ),
    );
  }
}
