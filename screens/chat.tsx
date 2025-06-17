import React from "react";
import { View, Text, Image } from "react-native";
// SVG imports (requires react-native-svg and react-native-svg-transformer)
import Heart4 from "../assets/svg/heart4.svg";
import ImageFile from "../assets/svg/imagefile.svg";
import LeadingIcon from "../assets/svg/leadingicon.svg";
import Signal from "../assets/svg/signal.svg";
import TrailingIcon1 from "../assets/svg/trailingicon1.svg";
import Vector2 from "../assets/svg/vector2.svg";
import Vector4 from "../assets/svg/vector4.svg";
import Wifi from "../assets/svg/wifi.svg";
// PNG imports (use require for React Native)
const aPersonStandingAgainstASoftBlurredBackgroundCreatingACalmAndInvitingAtmosphere = require("../assets/img/apersonstandingagainstasoftblurredbackgroundcreatingacalmandinvitingatmosphere.png");
const battery = require("../assets/img/battery.png");
// The following SVGs do not exist in the assets folder, so comment them out or add them if needed
// import Heart from "../../project/design/assets/svg/heart.svg";
// import Heart2 from "../../project/design/assets/svg/heart2.svg";
// import Heart3 from "../../project/design/assets/svg/heart3.svg";
// import Vector from "../../project/design/assets/svg/vector.svg";
// import Vector3 from "../../project/design/assets/svg/vector3.svg";
// Styles (implement or import from your codebase)
// import { useStyles, createStyleSheet } from "styles";

// Dummy style hook and function for demonstration (replace with your actual implementation)
const useStyles = (stylesheet: any) => ({ styles: stylesheet });
const createStyleSheet = (fn: any) => fn({});

