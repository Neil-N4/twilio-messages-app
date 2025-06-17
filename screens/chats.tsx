import React from "react";
import { View, Text, Image } from "react-native";
// SVG imports (requires react-native-svg and react-native-svg-transformer)
import Close from "../assets/svg/close.svg";
import Icon from "../assets/svg/icon.svg";
import Icon2 from "../assets/svg/icon2.svg";
import Search from "../assets/svg/search.svg";
// PNG imports (use require for React Native)
const aDigitalIllustrationOfAYoungWomanWithLongBrownHairAndAFriendlySmile = require("../assets/img/adigitalillustrationofayoungwomanwithlongbrownhairandafriendlysmile.png");
const aYoungManWithShortBlackHairAndAFriendlySmileSittingAtADeskWithALaptop = require("../assets/img/ayoungmanwithshortblackhairandafriendlysmilesittingatadeskwithalaptop.png");
const aYoungManWithShortBlackHairAndAFriendlySmileSittingAtADeskWithALaptopAndACoffeeCup = require("../assets/img/ayoungmanwithshortblackhairandafriendlysmilesittingatadeskwithalaptopandacoffeecup.png");
const aYoungPersonWithShortHairSmilingAtTheCamera = require("../assets/img/ayoungpersonwithshorthairsmilingatthecamera.png");
const aYoungWomanWithLongBlackHairAndGlassesSmilingWhileSittingAtADeskWithALaptopAndNotebooks = require("../assets/img/ayoungwomanwithlongblackhairandglassessmilingwhilesittingatadeskwithalaptopandnotebooks.png");
const aYoungWomanWithLongBrownHairAndAFriendlySmilePosingAgainstASoftNeutralBackground = require("../assets/img/ayoungwomanwithlongbrownhairandafriendlysmileposingagainstasoftneutralbackground.png");
const aYoungWomanWithLongDarkHairAndAWarmSmileSittingInACozyLivingRoom = require("../assets/img/ayoungwomanwithlongdarkhairandawarmsmilesittinginacozylivingroom.png");
const iconsCircleSmallFill = require("../assets/img/iconscirclesmallfill.png");
const iconsCircleSmallFill2 = require("../assets/img/iconscirclesmallfill.png"); // fallback to available asset
const iconsCircleSmallFill3 = require("../assets/img/iconscirclesmallfill3.png");
// Dummy style hook and function for demonstration (replace with your actual implementation)
const useStyles = (stylesheet: any) => ({ styles: stylesheet });
const createStyleSheet = (fn: any) => fn({});

