import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const fonSize30 = TextStyle(fontSize: 25);
    int counter = 10;

    return Scaffold(
      appBar: AppBar(
        title: const Text('homeScreen'),
        elevation: 0,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Clicks Count', style: fonSize30),
            Text('$counter', style: fonSize30)
          ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add your onPressed
          counter++;
          print('sirve: $counter');
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
