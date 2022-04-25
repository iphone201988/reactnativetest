import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Calendar, CalendarList, Arrow } from 'react-native-calendars';


export default class App extends React.Component {

  state = {
    clickCount: 1,
    searchText: 'Text'
  };
  constructor(props) {
    super(props)

    // this.state = {
    //   fontsLoaded: false,
    // }
  }
  async loadFont() {
    // await Font.loadAsync({
    //   'Regular': require('./assets/Fonts/'),
    // });
    // this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFont();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.lableText}>Click test</Text>
        <Pressable style={styles.clickButton} onPress={() => { this.setState({ clickCount: this.state.clickCount + 1 }) }}>
          <Text style={styles.whiteText}>Click me</Text>
        </Pressable>

        <View style={{ height: 56, justifyContent: 'center', borderColor: '#ccc', borderWidth: 2, padding: 5, borderRadius: 8, marginTop: 15, marginBottom: 15 }}>
          <Text>Number of button clicks</Text>
          <Text >{this.state.clickCount}</Text>
        </View>
        <View>
          <Text style={styles.lableText}>Search Test</Text>
          <TextInput placeholder='Search' onChangeText={text => this.setState({ searchText: text })} style={{ height: 56, justifyContent: 'center', borderColor: '#ccc', borderWidth: 2, padding: 5, borderRadius: 8, marginTop: 5 }}></TextInput>
        </View>

        <View style={{ height: 80, justifyContent: 'center', borderColor: '#ccc', borderWidth: 2, padding: 5, borderRadius: 8, marginTop: 15, marginBottom: 15 }}>
          <Text>Searched text </Text>
          <Text >{this.state.searchText}</Text>
        </View>

        <View >
          <Text style={styles.lableText}>Message Box</Text>
          <View style={styles.messageBox}>
            <Text>This is an empty state, to be used for messages and/or blog articles.</Text>
          </View>
        </View>
        <View>
          <Text style={styles.lableText}>Calendar test </Text>
          <Calendar
            minDate={'2022-05-10'}
            maxDate={'2022-05-30'}
            onDayPress={day => {
              console.log('selected day', day);
            }}
            markedDates={{
              '2022-04-25': { selected: true, marked: true, selectedColor: 'blue' },
              '2012-04-25': { marked: true },
              '2012-04-25': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2012-04-25': { disabled: true, disableTouchEvent: true }
            }}
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            monthFormat={'yyyy MM'}
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            hideArrows={true}
            renderArrow={direction => <Arrow />}
            hideExtraDays={true}
            disableMonthChange={false}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={true}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={true}
            disableArrowRight={true}
            disableAllTouchEventsForDisabledDays={true}
            renderHeader={date => {
            }}
            enableSwipeMonths={true}
          />
        </View>
        <View style={styles.listBox}>
          <Text style={[styles.lableText, { paddingLeft: 10 }]}>List Test</Text>
          <View style={styles.commonBox}>
            <Text style={styles.commonText}>Bananas</Text>
            <Text style={styles.grayText}>Grocery Ape</Text>
          </View>
          <View style={styles.commonBox}>
            <Text style={styles.commonText}>Sugar</Text>
            <Text style={styles.grayText}>Candy shop</Text>
          </View>
          <View style={styles.commonBox}>
            <Text style={styles.commonText}>Tuna</Text>
            <Text style={styles.grayText}>Temple of the catch</Text>
          </View>
          <View style={styles.commonBox}>
            <Text style={styles.commonText}>Polystation</Text>
            <Text style={styles.grayText}>Stairsmart</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  grayText: {
    fontSize: 18,
    color: '#ccc'
  },
  commonText: {
    fontSize: 18,
    color: '#333333'
  },
  commonBox: {
    height: 80, justifyContent: 'center', padding: 10,
    borderBottomColor: '#ccc', borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  lableText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  clickButton: {
    backgroundColor: '#FFA978',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 17
  },
  messageBox: {
    backgroundColor: '#EAFFC9',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    padding: 15
  },
  listBox: {
    height: 368,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    paddingLeft: 0,
    paddingRight: 0
  }
});
