import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:portal/config/constants/menu/menu_items.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/features/home/presentation/provider/favorites_notifier.dart';

class ServiceItem extends ConsumerWidget  {

  final MenuItems item;
  final int numberNotification;


  const ServiceItem({
    super.key,
    required this.item,
    required this.numberNotification,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    DeviceDisplay.init(context);
     // Leer el estado de favoritos
    final favorites = ref.watch(favoritesProvider);

// Función para alternar favoritos
    void toggleFavorite() {
      ref.read(favoritesProvider.notifier).toggleFavorite(item);
    }

  return Padding(
    padding:  EdgeInsets.symmetric(horizontal: DeviceDisplay.screenWidth*0.012),
    child: GestureDetector(
      onTap: () {
        GoRouter.of(context).go(item.route);
      },
      child: Column(
        children: [
          Stack(
            children: [
              Container(
                width: DeviceDisplay.screenWidth*0.27,
                height: DeviceDisplay.screenHeight*0.115,
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  borderRadius: BorderRadius.circular(12),
                ),
                alignment: Alignment.center,
                child: item.svgName.isNotEmpty
                    ? SvgPicture.asset(
                        'assets/svg/${item.svgName}.svg',
                        height: DeviceDisplay.screenHeight*0.07,
                      )
                    : const Text(''),
              ),
              if (item.hasNotification)
                Positioned(
                  top: 2,
                  right: 6,
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    decoration: const BoxDecoration(
                      color: Colors.red,
                      shape: BoxShape.circle,
                    ),
                    child: Text(
                      '$numberNotification',
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              Positioned(
                bottom: -8,
                right: -10,
                child: IconButton(
                  onPressed:toggleFavorite,
                  icon: Image.asset(
                    item.isFavorite ? 'assets/images/minus.png' : 'assets/images/plus_white_back_green.png',
                    width: DeviceDisplay.screenWidth*0.047,
                    height: DeviceDisplay.screenHeight*0.0215,
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height:  DeviceDisplay.screenHeight*0.01),
          SizedBox(
            width: DeviceDisplay.screenWidth*0.27,
            child: AutoSizeText(
              item.label,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 12),
              minFontSize: 10,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
    ),
  );
  }
}

