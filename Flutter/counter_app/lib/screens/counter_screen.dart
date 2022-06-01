import 'package:flutter/material.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({Key? key}) : super(key: key);

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 0;
  void increase() {
    counter++;
    setState(() {});
  }

  void decrease() {
    counter--;
    setState(() {});
  }

  void reset() {
    counter = 0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    const fonSize30 = TextStyle(fontSize: 25);

    return Scaffold(
      appBar: AppBar(
        title: const Text('CounterScreen'),
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
      floatingActionButton: CustomFloatingActions(
        increaseFn: increase,
        decreaseFn: decrease,
        resetFn: reset,
      ),
    );
  }
}

class CustomFloatingActions extends StatelessWidget {
  final Function increaseFn;
  final Function decreaseFn;
  final Function resetFn;

  const CustomFloatingActions({
    Key? key, 
    required this.increaseFn,
    required this.decreaseFn,
    required this.resetFn
    }): super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        FloatingActionButton(
            /* onPressed: (() => setState(() => counter-- )), */
            onPressed: () => decreaseFn(),
            child: const Icon(Icons.remove)),

        /* const SizedBox(width: 10), */

        FloatingActionButton(
            /* onPressed: (() => setState(() => counter = 0)), */
            onPressed: () => resetFn(),
            child: const Icon(Icons.restart_alt)),

        /* const SizedBox(width: 10), */

        FloatingActionButton(
            /*  onPressed: (() => setState(() => counter++)),  */
            onPressed: () => increaseFn(),
            child: const Icon(Icons.add)),
      ],
    );
  }
}
