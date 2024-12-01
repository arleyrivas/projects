import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';

class IconCcOrCsByType extends StatelessWidget {
  final String type;
  const IconCcOrCsByType({
    super.key, 
    required this.type
  });

  @override
  Widget build(BuildContext context) {
    return Positioned(
       top: 5,
       left: 94,
      child: SizedBox(
        height: 40,
        width: 40,
      
        child: Card(
           shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                        side: const BorderSide(
                          color: Colors.black12,
                          )
                      ),
                      color: AppColor.white,
          child: Padding(
            padding: const EdgeInsets.all(3),
            child: type == 'CC' 
              ? Image.asset(  'assets/images/new_container_cc.png',  width: 27,  height: 27,) 
              : Image.asset(  'assets/images/new_box_cs.png',  width: 27,  height: 27,),
          ),
        ),
      ),
    );
  }
}