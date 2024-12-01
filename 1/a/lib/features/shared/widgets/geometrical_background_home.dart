import 'package:flutter/material.dart';
import 'package:portal/config/constants/colors/app_color.dart';

class GeometricalBackgroundHome extends StatelessWidget {
  final Widget child;
  const GeometricalBackgroundHome({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Fondo principal con color verde claro
        Positioned.fill(
          child: Container(
            color: AppColor.lightGreen, // Color verde claro
          ),
        ),

        // Área debajo de la curva con color verde oscuro
        Positioned(
          bottom: 0, // Alineado en la parte inferior
          left: 0,
          right: 0,
          child: Container(
            color: AppColor.white , // Color verde oscuro
            height: MediaQuery.of(context).size.height * 0.04, // Altura del área debajo de la curva
          ),
        ),

        // Curva en la parte inferior con `ClipPath`
        Positioned(
          bottom: MediaQuery.of(context).size.height * 0.039, // Ajuste para que la curva esté a 30% de la altura
          left: 0,
          right: 0,
          child: ClipPath(
            clipper: MyBottomCurveClipper(),
            child: Container(
              color: AppColor.white, // Color verde oscuro para la curva
              height: MediaQuery.of(context).size.height * 0.7, // Altura de la curva
            ),
          ),
        ),

        // Contenido hijo (si deseas agregar widgets encima)
        child,
      ],
    );
  }
}

// Definición de la forma personalizada para la curva inferior
class MyBottomCurveClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    var path = Path();

    // Comienza en la esquina inferior izquierda
    path.moveTo(0, size.height); // Inicia en la parte inferior de la curva

    // Primera curva hacia el centro
    path.quadraticBezierTo(
      size.width * 0.25, size.height * 0.6, // Ajuste de la posición del punto de control
      size.width * 0.5, size.height * 0.65, // Ajuste de la posición del punto final de la curva
    );

    // Segunda curva hacia la esquina inferior derecha
    path.quadraticBezierTo(
      size.width * 0.75, size.height * 0.7, // Ajuste de la posición del punto de control
      size.width, size.height * 0.5,         // Ajuste de la posición del punto final de la curva
    );

    // Línea hasta el borde inferior derecho
    path.lineTo(size.width, size.height);

    // Cierra el área inferior
    path.lineTo(0, size.height);
    path.close();

    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return false;
  }
}
