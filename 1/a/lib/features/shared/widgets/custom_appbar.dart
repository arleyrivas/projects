import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CustomAppbar extends StatelessWidget  implements PreferredSizeWidget{
  final String userName;
  // final VoidCallback onMenuPressed;
  // final VoidCallback onNotificationPressed; 
  
  const CustomAppbar({
    super.key,
    this.userName = 'Not UserName',
    // this.onMenuPressed,
    // this.onNotificationPressed,
  });

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child:  Padding(
        padding: const EdgeInsets.symmetric( horizontal: 10),
        child: SizedBox(
          width: double.infinity,
          child: Row(
            children: [
              // const Icon( Icons.person, color: AppColor.White),
               SvgPicture.asset(
                   'assets/svg/user.svg',
                    colorFilter: const ColorFilter.mode(
                      AppColor.white,
                        BlendMode.srcIn
                    ), // Cambia el color si es un SVG monocromático
                    width: 18, // Tamaño deseado
                    height: 18,
              ),

              Text(
                ' $userName', 
                style: 
                const TextStyle(color: AppColor.white),
              ),

              const Spacer(), // para que el userName ocupe todo el ancho posible asi movemos los otros icons a la derecha

             
              // IconButton(
              //   onPressed: (){},
              //   icon: SvgPicture.asset(
              //         'assets/svg/notifications.svg',
              //         colorFilter: const ColorFilter.mode(
              //           AppColor.white,
              //             BlendMode.srcIn
              //         ), // Cambia el color si es un SVG monocromático
              //         width: 24, // Tamaño deseado
              //         height: 24,
              //       ),
              //   ),

              //  IconButton(
              //   onPressed: (){},
              //   icon: SvgPicture.asset(
              //           'assets/svg/settings.svg',
              //             colorFilter: const ColorFilter.mode(
              //               AppColor.white,
              //                 BlendMode.srcIn
              //             ), // Cambia el color si es un SVG monocromático
              //             width: 24, // Tamaño deseado
              //             height: 24,
              //         ),
              // ),
            ],
          ),
        ),
      )
    );
  }
  

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}