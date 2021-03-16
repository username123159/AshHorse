import React, {Fragment, useEffect} from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";


//  You need to install these two module for navigation
//  Run the following commands using your terminal:
/*
	$npm install @react-navigation/native
	$expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	$npm install @react-navigation/stack
*/

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

/*Dummy Data for Menus*/
const Menus = [
  {
    url: "https://static.wikia.nocookie.net/disney/images/5/54/The_Art_of_Raya_and_the_Last_Dragon.jpg/revision/latest?cb=20210117171633",
    image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/asd.jpeg")}/>,
    menuTitle: "Raya and The last Dragon",
    menuDesc:
      "Raya and the Last Dragon is a 2021 American computer-animated action film produced by Walt Disney Pictures and Walt Disney Animation Studios, and distributed by Walt Disney Studios Motion Pictures. Parents need to know that Raya and the Last Dragon is an animated Disney adventure about a warrior princess on a mission. Set in the fictional land of Kumandra but based on real Southeast Asian cultures, the movie follows Raya (voiced by Kelly Marie Tran), who for years has tried to find a way to reverse a scary, curse-like plague Tran's vulnerable-yet-formidable fighter complements Awkwafina's high-on-nitrous riffing; what might seem ho-hum or borderline annoying on its own turns into a nice push-pull double act.",
      
  },
  {
    url: "https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/MM-037%20Avengers_%20Endgame.jpg?itok=VvMw-Ym7",
    image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/z.jpg")}/>,
      menuTitle: "Avengers: Endgame",
      menuDesc:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe. There are roughly 10,860 of those — seconds, not cars — nestled in between the quiet, spooky opening and the last bit of end credits. Which means that whatever a ticket costs in your neighborhood, “Avengers: Endgame” might count as a bargain. At three hours and one minute, it’s shorter than “Titanic,” “The Godfather Part II” or Luchino Visconti’s “The Leopard.” And while the time doesn’t exactly fly, it doesn’t drag either. The two hours and forty minutes of “Infinity War” (also directed by Joe and Anthony Russo) felt infinitely longer. Settling scores, wrapping up loose ends and taking a victory lap — the main objects of the game this ostensibly last time around — generate some comic sparks as well as a few honest tears.",
    },
    {
      url: "https://i.ytimg.com/vi/7OIFdWk83no/maxresdefault.jpg",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/ab.png")}/>,
      menuTitle: "About Time",
      menuDesc:
        "When Tim Lake (Domhnall Gleeson) is 21, his father (Bill Nighy) tells him a secret: The men in their family can travel through time. Although he can't change history, Tim resolves to improve his life by getting a girlfriend. He meets Mary (Rachel McAdams), falls in love and finally wins her heart via time-travel and a little cunning. However, as his unusual life progresses, Tim finds that his special ability can't shield him and those he loves from the problems of ordinary life Image result for about time synopsis",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnThoxq7shE5j-lwOSULfiuhqMS8UA_QFKmw&usqp=CAU",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/ac.png")}/>,
      menuTitle: "Black Panther",
      menuDesc:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.                                                                           What a joy it then was to experience Black Panther this past February; a vibrant, thrilling, intelligent and most importantly, distinctive addition to an overcrowded landscape. It managed to smoothly slide into the pre-existing canon while also leaping out from the pack with character and force, doubling up as an exhilarating action adventure and a poignant drama infused with a rare social conscience. Anyone who’d seen director Ryan Coogler’s first two films, devastating fact-based drama Fruitvale Station and rousing Rocky reboot Creed, might not have been entirely surprised by his ability to deliver both with such confidence but given the restrictive nature of the MCU, it was nothing short of a miracle that he managed to retain such staggering creative control.",
    },
    {
      url: "https://www.indiewire.com/wp-content/uploads/2019/05/07956f40-77c4-11e9-9073-657a85982e73.jpg?w=780",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/ad.png")}/>,
      menuTitle: "John Wick",
      menuDesc:
        "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
    },
    {
      url: "https://i.ytimg.com/vi/jV6Kvxnfe0g/hqdefault.jpg",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/rs.png")}/>,
      menuTitle: "Real Steel",
      menuDesc: "Charlie Kenton (Hugh Jackman) used to be a prizefighter but lost his chance to win a title when heavy, towering robots took over the boxing ring. Now working as a small-time promoter, Charlie pieces together scrap metal into low-end fighters, barely earning enough to make it from one underground venue to the next. After hitting rock bottom, Charlie reluctantly teams with his estranged son, Max (Dakota Goyo), to build and train a championship robot for a last shot at redemption.                                                             *Review: REAL STEEL doesn't break new cinematic ground; it's an amalgam -- like the robots featured in it -- of many other movies (imagine Rocky meeting RoboCop). Can the audience predict what comes next, considering that it borrows so much from every other fight film (with a little father-son drama thrown in for good measure)? Duh. Yet REAL STEEL is surprisingly enjoyable -- as long as you dial down your expectations. Yes, it's shlocky, but Goyo and Jackman share a believable chemistry, and the young actor is just plain terrific. (Lilly doesn't have much to work with, though what she does reminds us how great she is.) It's hard to believe how carried away you can get cheering on a pair of robots in a ring. Expect it to happen, so our advice is to just go with it.",
    },
    {
      url: "https://rhulfounder.files.wordpress.com/2016/11/2df11803b12b750e504ff3472a4366ef.jpg",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/ag.png")}/>,
      menuTitle: "Forrest Gump",
      menuDesc: "Slow-witted Forrest Gump has never thought of himself as disadvantaged, and thanks to his supportive mother, he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. Forrest Gump, an innocent and kind-hearted Alabama boy, has been dealing with other people's unkindness nearly all his life. Having grown up with beautiful Jenny, his only friend, Forrest yearns to learn all about the ways of the world and embarks on a mission to find his true purpose in life. Thrust into downright extraordinary situations, Forrest finds himself present at some of the most pivotal events in the second half of the 20th century, rubbing shoulders with influential and historical figures, including John F. Kennedy, Richard Nixon, a nice young man from England named John Lennon, and even a handsome but still unknown Elvis Presley.",
    },
  
    {
      url: "http://nerdreactor.com/wp-content/uploads/2019/03/edge-of-tomorrow-live-die-repeat-tom-cruse.jpg",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/aj.png")}/>,
      menuTitle: "Edge of Tomorrow",
      menuDesc: "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop. On the face of it, there is nothing particularly original about Edge Of Tomorrow. Brush your hand across its gritty surface and you’ll smear the thin layer off a teeming nest of influences: Groundhog Day, the most obvious, for its time-loop plot engine (and by extension Source Code); Saving Private Ryan, for its French-beach brutality; Aliens, Starship Troopers and the Matrix trilogy for its bombastic portrayal of big-tech conflict with multi-limbed, insectoid-biomechanical extra-terrestrials. It’s exquisitely apposite that, if you’re coming to this film from a healthy upbringing on action-sci-fi cinema of the ’80s and ’90s (with Harold Ramis’ clock-resetting comedy being the one rom-com it was okay for you to love), you’ll experience a throbbing sense of déjà vu — only made more acute by the film’s shared chromosomes with last year’s Elysium and that other Tom Cruise-on-a-devastated-Earth picture, Oblivion.",
    },
  
    {
      url: "https://www.hdwallpaper.nu/wp-content/uploads/2017/06/interstellar-6-660x330.jpg",
      image:<Image style={{paddingBottom:24,alignContent:"center",paddingTop:24,paddingLeft:23,paddingLeft:23,width:400,height:500}} source={require("./assets/il.png")}/>,
      menuTitle: "Interstellar",
      menuDesc: "In the future, where Earth is becoming uninhabitable, farmer and ex-NASA pilot Cooper is asked to pilot a spacecraft along with a team of researchers to find a new planet for humans. In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home. An alien race has hit the Earth in an unrelenting assault, unbeatable by any military unit in the world. Major William Cage is an officer who has never seen a day of combat when he is unceremoniously dropped into what amounts to a suicide mission.",
    },

 
  
   
];

