
import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/config/config.dart';
import 'package:flutter/services.dart';


void main() async {

  await Enviroment.initEnviroment();
  FlutterNativeSplash.preserve(widgetsBinding:  WidgetsFlutterBinding.ensureInitialized());

  WidgetsFlutterBinding.ensureInitialized();

    // Establece la orientación en vertical (retrato) siempre
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]).then((_) {

  runApp(
    const ProviderScope(child: MainApp())
  );
  });
}



class MainApp extends ConsumerWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {

    final appRouter = ref.watch(goRouterProvider);
    return MaterialApp.router(
      routerConfig: appRouter,
      theme: AppTheme().getTheme(),
      debugShowCheckedModeBanner: false,
    );
  }
}


