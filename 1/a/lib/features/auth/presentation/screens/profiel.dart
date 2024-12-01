

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/features/shared/shared.dart';
import 'package:portal/features/shared/widgets/widgets.dart';
import 'package:go_router/go_router.dart';

class Profiel extends ConsumerStatefulWidget {
  const Profiel({super.key});

 
  @override
  ConsumerState<ConsumerStatefulWidget> createState() =>  _Profiel();

}


class _Profiel extends ConsumerState<Profiel>{


  
  @override
  Widget build(BuildContext context) {
    DeviceDisplay.init(context);
     ref.listen<AuthState>(authProvider, (previous, next) {
      if (next.authStatus == AuthStatus.notAuthenticated) {
        // Redirigir a la pantalla de Login
        GoRouter.of(context).go('/login');
      }
    });
  

    final authState = ref.watch(authProvider);
    final user = authState.user;

    return GeometricalBackgroundHome(
      child: SafeArea(
        child: Scaffold(
          backgroundColor: Colors.transparent,
            body: Stack(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 10, right: 10),
                  child: Column(
                    children: [
                  
                     SizedBox(height: DeviceDisplay.screenHeight*0.1),
                     const AutoSizeText(
                        'Mi Perfil',
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColor.white,
                          fontSize: 32.0,
                          fontWeight: FontWeight.bold,
                        ),
                        minFontSize: 25,
                        maxLines: 1,
                      ),
                      SizedBox(height: DeviceDisplay.screenHeight * 0.07),
                      Card(
                        child: Padding(
                          padding: EdgeInsets.only(top: DeviceDisplay.screenHeight*0.02, bottom: DeviceDisplay.screenHeight*0.02, right:DeviceDisplay.screenWidth*0.01 ),
                          child: Column(
                            children: [
                          
                            Row(
                              children: [
                                Expanded(
                                  flex: 2,
                                  child: SvgPicture.asset(
                                    'assets/svg/user.svg',
                                    height: DeviceDisplay.screenWidth * 0.15,
                                    colorFilter: const ColorFilter.mode(AppColor.darkGreen, BlendMode.srcIn),
                                    
                                  ),
                                ),   
                               Expanded(
                                flex: 5,
                                 child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                                     
                                   SizedBox(
                                     child: AutoSizeText(
                                      user!.userName,
                                      textAlign: TextAlign.left,
                                      style: const TextStyle(
                                        color: AppColor.darkGreen,
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      minFontSize: 16,
                                      maxLines: 1,
                                                         ),
                                   ),
                                  
                                   SizedBox(
                                     child: AutoSizeText(
                                      '${user.names} ${user.lastNames}',
                                      textAlign: TextAlign.left,
                                      style: const TextStyle(
                                        color: AppColor.darkGreen,
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      minFontSize: 16,
                                      maxLines: 1,
                                    ),
                                   ),
                                  
                                   SizedBox(
                                     child: AutoSizeText(
                                      user.email,
                                      textAlign: TextAlign.left,
                                      style: const TextStyle(
                                        color: AppColor.darkGreen,
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      minFontSize: 12,
                                      maxLines: 1,
                                    ),
                                   ),
                                  ],
                                                     ),
                               ),
                              ],
                            ),
                                                SizedBox(height: DeviceDisplay.screenHeight*0.05),
                                                Row(
                          children: [
                            Expanded(
                              flex: 2,
                              child: SvgPicture.asset(
                                'assets/svg/user.svg',
                                height: DeviceDisplay.screenWidth*0.15,
                                colorFilter: const ColorFilter.mode(AppColor.darkGreen, BlendMode.srcIn),
                              ),
                            ),   
                           Expanded(
                            flex: 5,
                             child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                                 
                               SizedBox(
                                 child: AutoSizeText(
                                  user.company.nit,
                                  textAlign: TextAlign.left,
                                  style: const TextStyle(
                                    color: AppColor.darkGreen,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  minFontSize: 16,
                                  maxLines: 1,
                                                     ),
                               ),
                              
                               SizedBox(
                                 child: AutoSizeText(
                                  user.company.companyName,
                                  textAlign: TextAlign.left,
                                  style: const TextStyle(
                                    color: AppColor.darkGreen,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  minFontSize: 12,
                                  maxLines: 1,
                                ),
                               ),
                              
                              ],
                            ),
                           ),
                          ],
                                                ),
                            ]
                          
                          ),
                        ),
                      ),
      
                      
                  
                  
                      Expanded(child: Container()),
                      Padding(
                          padding: EdgeInsets.symmetric(horizontal: DeviceDisplay.screenHeight*0.08),
                          child: CustomFilledButton(
                          buttonColor: AppColor.lightGreen,
                          onPressed: () { 
                            ref.read(authProvider.notifier).logout();
                           
                            },
                          child: const Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                'Cerrar Sesión',
                                style: TextStyle(
                                  fontSize: 20,
                                  color: AppColor.white
                                ),
                              ),
                              SizedBox(width: 10),
                              Icon(Icons.logout, color: AppColor.white),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
      
            ),
            bottomNavigationBar: const CustomBottomNavigationBar() ,
        ),
      ),
    );
  }
}