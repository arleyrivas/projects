import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:portal/config/constants/menu/menu_items.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:portal/features/auth/domain/domain.dart';
import 'package:portal/features/home/presentation/widgets/widgets.dart';
import 'package:auto_size_text/auto_size_text.dart';


class Home extends StatelessWidget {


  final User? user;
  final List<MenuItems> filteredItemsFavorite;
  final List<MenuItems> filteredItems;

  const Home({
    super.key,
    required this.user,
    required this.filteredItemsFavorite,
    required this.filteredItems,
  });
  
  @override
  Widget build(BuildContext context) {
    DeviceDisplay.init(context);
   

    return Column(
      children: [
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        
        
        children: [
            SizedBox(height: DeviceDisplay.screenHeight*0.09),
            Padding(
              padding: EdgeInsets.only(left: DeviceDisplay.screenWidth*0.07),
              child: TextPresentation(text: 'Hola ${user?.names}', fontSize: 34.0, fontWeight: FontWeight.w900,),
            ),
             Padding(
              padding: EdgeInsets.only(left: DeviceDisplay.screenWidth*0.07),
              child: const TextPresentation(text: 'Bienvenido a Aguadulce Conecta.', fontSize: 20.0, fontWeight: FontWeight.w100,),
            ),
            
            SizedBox(height: DeviceDisplay.screenHeight*0.02),   
            Padding(
              padding: EdgeInsets.only(left: DeviceDisplay.screenWidth*0.07),
              child:  const TextPresentation(text: 'Aquí podrás realizar tus trámites y consultas de forma ágil y eficaz.', fontSize: 20.0, fontWeight: FontWeight.w100,),
            ),
                  
           SizedBox(height: DeviceDisplay.screenHeight*0.03),   
           SizedBox(
                             
            height: DeviceDisplay.screenHeight>850? DeviceDisplay.screenHeight*0.48 :  DeviceDisplay.screenHeight*0.51,
            child: Padding(
              padding:  EdgeInsets.only(left: DeviceDisplay.screenWidth*0.011, right: DeviceDisplay.screenWidth*0.011),
              child: Card(
                margin: const EdgeInsets.all(0),
                
                shape: const RoundedRectangleBorder(
                  borderRadius: BorderRadius.all( Radius.circular(25) ),
                 
                ),
                child: Padding(
                  padding: EdgeInsets.only(left: DeviceDisplay.screenWidth*0.025),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(height: DeviceDisplay.screenHeight*0.015), 
                      // Sección de "Tus favoritos"
                      Padding(
                        padding: const EdgeInsets.only(left: 5),
                        child: Row(
                            children: [
                              Image.asset(
                                'assets/images/hard_green.png',
                                width: DeviceDisplay.screenWidth*0.06,
                                height: DeviceDisplay.screenWidth*0.06,
                              ),
                              const Expanded(
                              child: AutoSizeText(
                                " Tus favoritos",
                                style: TextStyle(
                                    fontSize: 22,
                                    fontWeight: FontWeight.normal,
                                    color: AppColor.lightGreen),
                                maxFontSize: 22,
                                minFontSize: 15 ,
                                maxLines: 1,
                                // overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            ] 
                        ),
                      ),
                      
                      SizedBox(height: DeviceDisplay.screenHeight*0.01),   
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: 
                            filteredItemsFavorite.map((item){
                                return ServiceItem(item: item, numberNotification: 0);
                            }).toList(),
                        ),
                      ),
                      SizedBox(height: DeviceDisplay.screenHeight*0.025),
                         
                       const AutoSizeText(
                          " Todos los servicios",
                          style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.normal,
                              color: AppColor.lightGreen),
                          maxFontSize: 25,
                          minFontSize: 15,
                          maxLines: 1,
                          // overflow: TextOverflow.ellipsis,
                        ),
                      SizedBox(height: DeviceDisplay.screenHeight*0.01),  
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children:
                            filteredItems.map((item){
                                return ServiceItem(item: item, numberNotification: 0);
                            }).toList(),
                        ),
                      ),
                                     
                    ],
                  ),
                ),
              ),
            ),
          ),

        ],
      ),
    ],
    );
  }
}