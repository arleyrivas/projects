import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/config/constants/colors/app_color.dart';
import 'package:portal/core/utils/display/device_display.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/authorize_appointments/domain/domain.dart';
import 'package:portal/features/authorize_appointments/presentation/providers/appointments_provider.dart';
import 'package:portal/features/authorize_appointments/presentation/providers/provider.dart';
import 'package:portal/features/authorize_appointments/presentation/widgets/widgets.dart';
import 'package:portal/features/shared/shared.dart';


class AuthorizeAppoinments extends ConsumerStatefulWidget {
  static const String name = 'authorize_appoinments';
  //  List<String> appointmentsSelected;

  const AuthorizeAppoinments({super.key});

  @override
  ConsumerState<AuthorizeAppoinments> createState() => _AuthorizeAppoinmentsState();
}

class _AuthorizeAppoinmentsState extends ConsumerState<AuthorizeAppoinments> {

  List<Appointment> appointments = [];

  @override
  void initState(){
    super.initState();
   
    Future.microtask(() {
       someActionProvider([]);
    });

  }

void someActionProvider(List<Appointment>? appointmentsSelected) {

  if(appointmentsSelected != null && appointmentsSelected.isNotEmpty){
    autorizeAppointmentsSelected(appointmentsSelected);
    //TODO: ver en que momento llamo la lista de nuevo
    ref.read(appointmentsProvider.notifier).loadAppointments();

  }else{
    ref.read(appointmentsProvider.notifier).loadAppointments();
  }
    
}

void autorizeAppointmentsSelected(List<Appointment>? appointmentsSelected ){
    ref.read(authorizeProvider(appointmentsSelected?? []).notifier );
}

  final Set<int> _selectedCards = {};

  

  void _toggleSelection(int index) {
    setState(() {
      if (_selectedCards.contains(index)) {
        _selectedCards.remove(index);
      } else {
        _selectedCards.add(index);
      }
    });
  }

// Método para crear el AppBar cuando hay selección de tarjetas
Widget _buildSelectionAppBar() {

  return AppBar(
    backgroundColor: Colors.white, // Fondo diferente
    elevation: 4,
    title: Row(
      children: [
        Text(
          '${_selectedCards.length} Seleccionadas',
          style: const TextStyle(fontSize: 18, color: Colors.black),
        ),
        const Spacer(),
        _buildActionButton(
          label: 'Autorizar',
          iconPath: 'assets/images/accept_green.png',
          onPressed: _acceptSelection,
        ),
        _buildActionButton(
          label: 'Cancelar',
          iconPath: 'assets/images/cancel.png',
          onPressed: _clearSelection,
        ),
      ],
    ),
  );
}


  void _clearSelection() {
    setState(() {
      _selectedCards.clear();
    });
  }

  void _acceptSelection() {
    final appointmentsSelected = _selectedCards.map((index) => appointments[index]).toList();
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text("Citas autorizadas"),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: appointmentsSelected.map((label) => Text(label.freight)).toList(),
          ),
          actions: [
            TextButton(
              onPressed: () {
                
                Navigator.of(context).pop();
                
                },
              child: const Text("Cancelar"),
            ),
            TextButton(
              onPressed: () {
                someActionProvider(appointmentsSelected);
                Navigator.of(context).pop();
                
                },
              child: const Text("Aceptar"),
            ),
          ],
        );
      },
    );
    _clearSelection();
  }

  // Método reutilizable para los botones de acción en el AppBar
  Widget _buildActionButton({
    required String label,
    required String iconPath,
    required VoidCallback onPressed,
  }) {
    DeviceDisplay.init(context);

    return TextButton.icon(
      label: Text(
        label,
        style: const TextStyle(color: AppColor.blackToApprovedOrCancel),
      ),
      icon: Image.asset(
        iconPath,
        width: DeviceDisplay.screenWidth*0.06,
      ),
      onPressed: onPressed,
    );
  }

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;

    final appointmentsState = ref.watch( appointmentsProvider );
    appointments = appointmentsState.appoinments;
    
     final user = ref.watch(authProvider).user;
   

    return GeometricalBackgroundHome(
      child: Stack(children: [
        Scaffold(
          backgroundColor: Colors.transparent,
          appBar: PreferredSize(
            preferredSize: Size.fromHeight(screenHeight *0.04), // Tamaño de la barra que muestro cuando aparecen los botones de autorizar o cancelar
            child: _selectedCards.isEmpty
                ? CustomAppbar( userName: user?.names ?? 'User') // Appbar sin tarjetas seleccionadas
                : _buildSelectionAppBar(), // Appbar con selección de tarjetas
          ),
          body: _CardsView(
            selectedCards: _selectedCards,
            onLongPress: _toggleSelection,
            appointments: appointmentsState.appoinments
          ),
          bottomNavigationBar: const CustomBottomNavigationBar(),
        ),
      ]),
    );
  }
}

