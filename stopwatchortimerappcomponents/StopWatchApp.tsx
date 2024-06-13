import {Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity,View} from 'react-native';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: '#89AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  buttonStop: {
    borderColor: '#FF851B',
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF',
  },
  buttonTextStop: {
    color: '#FF851B',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#07121B',
        marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20,
  },

  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const formatNumber = (argsnumber: number) => `0${argsnumber}`.slice(-2);

const getRemaining = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return {minutes: formatNumber(minutes), seconds: formatNumber(seconds)};
};

const createArray = (length: number) => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

import React, {useEffect, useRef, useState} from 'react';
// import {View} from 'react-native-reanimated/lib/typescript/Animated';
import {} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const StopWatchApp = () => {
  const [state, setstate] = useState({
    remainingSeconds: 60,
    isRunning: false,
    selectedMinutes: '1',
    selectedSeconds: '00',
  });

  function usePreviousState() {
    const ref = useRef({
      remainingSeconds: 0,
      isRunning: false,
      selectedMinutes: '0',
      selectedSeconds: '0',
    });
    useEffect(() => {
      ref.current = state;
    }, [state]);
    return ref.current;
  }

  const prevstate = usePreviousState();

  const [interval, setinterval] = useState<null | NodeJS.Timeout>(null);

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
    } else {
      // do componentDidUpdate logic

      if (state.remainingSeconds === 0 && prevstate.remainingSeconds !== 0) {
      }
    }

    const componentWillUnmount = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    return () => componentWillUnmount();
  }, []);

  const start = () => {
    setstate(prevState => ({
      ...prevState,
      remainingSeconds:
        parseInt(state.selectedMinutes, 10) * 60 +
        parseInt(state.selectedSeconds, 10),
      isRunning: true,
    }));

    setinterval(
      setInterval(() => {
        setstate(prevstate => ({
          ...prevstate,
          remainingSeconds:prevstate.remainingSeconds>0? prevstate.remainingSeconds - 1:0,
        }));
      }, 1000),
    );
  };

  const stop = () => {
    clearInterval(interval ? interval : 0);
    setinterval(null)
    setstate(prevstate=>({
        ...prevstate,
        remainingSeconds:5,
        isRunning:false
    }))
  };

  const renderPickers = () => {
    return (
      <View style={styles.pickerContainer}>
        <Picker
        dropdownIconColor={'white'}
        
        
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={state.selectedMinutes}
          onValueChange={itemvalue =>
            setstate(prevstate => ({...prevstate, selectedMinutes: itemvalue}))
          }
          mode="dropdown">
          {AVAILABLE_MINUTES.map(value => (
            <Picker.Item key={value} label={value} value={value}  />
          ))}
        </Picker>

        <Text style={styles.pickerItem}>{state.selectedMinutes}</Text>

        <View style={{width:10}}></View>

        {Number.parseInt(state.selectedMinutes)>1?
        

        <Text style={styles.pickerItem}>minutes</Text>:
        <Text style={styles.pickerItem}>minute</Text>}





        <Picker
        dropdownIconColor={'white'}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={state.selectedSeconds}
          onValueChange={itemvalue =>
            setstate(prevstate => ({...prevstate, selectedSeconds: itemvalue}))
          }
          mode="dropdown">
          {AVAILABLE_SECONDS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>

        <Text style={styles.pickerItem}>{state.selectedSeconds}</Text>

        <View style={{width:10}}></View>

        {Number.parseInt(state.selectedSeconds)>1?
        

        <Text style={styles.pickerItem}>seconds</Text>:
        <Text style={styles.pickerItem}>second</Text>}
      </View>
    );
  };

  const { minutes, seconds } = getRemaining(state.remainingSeconds);


  return <View style={styles.container}>

    <StatusBar barStyle={"light-content"} />

    {state.isRunning? <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>:renderPickers()}


    {state.isRunning?<TouchableOpacity onPress={stop} style={[styles.button,styles.buttonStop]}>
        <Text style={[styles.buttonText,styles.buttonTextStop]}>Stop</Text>
    </TouchableOpacity>:<TouchableOpacity onPress={start} style={[styles.button]}>
        <Text style={[styles.buttonText]}>Start</Text>
    </TouchableOpacity>}

  </View>;
};

export default StopWatchApp;