export interface TheInterfaceForWhenWeOpenAChatForAMessagingAppProps {
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export function TheInterfaceForWhenWeOpenAChatForAMessagingApp(
  props: TheInterfaceForWhenWeOpenAChatForAMessagingAppProps
) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID ?? "1:6973"}>
      <View style={styles.headerChatNavigationBar} testID="1:6873">
        <View style={styles.statusBar} testID="1:6874">
          <Text style={styles.$1030Am} testID="1:6875">
            {`10:30 AM`}
          </Text>
          <View style={styles.frame} testID="1:6876">
            <Image source={battery} style={{ width: 23.5, height: 11 }} />
            <Wifi />
            <Signal />
          </View>
        </View>
        <View style={styles.navigationBar} testID="1:6885">
          <View style={styles.frame2} testID="1:6886">
            <LeadingIcon />
            <View style={styles.frame3} testID="1:6890">
              <Image
                source={
                  aPersonStandingAgainstASoftBlurredBackgroundCreatingACalmAndInvitingAtmosphere
                }
                style={{ width: 36, height: 36 }}
              />
              <Text style={styles.aureliaS} testID="1:6892">
                {`Aurelia S.`}
              </Text>
            </View>
            <TrailingIcon1 />
          </View>
        </View>
      </View>
      <View style={styles.mainContent} testID="1:6904">
        <View style={styles.chatConversationView} testID="1:6905">
          <View style={styles.frame4} testID="1:6906">
            <View style={styles.chatDate} testID="1:6907">
              {/* <Vector /> */}
              <Text style={styles.today} testID="1:6909">
                {`Today`}
              </Text>
              <Vector2 />
            </View>
            <View style={styles.chatMessage1FromThem} testID="1:6911">
              <View style={styles.messageFromOtherUser} testID="1:6912">
                <Text style={styles.heyHowsItGoing} testID="1:6913">
                  {`Hey, how's it going?`}
                </Text>
              </View>
              <View style={styles.chatLiked} testID="1:6914">
                {/* <Heart /> */}
              </View>
            </View>
            <View style={styles.chatDateHeader} testID="1:6919">
              {/* <Vector3 /> */}
              <Text style={styles.yesterday} testID="1:6921">
                {`Yesterday`}
              </Text>
              <Vector4 />
            </View>
            <View style={styles.chatMessage2FromMe} testID="1:6923">
              <View style={styles.messageFromMe} testID="1:6924">
                <Text
                  style={styles.prettyGoodJustWorkingOnSomeProjects}
                  testID="1:6925"
                >
                  {`Pretty good, just working on some projects.`}
                </Text>
              </View>
            </View>
            <View style={styles.chatMessage3FromThem} testID="1:6926">
              <View style={styles.messageFromOtherUser2} testID="1:6927">
                <Text style={styles.niceWhatKindOfProjects} testID="1:6928">
                  {`Nice! What kind of projects?`}
                </Text>
              </View>
              <View style={styles.chatLiked2} testID="1:6929">
                {/* <Heart2 /> */}
              </View>
            </View>
            <View style={styles.chatMessage4FromThem} testID="1:6934">
              <View style={styles.messageFromOtherUser3} testID="1:6935">
                <Text style={styles.anythingExciting} testID="1:6936">
                  {`Anything exciting?`}
                </Text>
              </View>
              <View style={styles.chatLiked3} testID="1:6937">
                {/* <Heart3 /> */}
              </View>
            </View>
            <View style={styles.chatMessage5FromMe} testID="1:6942">
              <View style={styles.messageFromMe2} testID="1:6943">
                <Text
                  style={styles.justSomeAppDevelopmentYouKnowTheUsual}
                  testID="1:6944"
                >
                  {`Just some app development, you know the usual.`}
                </Text>
              </View>
            </View>
            <View style={styles.chatMessage6FromThem} testID="1:6945">
              <View style={styles.messageFromOtherUser4} testID="1:6946">
                <Text style={styles.coolKeepMeUpdated} testID="1:6947">
                  {`Cool, keep me updated!`}
                </Text>
              </View>
              <View style={styles.chatLiked4} testID="1:6948">
                <Heart4 />
              </View>
            </View>
            <View style={styles.chatMessage7FromMe} testID="1:6953">
              <View style={styles.messageFromMe3} testID="1:6954">
                <Text style={styles.willDo} testID="1:6955">
                  {`Will do!`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chatTypeAMessageBar} testID="1:6956">
          <View style={styles.container} testID="1:6957">
            <View style={styles.chatBar} testID="1:6958">
              <Text style={styles.typeAMessage} testID="1:6959">
                {`Type a message...`}
              </Text>
              <ImageFile />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBar} testID="1:6969">
        <View style={styles.gestureIndicatorBar} testID="1:6970">
          <View style={styles.rectangle} testID="1:6971" />
        </View>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme: any) => ({
  root: {
    width: 393,
    minHeight: 852,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "rgba(247, 245, 244, 1)",
  },
  $1030Am: {
    color: "rgba(73, 73, 73, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  headerChatNavigationBar: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(247, 245, 244, 1)",
  },
  statusBar: {
    flexDirection: "row",
    paddingTop: 17,
    paddingLeft: 32,
    paddingBottom: 18,
    paddingRight: 32,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 171.5,
    columnGap: 171.5,
    alignSelf: "stretch",
  },
  frame: {
    flexDirection: "row",
    width: 78.5,
    height: 14.5,
    paddingBottom: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
    rowGap: 8,
    columnGap: 8,
  },
  aureliaS: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 0.501960813999176)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  navigationBar: {
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 10,
    columnGap: 10,
    alignSelf: "stretch",
  },
  frame2: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 7,
    columnGap: 7,
    alignSelf: "stretch",
  },
  frame3: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  today: {
    color: "rgba(73, 73, 73, 0.501960813999176)",
    fontFamily: "Inter",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "600",
  },
  mainContent: {
    minHeight: 712,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  chatConversationView: {
    height: 632,
    minHeight: 632,
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  frame4: {
    paddingTop: 12,
    paddingLeft: 0,
    paddingBottom: 12,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.05882352963089943)",
  },
  chatDate: {
    flexDirection: "row",
    height: 24,
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  heyHowsItGoing: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage1FromThem: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  messageFromOtherUser: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 5.5,
    paddingLeft: 12,
    paddingBottom: 5.5,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  chatLiked: {
    flexDirection: "row",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  yesterday: {
    color: "rgba(73, 73, 73, 0.501960813999176)",
    fontFamily: "Inter",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "600",
  },
  chatDateHeader: {
    flexDirection: "row",
    height: 24,
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  prettyGoodJustWorkingOnSomeProjects: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage2FromMe: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  messageFromMe: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 6,
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 139, 1)",
  },
  niceWhatKindOfProjects: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage3FromThem: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  messageFromOtherUser2: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 5.5,
    paddingLeft: 12,
    paddingBottom: 5.5,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  chatLiked2: {
    flexDirection: "row",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  anythingExciting: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage4FromThem: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  messageFromOtherUser3: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 5.5,
    paddingLeft: 12,
    paddingBottom: 5.5,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  chatLiked3: {
    flexDirection: "row",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  justSomeAppDevelopmentYouKnowTheUsual: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage5FromMe: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  messageFromMe2: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 6,
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 139, 1)",
  },
  coolKeepMeUpdated: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage6FromThem: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  messageFromOtherUser4: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 5.5,
    paddingLeft: 12,
    paddingBottom: 5.5,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  chatLiked4: {
    flexDirection: "row",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  willDo: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatMessage7FromMe: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  messageFromMe3: {
    flexDirection: "row",
    maxWidth: 300,
    paddingTop: 6,
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(0, 0, 139, 1)",
  },
  typeAMessage: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(73, 73, 73, 0.501960813999176)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  chatTypeAMessageBar: {
    paddingTop: 8,
    paddingLeft: 0,
    paddingBottom: 8,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(247, 245, 244, 1)",
  },
  container: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
  },
  chatBar: {
    flexDirection: "row",
    height: 44,
    paddingTop: 6,
    paddingLeft: 16,
    paddingBottom: 6,
    paddingRight: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    borderBottomLeftRadius: 360,
    borderBottomRightRadius: 360,
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  rectangle: {
    width: 120,
    height: 4,
    borderBottomLeftRadius: 360,
    borderBottomRightRadius: 360,
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    backgroundColor: "rgba(0, 0, 0, 0.03921568766236305)",
  },
  bottomBar: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(247, 245, 244, 1)",
  },
  gestureIndicatorBar: {
    flexDirection: "row",
    height: 32,
    paddingTop: 20,
    paddingLeft: 137,
    paddingBottom: 8,
    paddingRight: 136,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
}));