const Deets = [
  {
url: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplus_rayaandthelastdragon_20842_36be8eca.jpeg",
deetsTitle: "Raya and The Last Dragon",
deetsDesc:
  "Parents need to know that Raya and the Last Dragon is an animated Disney adventure about a warrior princess on a mission. Set in the fictional land of Kumandra but based on real Southeast Asian cultures, the movie follows Raya (voiced by Kelly Marie Tran), who for years has tried to find a way to reverse a scary, curse-like plague .",
},];

/*Homescreen Component*/


/*Menu Details Component*/
function MenuDetail(props) {
  return (
    <ScrollView style={{marginLeft:10,marginRight:10}}>
      <Text >{props.route.params.image}</Text>
      <View style={{backgroundColor:'#30484D', flexDirection: "row", alignContent: "flex-end" }}>
                <Image
                  style={styles.star}
                  source={require("./assets/star.png")}
                />
                <Image
                  style={styles.star}
                  source={require("./assets/star.png")}
                />
                <Image
                  style={styles.star}
                  source={require("./assets/star.png")}
                />
                <Image
                  style={styles.star}
                  source={require("./assets/star.png")}
                />
                <Image
                  style={styles.star}
                  source={require("./assets/star.png")}
                />
              </View>
       
      <Text style={{paddingLeft:15, paddingRight: 10, paddingTop:26, fontSize:30,fontWeight:'bold',backgroundColor:'#30484D',color:'white', textAlign:'center'}}>{props.route.params.menuTitle}</Text>
      
      <Text style={{paddingLeft:10, paddingRight: 10, paddingTop:10,paddingBottom:100, backgroundColor:'#30484D', fontSize: 18,color:'white',textAlign:'justify'}}>{props.route.params.menuDesc}</Text>
    </ScrollView>
  );
}

/*Menu List Component*/
function MenuScreen({ navigation }) {
  return (
    <ScrollView >
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
                
              </View>
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              <Text style={styles.menuDesc} numberOfLines={2}>
                {menu.menuDesc}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}


/*Main Component*/
const Stack = createStackNavigator(); //Create stack navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#B11CEC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        
        <Stack.Screen name="Review Cat" component={MenuScreen} /> 
		
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{             
              image: menu.image,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
              url: menu.url,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*Custom Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  brandName: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  label: {
    marginTop: 5,
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTextbox: {
    margin: 5,
    width: 250,
    height: 50,
    borderColor: "#f1c40f",
    borderWidth: 2,
    borderRadius: 5,
    color: "#14213d",
    padding: 15,
    fontSize: 20,
    backgroundColor: "#ecf0f1",
  },

  btnRounded: {
    borderRadius: 5,
    margin:5
  },

  cardRounded: {
    height: 300,
    backgroundColor: "#11B9FC",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 363,
    height: 210,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontFamily: "monospace",
    marginTop: 2,
    marginLeft: 10,
  },
  menuDesc: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 12,
  },
  star: {
    
    width: 55,
    height: 55,
    marginTop: 10,
    marginLeft: 15,
  },
});
