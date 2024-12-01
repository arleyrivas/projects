import 'package:flutter/material.dart';

class CustomFilledButton extends StatelessWidget {

  final void Function()? onPressed;
 final String? text;
  final Widget? child;
  final Color? buttonColor;
  final TextStyle? textStyle;

  const CustomFilledButton({
    super.key, 
    this.onPressed, 
    this.text, 
    this.buttonColor, 
    this.textStyle, 
    this.child
    
  });

  @override
  Widget build(BuildContext context) {

    const radius = Radius.circular(10);

    return FilledButton(
      style: FilledButton.styleFrom(
        backgroundColor: buttonColor,
        shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: radius,
          bottomRight: radius,
          topLeft: radius,
          topRight: radius,
        )
      )),
        
  
      onPressed: onPressed, 
       child: text != null
          ? Text(
              text!,
              style: textStyle,
            )
          : child,
    );
  }
}