class _CardsView extends StatelessWidget {
  final Set<int> selectedCards;
  final Function(int) onLongPress;
  final List<Appointment> appointments;

  const _CardsView({
    required this.selectedCards,
    required this.onLongPress,
    required this.appointments
  });



  @override
  Widget build(BuildContext context) {
    Map<int, List<Appointment>> groupCards = {};


    // Agrupar las tarjetas por el valor de 'group'
    //TODO: se llama dos veces al ingresar, antes del primer llamado al getAppointments y despues de traer los datos
    for (var appointment in appointments) {
      int group = appointment.group;
      if (!groupCards.containsKey(group)) {
        groupCards[group] = [];
      }
      groupCards[group]?.add(appointment);
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.only(left: 20, top: 30, bottom: 20),
          
          child: AutoSizeText(
            'Autorización\nde Citas',
            textAlign: TextAlign.left,
            style: TextStyle(
              color: AppColor.white,
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
            ),
            minFontSize: 25,
            maxLines: 2,
          ),
        ),
        Expanded(
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 0),
              child: appointments.isEmpty 
              ? const Card(
                        
                        margin: EdgeInsets.symmetric(vertical: 80),
                        color: Colors.white,
                        elevation: 5,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children:[

                           SizedBox(
                           // width: 200,
                           height: 200,
                           child: Center(
                            
                             child: AutoSizeText(
                               'No hay citas pendientes por autorizar', 
                               style: TextStyle(    
                                 fontWeight: FontWeight.bold, 
                                 fontSize: 25,
                                 color: AppColor.darkGreen,  
                               ), 
                               maxLines: 2,
                               maxFontSize: 25,
                               minFontSize: 20,
                               textAlign: TextAlign.center,
                             ),
                           )
                                                        )
                            ,
                        ]
                        ),
                      ) : 
              
              ListView.builder(
                itemCount: groupCards.entries.length,
                itemBuilder: (context, index) {
                  var groupEntry = groupCards.entries.elementAt(index);
                  int group = groupEntry.key;
                  List<Appointment> cards = groupEntry.value;
                  
                  //   var groupEntry = groupedCards.entries.elementAt(index);
                  // int group = groupEntry.key;
                  //   List<Map<String, dynamic>> cards = groupEntry.value;

                  return Stack(
                    children: [
                      Card(
                        margin: const EdgeInsets.symmetric(vertical: 8),
                        color: Colors.white,
                        elevation: 5,
                        child: Padding(
                          padding: const EdgeInsets.all(1.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const SizedBox(height: 1),
                              SingleChildScrollView(
                                physics: const ClampingScrollPhysics(),
                                child: Column(
                                  children: cards.map((entry) {
                                    int cardIndex = appointments.indexOf(entry);
                                    return CardAppoinment(
                                      plate: entry.truckPlate,
                                      driver: entry.driverName,
                                      dateTime: entry.reqTime,
                                      containerOHbl: entry.freight,
                                      transport: entry.truckCompany,
                                      group: group,
                                      type: entry.type,
                                      isSelected: selectedCards.contains(cardIndex),
                                      onLongPress: () => onLongPress(cardIndex),
                                    );
                                  }).toList(),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      TypeCardByGroup(
                        group: group,
                        appoinmentsNumber: groupCards[group]?.length ?? 0,
                      ),
                    ],
                  );
                  
                },
              ),
            ),
          ),
        ),
      ],
    );
  }
}
