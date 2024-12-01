import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:portal/config/router/app_router_notifier.dart';
import 'package:portal/features/auth/auth.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/authorize_appointments/presentation/screens/screens.dart';
import 'package:portal/features/home/presentation/screens/home_screen.dart';
import 'package:portal/features/home/home.dart';

final goRouterProvider = Provider((ref) {
  final goRouterNotifier = ref.read(goRouterNotifierProvider);

  return GoRouter(
      initialLocation: '/splash',
      refreshListenable: goRouterNotifier,
      routes: [
        GoRoute(
          path: '/splash',
          builder: (context, state) => const CheckAuthStatusScreen(),
        ),
        GoRoute(
          path: '/login',
          builder: (context, state) => const LoginScreen(),
        ),
        GoRoute(
          path: '/',
          builder: (context, state) => const HomeScreen(),
        ),
        GoRoute(
          path: '/authorizeAppoinments',
          builder: (context, state) => const AuthorizeAppoinments(),
        ),
        GoRoute(
          path: '/profiel',
          builder: (context, state) => const Profiel(),
        ),
      ],
      
      redirect: (context, state) {
        final isGoingTo = state.matchedLocation;
        final authStatus = goRouterNotifier.authStatus;

        if (isGoingTo == '/splash' && authStatus == AuthStatus.checking) return null;

        if (authStatus == AuthStatus.notAuthenticated) {
          if (isGoingTo == '/login' ||
              isGoingTo == '/register' ||
              isGoingTo == '/authorizeAppoinments' ||
              isGoingTo == '/profiel') return null;

          return '/login';
        }

        if (authStatus == AuthStatus.authenticated) {
          if (isGoingTo == '/login' || isGoingTo == '/splash') {
            return '/';
          }
        }

        return null;
      });
});
