import React from "react";
import { View, Text } from "react-native";
import GoogleIcon from "../assets/svg/googleicon.svg";
// Dummy style hook and function for demonstration (replace with your actual implementation)
const useStyles = (stylesheet: any) => ({ styles: stylesheet });
const createStyleSheet = (fn: any) => fn({});

export interface ALogInPageForAMobileAppProps {
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export function ALogInPageForAMobileApp(props: ALogInPageForAMobileAppProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID ?? "1:6976"}>
      <View style={styles.mainContent} testID="1:4502">
        <View style={styles.signInForm} testID="1:4788">
          <View style={styles.frame} testID="1:4789">
            <View style={styles.tableHeaderHugeTitle} testID="1:4809">
              <View style={styles.tableHeader} testID="1:4810">
                <Text style={styles.welcomeBack} testID="1:4811">
                  {`Welcome Back!`}
                </Text>
              </View>
            </View>
            <View style={styles.textField} testID="1:4802">
              <View style={styles.textFieldAtom} testID="1:4805">
                <Text style={styles.username} testID="1:4806">
                  {`Username`}
                </Text>
              </View>
            </View>
            <View style={styles.textField2} testID="1:4795">
              <View style={styles.textFieldAtom2} testID="1:4798">
                <Text style={styles.password} testID="1:4799">
                  {`Password`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.signInButtons} testID="1:4767">
          <View style={styles.tripleButtonsVerticalLarge} testID="1:4775">
            <View style={styles.buttonLargePrimary} testID="1:4786">
              <Text style={styles.signIn} testID="1:4787">
                {`Sign In`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.signUpButtons} testID="1:4734">
          <View style={styles.buttonSignUpWithGoogle} testID="1:4749">
            <Text style={styles.signUpWithGoogle} testID="1:4750">
              {`Sign up with Google`}
            </Text>
            <GoogleIcon />
          </View>
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
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  welcomeBack: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "rgba(0, 0, 139, 1)",
    textAlign: "center",
    fontFamily: "Public Sans",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.56,
  },
  mainContent: {
    minHeight: 759,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  signInForm: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  frame: {
    paddingTop: 50,
    paddingLeft: 0,
    paddingBottom: 50,
    paddingRight: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  tableHeaderHugeTitle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  tableHeader: {
    flexDirection: "row",
    paddingTop: 28,
    paddingLeft: 18,
    paddingBottom: 18,
    paddingRight: 18,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  username: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(0, 0, 139, 0.6196078658103943)",
    fontFamily: "Public Sans",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.085,
  },
  textField: {
    paddingTop: 8,
    paddingLeft: 18,
    paddingBottom: 8,
    paddingRight: 18,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  textFieldAtom: {
    flexDirection: "row",
    paddingTop: 13.5,
    paddingLeft: 13,
    paddingBottom: 13.5,
    paddingRight: 13,
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(0, 0, 139, 0.09019608050584793)",
  },
  password: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(0, 0, 139, 0.6196078658103943)",
    fontFamily: "Public Sans",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.085,
  },
  textField2: {
    paddingTop: 8,
    paddingLeft: 18,
    paddingBottom: 8,
    paddingRight: 18,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  textFieldAtom2: {
    flexDirection: "row",
    paddingTop: 13.5,
    paddingLeft: 13,
    paddingBottom: 13.5,
    paddingRight: 13,
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(0, 0, 139, 0.09019608050584793)",
  },
  signIn: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontFamily: "Public Sans",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "500",
  },
  signInButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
  },
  tripleButtonsVerticalLarge: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    paddingRight: 18,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 18,
    columnGap: 18,
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  buttonLargePrimary: {
    flexDirection: "row",
    height: 50,
    paddingTop: 14.5,
    paddingLeft: 16,
    paddingBottom: 14.5,
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: "rgba(0, 0, 139, 1)",
  },
  signUpWithGoogle: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    overflow: "hidden",
    color: "rgba(0, 0, 139, 1)",
    textAlign: "center",
    fontFamily: "Public Sans",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "500",
  },
  signUpButtons: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    paddingRight: 18,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 18,
    columnGap: 18,
    alignSelf: "stretch",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  buttonSignUpWithGoogle: {
    flexDirection: "row",
    height: 50,
    paddingTop: 14,
    paddingLeft: 16,
    paddingBottom: 14,
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 8,
    alignSelf: "stretch",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 139, 0.20000000298023224)",
  },
}));
