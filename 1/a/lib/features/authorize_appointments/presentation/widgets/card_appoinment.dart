import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:portal/features/authorize_appointments/presentation/widgets/widgets.dart';

class CardAppoinment extends StatelessWidget {
  final String plate;
  final String driver;
  final String dateTime;
  final String containerOHbl;
  final String transport;
  final bool isSelected;
  final int group;
  final String type;
  final VoidCallback onLongPress;

  const CardAppoinment({
    super.key,
    required this.plate,
    required this.driver,
    required this.dateTime,
    required this.containerOHbl,
    required this.transport,
    required this.group,
    required this.type,
    required this.isSelected,
    required this.onLongPress,
  });

  @override
   Widget build(BuildContext context) {
    return GestureDetector(
      onLongPress: onLongPress,
      child: Stack(
        children: [
          // Card principal
          Padding(
            padding: const EdgeInsets.only(top: 16),
            child: Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              color: isSelected ? const Color.fromARGB(255, 216, 236, 252) : AppColor.backGroundForCards,
              elevation: 2,
              child: Padding(
                padding: const EdgeInsets.only(left: 4, right: 4, top: 15, bottom: 4),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        _buildLabelCardForDate(context, 'Fecha y hora', dateTime, 0.26),
                        _buildLabelCardForRow(context, 'Placa', plate, 0.19),
                        Expanded(child:
                        _buildLabelCardForRow(context, 'Conductor', driver),
                        ),
                      ],
                    ),
                    const SizedBox(height: 3),
                    _buildLabelCard('Transporte',  transport),
                    const SizedBox(height: 3),
                    _buildLabelCard(type,  containerOHbl),
                  ],
                ),
              ),
            ),
            
          ),
           IconCcOrCsByType(type: type),
          // Checkbox en la esquina superior izquierda
          Positioned(
            top: 0,
            left: -8,
            child: Checkbox(
              value: isSelected,
              onChanged: (_) => onLongPress(),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(4),
              ),
              checkColor: Colors.white,
              activeColor: AppColor.blueToCheck,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLabelCardForRow(BuildContext context, String label, String value, [double? width]) {
    DeviceDisplay.init(context);
    
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 7),
          child: AutoSizeText(
            label,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              color: AppColor.lightGreenText,
            ),
            maxFontSize: 15,
            minFontSize: 15,
            maxLines: 1,
            overflow: TextOverflow.clip ,
          ),
        ),
        SizedBox(
          width: width != null ? DeviceDisplay.screenWidth*width : DeviceDisplay.screenWidth *0.55,
          height: 45,
          child: Card(
            elevation: 0,
            color: Colors.white,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 7),
              child: AutoSizeText(
                value,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.black87,
                  fontSize: 15,

                ),
                minFontSize: 14,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ),
        ),
      ],
    );
  }
 
  Widget _buildLabelCardForDate(BuildContext context, String label, String dateTime, [double? width]) {
    DeviceDisplay.init(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 7),
          child: AutoSizeText(
            label,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              color: AppColor.lightGreenText,
              fontSize: 15
            ),
            maxFontSize: 15,
            minFontSize: 14,
            maxLines: 1,
          ),
        ),
        SizedBox(
          width: width != null ? DeviceDisplay.screenWidth*width : DeviceDisplay.screenWidth *0.95,
         // width: label.toLowerCase().startsWith('fecha') ? DeviceDisplay.screenWidth*0.7 : DeviceDisplay.screenWidth*0.3,
          child: Card(
            elevation: 0,
            color: Colors.white,
            child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 3),
                    child: Row(
                      children:[
                            Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Icon(Icons.calendar_today, size: 12),
                                  SizedBox(
                                    // width:DeviceDisplay.screenWidth* ,
                                    child: AutoSizeText(
                                    dateTime,
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w600,
                                      color: Colors.black87,
                                      fontSize: 13
                                    ),
                                    minFontSize:12 ,
                                    overflow: TextOverflow.ellipsis,
                                    maxLines: 1,
                                                              ),
                                  ),
                                ],
                            ),
                          
                      ]
                    
                  ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildLabelCard(String type, String containersOrHbl) {
     var label =  type == 'CON'? 'Contenedores': ( type == 'BBK' ? 'HBL': type);
     
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 7),
          child: Text(
            label,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              color: AppColor.lightGreenText,
              fontSize: 15,
            ),
          ),
        ),
        Card(
          elevation: 0,
          color: Colors.white,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 0),
            child: SizedBox(
              height: 35,
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      containersOrHbl,
                      style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w300),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
       
      ],
    );
  }
}