export interface AListOfCurrentChatsForAMessagesAppProps {
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export function AListOfCurrentChatsForAMessagesApp(
  props: AListOfCurrentChatsForAMessagesAppProps
) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID ?? "1:6975"}>
      <View style={styles.mainContent} testID="1:6308">
        <View style={styles.searchFieldFilledOut} testID="1:6309">
          <View style={styles.searchFieldAtom} testID="1:6310">
            <Search />
            <Text style={styles.searchChats} testID="1:6316">
              {`Search chats`}
            </Text>
            <Close />
          </View>
        </View>
        <View style={styles.chatsHistoryList} testID="1:6323">
          <View style={styles.chatListCell} testID="1:6324">
            <View style={styles.leftItem} testID="1:6325">
              <Image
                source={
                  aDigitalIllustrationOfAYoungWomanWithLongBrownHairAndAFriendlySmile
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron} testID="1:6327">
              <View style={styles.labels} testID="1:6328">
                <View style={styles.row1} testID="1:6329">
                  <Text style={styles.zaraMontgomery} testID="1:6330">
                    {`Zara Montgomery`}
                  </Text>
                  <Text style={styles.$1030Am} testID="1:6331">
                    {`10:30 AM`}
                  </Text>
                </View>
                <View style={styles.row2} testID="1:6332">
                  <Text style={styles.heyLetsCatchUpSoon} testID="1:6333">
                    {`Hey, let's catch up soon!`}
                  </Text>
                  <Image source={iconsCircleSmallFill} style={{ width: 14, height: 14 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell2} testID="1:6336">
            <View style={styles.leftItem2} testID="1:6337">
              <Image
                source={aYoungPersonWithShortHairSmilingAtTheCamera}
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron2} testID="1:6339">
              <View style={styles.labels2} testID="1:6340">
                <View style={styles.row12} testID="1:6341">
                  <Text style={styles.liamChen} testID="1:6342">
                    {`Liam Chen`}
                  </Text>
                  <Text style={styles.yesterday} testID="1:6343">
                    {`Yesterday`}
                  </Text>
                </View>
                <View style={styles.row22} testID="1:6344">
                  <Text style={styles.meetingRescheduledTo3Pm} testID="1:6345">
                    {`Meeting rescheduled to 3 PM.`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell3} testID="1:6346">
            <View style={styles.leftItem3} testID="1:6347">
              <Image
                source={
                  aYoungWomanWithLongBlackHairAndGlassesSmilingWhileSittingAtADeskWithALaptopAndNotebooks
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron3} testID="1:6349">
              <View style={styles.labels3} testID="1:6350">
                <View style={styles.row13} testID="1:6351">
                  <Text style={styles.amaraPatel} testID="1:6352">
                    {`Amara Patel`}
                  </Text>
                  <Text style={styles.monday} testID="1:6353">
                    {`Monday`}
                  </Text>
                </View>
                <View style={styles.row23} testID="1:6354">
                  <Text style={styles.canYouSendMeTheFiles} testID="1:6355">
                    {`Can you send me the files?`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell4} testID="1:6356">
            <View style={styles.leftItem4} testID="1:6357">
              <Image
                source={
                  aYoungManWithShortBlackHairAndAFriendlySmileSittingAtADeskWithALaptop
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron4} testID="1:6359">
              <View style={styles.labels4} testID="1:6360">
                <View style={styles.row14} testID="1:6361">
                  <Text style={styles.noahKim} testID="1:6362">
                    {`Noah Kim`}
                  </Text>
                  <Text style={styles.sunday} testID="1:6363">
                    {`Sunday`}
                  </Text>
                </View>
                <View style={styles.row24} testID="1:6364">
                  <Text style={styles.greatJobOnTheProject} testID="1:6365">
                    {`Great job on the project!`}
                  </Text>
                  <Image source={iconsCircleSmallFill2} style={{ width: 14, height: 14 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell5} testID="1:6368">
            <View style={styles.leftItem5} testID="1:6369">
              <Image
                source={
                  aYoungWomanWithLongDarkHairAndAWarmSmileSittingInACozyLivingRoom
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron5} testID="1:6371">
              <View style={styles.labels5} testID="1:6372">
                <View style={styles.row15} testID="1:6373">
                  <Text style={styles.sofiaGarcia} testID="1:6374">
                    {`Sofia Garcia`}
                  </Text>
                  <Text style={styles.lastWeek} testID="1:6375">
                    {`Last week`}
                  </Text>
                </View>
                <View style={styles.row25} testID="1:6376">
                  <Text style={styles.areYouFreeThisWeekend} testID="1:6377">
                    {`Are you free this weekend?`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell6} testID="1:6378">
            <View style={styles.leftItem6} testID="1:6379">
              <Image
                source={
                  aYoungManWithShortBlackHairAndAFriendlySmileSittingAtADeskWithALaptopAndACoffeeCup
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron6} testID="1:6381">
              <View style={styles.labels6} testID="1:6382">
                <View style={styles.row16} testID="1:6383">
                  <Text style={styles.ethanNguyen} testID="1:6384">
                    {`Ethan Nguyen`}
                  </Text>
                  <Text style={styles.lastWeek2} testID="1:6385">
                    {`Last week`}
                  </Text>
                </View>
                <View style={styles.row26} testID="1:6386">
                  <Text style={styles.thanksForTheHelp} testID="1:6387">
                    {`Thanks for the help!`}
                  </Text>
                  <Image source={iconsCircleSmallFill3} style={{ width: 14, height: 14 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chatListCell7} testID="1:6390">
            <View style={styles.leftItem7} testID="1:6391">
              <Image
                source={
                  aYoungWomanWithLongBrownHairAndAFriendlySmilePosingAgainstASoftNeutralBackground
                }
                style={{ width: 64, height: 64 }}
              />
            </View>
            <View style={styles.labelsChevron7} testID="1:6393">
              <View style={styles.labels7} testID="1:6394">
                <View style={styles.row17} testID="1:6395">
                  <Text style={styles.avaReynolds} testID="1:6396">
                    {`Ava Reynolds`}
                  </Text>
                  <Text style={styles.$2WeeksAgo} testID="1:6397">
                    {`2 weeks ago`}
                  </Text>
                </View>
                <View style={styles.row27} testID="1:6398">
                  <Text style={styles.letsPlanATrip} testID="1:6399">
                    {`Let's plan a trip!`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomTabBarWithBigButton} testID="1:6471">
        <View style={styles.bottomTabBarWithLabels} testID="1:6472">
          <View style={styles.tabs} testID="1:6473">
            <View style={styles.tab1} testID="1:6524">
              <Icon />
              <Text style={styles.chats} testID="1:6526">
                {`Chats`}
              </Text>
            </View>
            <View style={styles.tab2} testID="1:6506">
              <Icon2 />
              <Text style={styles.newChat} testID="1:6508">
                {`New Chat`}
              </Text>
            </View>
          </View>
          <View style={styles.gestureIndicatorBar} testID="1:6480">
            <View style={styles.rectangle} testID="1:6481" />
          </View>
        </View>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme: any) => ({
  root: {
    width: 393,
    height: 866,
    minHeight: 852,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  searchChats: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  mainContent: {
    minHeight: 750,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  searchFieldFilledOut: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  searchFieldAtom: {
    flexDirection: "row",
    paddingTop: 10.5,
    paddingLeft: 13,
    paddingBottom: 10.5,
    paddingRight: 13,
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
    borderBottomLeftRadius: 360,
    borderBottomRightRadius: 360,
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    backgroundColor: "rgba(106, 106, 107, 0.03921568766236305)",
  },
  chatsHistoryList: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  chatListCell: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  zaraMontgomery: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  $1030Am: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row1: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  heyLetsCatchUpSoon: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 4,
    columnGap: 4,
    alignSelf: "stretch",
  },
  chatListCell2: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem2: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  liamChen: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  yesterday: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron2: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels2: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row12: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  meetingRescheduledTo3Pm: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row22: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chatListCell3: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem3: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  amaraPatel: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  monday: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron3: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels3: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row13: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  canYouSendMeTheFiles: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row23: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chatListCell4: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem4: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  noahKim: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  sunday: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron4: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels4: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row14: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  greatJobOnTheProject: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row24: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chatListCell5: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem5: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  sofiaGarcia: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  lastWeek: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron5: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels5: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row15: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  areYouFreeThisWeekend: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row25: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chatListCell6: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem6: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  ethanNguyen: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  lastWeek2: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron6: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels6: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row16: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  thanksForTheHelp: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row26: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chatListCell7: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 16,
    alignItems: "center",
    rowGap: 16,
    columnGap: 16,
    alignSelf: "stretch",
    backgroundColor: "rgba(244, 244, 247, 1)",
  },
  leftItem7: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    alignItems: "flex-start",
  },
  avaReynolds: {
    width: 141,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  $2WeeksAgo: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  labelsChevron7: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  labels7: {
    paddingTop: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row17: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  letsPlanATrip: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(107, 114, 128, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
  row27: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 2,
    columnGap: 2,
    alignSelf: "stretch",
  },
  chats: {
    color: "rgba(215, 215, 228, 1)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "600",
  },
  bottomTabBarWithBigButton: {
    paddingTop: 32,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 4,
    columnGap: 4,
    alignSelf: "stretch",
  },
  bottomTabBarWithLabels: {
    paddingTop: 8,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 4,
    columnGap: 4,
    alignSelf: "stretch",
    backgroundColor: "rgba(0, 0, 139, 1)",
    boxShadow: 0,
  },
  tabs: {
    flexDirection: "row",
    alignItems: "flex-start",
    rowGap: 88,
    columnGap: 88,
    alignSelf: "stretch",
  },
  tab1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 3,
    columnGap: 3,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  newChat: {
    color: "rgba(215, 215, 228, 0.501960813999176)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "600",
  },
  tab2: {
    paddingTop: 0,
    paddingLeft: 50,
    paddingBottom: 0,
    paddingRight: 50.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 3,
    columnGap: 3,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  rectangle: {
    width: "120",
    height: 4,
    borderBottomLeftRadius: 360,
    borderBottomRightRadius: 360,
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    backgroundColor: "rgba(215, 215, 228, 0.03921568766236305)",
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
