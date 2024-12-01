


import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:formz/formz.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/shared/shared.dart';



//!  3 -  StateNotifierProvider - se consume afuera 

final loginFormProvider = StateNotifierProvider.autoDispose<LoginFormNotifier,LoginFormState>((ref) { //autoDispose me ayuda a limpiar el form cuando la persona salga de la sesión
  
  final loginUserCallback = ref.watch( authProvider.notifier).loginUser;
  

  
  return LoginFormNotifier(
    loginUserCallback: loginUserCallback
  );
});




//! 2 - Como implementamos un notifier

class LoginFormNotifier extends StateNotifier<LoginFormState> {

  final Function(String, String) loginUserCallback;

  LoginFormNotifier({
    required this.loginUserCallback,
  }): super ( LoginFormState () );
  
  onUserNameChange( String value ){
    final newUserName = UserName.dirty(value);
    state = state.copyWith(
      userName: newUserName,
      isValid: Formz.validate( [ newUserName, state.password ])
    );
  }

  onPasswordChange( String value ){
    final newPassword = Password.dirty(value);
    state = state.copyWith(
      password: newPassword,
      isValid: Formz.validate( [ newPassword, state.userName ])
    );
  }

  onFormSubmit() async {
    _touchEveryField();
    if( !state.isValid ) return;

    state = state.copyWith( isPosting: true );
   
    await loginUserCallback( state.userName.value, state.password.value );
    
    state = state.copyWith( isPosting: false );
  }

  _touchEveryField() {
    final userName = UserName.dirty(state.userName.value);
    final password = Password.dirty(state.password.value);
  
    state = state.copyWith(
      isFormPosted: true,
      userName: userName,
      password: password,
      isValid: Formz.validate( [ userName, password])
    );
  }
}

//! 1 - State de este provider


class LoginFormState {

  final bool isPosting;
  final bool isFormPosted;
  final bool isValid;
  final UserName userName;
  final Password password;

  LoginFormState({
      this.isPosting = false, 
      this.isFormPosted = false, 
      this.isValid = false, 
      this.userName = const UserName.pure(), 
      this.password = const Password.pure(),
  });

  LoginFormState copyWith({
    bool? isPosting,
    bool? isFormPosted,
    bool? isValid,
    UserName ? userName,
    Password? password,
  }) => LoginFormState(
      isPosting: isPosting ?? this.isPosting,
      isFormPosted: isFormPosted ?? this.isFormPosted,
      isValid: isValid ?? this.isValid,
      userName: userName ?? this.userName,
      password: password ?? this.password,
  );

  @override
  String toString() {
      return '''
        LoginFormState:
          isPosting: $isPosting
          isFormPosted: $isFormPosted
          isValid: $isValid
          userName: $userName
          password: $password
      ''';
  }

}





