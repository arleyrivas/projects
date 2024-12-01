
import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/auth/presentation/providers/providers.dart';
import 'package:portal/features/shared/shared.dart';

class LoginScreen extends StatelessWidget {

  
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    DeviceDisplay.init(context);

    FlutterNativeSplash.remove();
    return GestureDetector(
      onTap: () => FocusManager.instance.primaryFocus?.unfocus(),
      child: SafeArea(
        child: Scaffold(
          resizeToAvoidBottomInset: false,
          body: Stack(
            children: [
              GeometricalBackground(
                child: AnimatedPadding(
                  duration: const Duration(milliseconds: 300),
                  padding: EdgeInsets.only(
                    top: MediaQuery.of(context).viewInsets.bottom > 0 ? 02 : 30,
                    bottom: MediaQuery.of(context).viewInsets.bottom,
                  ),
                  child: Column(
                    // mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Expanded(
                        flex: 1,
                        child: Image.asset(
                          'assets/images/logoBlancoConLetras.png',
                          color: AppColor.white,
                          width: DeviceDisplay.screenWidth * 0.35,
                          height: DeviceDisplay.screenHeight * 0.35,
                          fit: BoxFit.contain,
                        ),
                      ),
                      const SizedBox(height: 20),
                      Expanded(
                        flex: 2,
                        child: Container(
                          decoration: const BoxDecoration(
                            color: Color(0x00000000),
                            borderRadius: BorderRadius.only(topLeft: Radius.circular(100)),
                          ),
                          child: const _LoginForm(),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Positioned(
                bottom: -35,
                right: 15,
                child: Image.asset(
                  'assets/images/byAguadulce.png',
                  color: AppColor.white,
                  width: 130,
                  height: 130,
                  fit: BoxFit.contain,
                ),
              ),
            ],
          ),
        ),
      ),
    );

  }
}

class _LoginForm extends ConsumerWidget {
  const _LoginForm();

  void showSnackbar(BuildContext context, String errorMessage) {
    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(errorMessage)),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final loginForm = ref.watch(loginFormProvider);

    DeviceDisplay.init(context);

    ref.listen(authProvider, (previous, next) {
      if (next.errorMessage.isEmpty) return;
      showSnackbar(context, next.errorMessage);
    });

    final textStyles = Theme.of(context).textTheme;

    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: (DeviceDisplay.screenWidth*0.12)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
             SizedBox(height: DeviceDisplay.screenHeight * 0.02 ),
            Text('', style: textStyles.titleLarge),
            CustomTextFormField(
              label: 'Usuario',
              hint: 'Usuario',
              keyboardType: TextInputType.text,
              onChanged: (value) => ref.read(loginFormProvider.notifier).onUserNameChange('yokog'),
              errorMessage: loginForm.isFormPosted ? loginForm.userName.errorMessage : null,
            ),
            const SizedBox(height: 20),
            CustomTextFormField(
              label: 'Contraseña',
              hint: 'Contraseña',
              obscureText: true,
              onChanged: (value) => ref.read(loginFormProvider.notifier).onPasswordChange('admin'),
              onFieldSubmitted:  ( _ ) => ref.read(loginFormProvider.notifier).onFormSubmit(),
              errorMessage: loginForm.isFormPosted ? loginForm.password.errorMessage : null,
            ),
            const SizedBox(height: 20),
            SizedBox(
              width: double.infinity,
              height: 60,
              child: CustomFilledButton(
                buttonColor: Colors.transparent,
                onPressed: loginForm.isPosting ? null : ref.read(loginFormProvider.notifier).onFormSubmit,
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Ingresar',
                      style: TextStyle(
                        fontSize: 20,
                        color: AppColor.white,
                      ),
                    ),
                    SizedBox(width: 10),
                    Icon(Icons.login, color: AppColor.white),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 15),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextButton(
                  onPressed: () => context.push('/'),
                  child: const Text(
                    '¿Olvidó su contraseña?',
                    style: TextStyle(
                      fontSize: 22,
                      color: AppColor.white,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
