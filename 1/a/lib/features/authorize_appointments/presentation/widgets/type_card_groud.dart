import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TypeCardByGroup extends StatelessWidget {
  const TypeCardByGroup({
    super.key,
    required this.group,
    required this.appoinmentsNumber,
  });

  final int group;
  final int appoinmentsNumber;

  @override
  Widget build(BuildContext context) {

    return Positioned(
      right: 40,
      top: 0,
      child: Container(
        decoration: BoxDecoration(
          color: group == 1
              ? AppColor.redToday
              : group == 2
                  ? AppColor.yellowTomorrow
                  : AppColor.greenOtherToday,
          borderRadius: const BorderRadius.only(topLeft:Radius.circular(5), topRight: Radius.circular(5))
        ),
          child: Padding(
            padding: const EdgeInsets.only(left: 4, right: 4),
            child: Row(
              children: [
                SvgPicture.asset(
                    'assets/svg/notifications.svg',
                      colorFilter: const ColorFilter.mode(
                        AppColor.white,
                          BlendMode.srcIn
                      ), // Cambia el color si es un SVG monocromático
                      width: 16, // Tamaño deseado
                      height: 16,
              ),
                Card(
                  elevation: 0,
                  color: Colors.transparent,
                  child: SizedBox(
                    height: 18,
                    child: AutoSizeText(
                      group == 1
                          ? 'Hoy ($appoinmentsNumber)'
                          : group == 2
                              ? 'Mañana($appoinmentsNumber)'
                              : 'Futuras($appoinmentsNumber)',
                      style: const TextStyle(
                          color: AppColor.white, 
                          fontSize: 14, 
                          fontWeight: FontWeight.w900
                      ),
                      maxFontSize: 14,
                      minFontSize: 12,
                      maxLines: 1,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
  }
}
