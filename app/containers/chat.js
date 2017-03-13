import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import CustomActions from '../components/chatComponents/CustomActions';
import CustomView from '../components/chatComponents/CustomView';

// import moment from 'moment';
//Firebase

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCPtGcGzuDiE3RSfkGYzWmTqN0OpbLhW6E",
  authDomain: "fir-demo-12a97.firebaseapp.com",
  databaseURL: "https://fir-demo-12a97.firebaseio.com",
  storageBucket: "fir-demo-12a97.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    //Firebase reference
    this.itemsRef = firebaseApp.database().ref();



    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }


  listenForItems(itemsRef) {

    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push(
          child.val()
        );
      });

      // const messages = require('./data/messages.js');
      // console.log('Message', messages);
      // this.itemsRef.set(messages);

      // console.log('snap', moment("2013050"));

      // this.setState({
      //     messages: items,
      // })

      this.setState((previousState) => {
        return {
          messages: items.reverse(),
          // messages: GiftedChat.append(previousState.messages, items.reverse()),
        };
      });

    //
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(items)
    //   });
    //
    });
  }

  componentWillMount() {
    this.listenForItems(this.itemsRef);


    this._isMounted = true;
    this.setState(() => {
      return {
        //messages: require('./data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            // messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {

    var timestamp = new Date().getTime();

    messages[0].createdAt = timestamp;
    // messages[0].user._id = 2;
    messages[0].user.name = "vinoth";

    console.log('MESSAGE', messages[0]);

    this.itemsRef.push().set(messages[0]);

    // this.setState((previousState) => {
    //   return {
    //     messages: GiftedChat.append(previousState.messages, messages),
    //   };
    // });

    // for demo purpose
    // this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        loadEarlier={this.state.loadEarlier}
        onLoadEarlier={this.onLoadEarlier}
        isLoadingEarlier={this.state.isLoadingEarlier}

        user={{
          _id: 1, // sent messages should have same user._id
        }}

        renderActions={this.renderCustomActions}
        renderBubble={this.renderBubble}
        renderCustomView={this.renderCustomView}
        renderFooter={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
