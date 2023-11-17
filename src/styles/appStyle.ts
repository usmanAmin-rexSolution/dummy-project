import { StyleSheet } from "react-native";
import { family_set } from ".";
import { theme } from "../constants";
import { calculateHeight, calculateWidth } from "../utils/ScreenSize";

export default StyleSheet.create({
  // all appStyle  style here
  p0: {
    padding: 0,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p15: {
    padding: 15,
  },
  p16: {
    padding: 16,
  },
  p20: {
    padding: 20,
  },

  m0: {
    margin: 0,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  m15: {
    margin: 15,
  },
  m25: {
    margin: 25,
  },

  //Left
  pl3: {
    paddingLeft: 3,
  },
  pl2: {
    paddingLeft: 2,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },

  pl15: {
    paddingLeft: 15,
  },

  ml0: {
    marginLeft: 0,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  ml15: {
    marginLeft: 15,
  },
  ml30: {
    marginLeft: 30,
  },

  //right

  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  pr20: {
    paddingRight: 20,
  },
  pr30: {
    paddingRight: 30,
  },
  pr35: {
    paddingRight: 35,
  },
  pr40: {
    paddingRight: 40,
  },
  mr0: {
    marginRight: 0,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  mr15: {
    marginRight: 15,
  },
  mr30: {
    marginRight: 30,
  },

  //top
  pt0: {
    paddingTop: 0,
  },
  pt2: {
    paddingTop: 2,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pt20: {
    paddingTop: 20,
  },
  pt30: {
    paddingTop: 30,
  },
  mt0: {
    marginTop: 0,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },
  btrRadius: {
    borderTopRightRadius: 30,
  },
  btlRadius: {
    borderTopLeftRadius: 30,
  },
  //bottom
  pb0: {
    paddingBottom: 0,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb20: {
    paddingBottom: 20,
  },

  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb50: {
    marginBottom: 50,
  },

  //vertical
  pv0: {
    paddingVertical: 0,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv15: {
    paddingVertical: 15,
  },
  pv20: {
    paddingVertical: 20,
  },
  pv25: {
    paddingVertical: 25,
  },
  pv30: {
    paddingVertical: 30,
  },
  mv0: {
    marginVertical: 0,
  },
  mv5: {
    marginVertical: 5,
  },
  mv10: {
    marginVertical: 10,
  },
  mtN10: {
    marginTop: -10,
  },
  mtN20: {
    marginTop: -20,
  },
  mtN40: {
    marginTop: -40,
  },
  mvN10: {
    marginVertical: -10,
  },
  mv20: {
    marginVertical: 20,
  },
  mv30: {
    marginVertical: 30,
  },

  //horizontal
  ph0: {
    paddingHorizontal: 0,
  },
  ph5: {
    paddingHorizontal: 5,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  ph30: {
    paddingHorizontal: 30,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh15: {
    marginHorizontal: 15,
  },
  mh20: {
    marginHorizontal: 20,
  },

  mh30: {
    marginHorizontal: 30,
  },
  mh40: {
    marginHorizontal: 40,
  },
  mh50: {
    marginHorizontal: 50,
  },

  //nagative
  mbN20: {
    marginBottom: -20,
  },
  mhN20: {
    marginHorizontal: -20,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scroll: {
    flexGrow: 1
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },

  pRelative: {
    position: "relative",
  },
  pAbsolute: {
    position: "absolute",
  },

  row: {
    flexDirection: "row",
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowBtw: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  aiFlexStart: {
    alignItems: "flex-start",
  },
  aiFlexEnd: {
    alignItems: "flex-end",
  },
  aiCenter: {
    alignItems: "center",
  },
  jcCenter: {
    justifyContent: "center",
  },
  jcFlexStart: {
    justifyContent: "flex-start",
  },
  jcFlexEnd: {
    justifyContent: "flex-end",
  },
  jcSpaceBetween: {
    justifyContent: "space-between",
  },
  jcSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  jcSpaceAround: {
    justifyContent: "space-around",
  },
  asCenter: {
    alignSelf: "center",
  },
  taCenter: {
    textAlign: "center",
  },
  taLeft: {
    textAlign: "left",
  },
  taRight: {
    textAlign: "right",
  },
  asFlexStart: {
    alignSelf: "flex-start",
  },
  asFlexEnd: {
    alignSelf: "flex-end",
  },

  colCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  //width
  w10: {
    width: "10%",
  },
  w20: {
    width: "20%",
  },
  w25: {
    width: "25%",
  },

  w30: {
    width: "30%",
  },
  w33: {
    width: "33%",
  },
  w45: {
    width: "45%",
  },
  w40: {
    width: "40%",
  },
  w50: {
    width: "50%",
  },
  w55: {
    width: "55%",
  },
  w60: {
    width: "60%",
  },
  w70: {
    width: "70%",
  },
  w75: {
    width: "75%",
  },
  w80: {
    width: "80%",
  },
  w85: {
    width: "85%",
  },
  w90: {
    width: "90%",
  },
  w95: {
    width: "95%",
  },
  w100: {
    width: "100%",
  },
  h100: {
    height: "100%",
  },
  fs15: {
    fontSize: 15,
  },
  fs24: {
    fontSize: 24,
  },
  fs22: {
    fontSize: 22,
  },
  fwBold: {
    fontWeight: "bold",
  },
  // border
  bTop: {
    borderTopWidth: 1.5,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerTitleCenter: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  divider: {
    width: calculateWidth(100),
    borderWidth: 0.5,
    borderColor: "#D9D9D9",
    marginHorizontal: -20,
  },
  textLink: {
    color: theme.colors.blue,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: theme.colors.blue,
  },
  headContainer: {
    paddingTop: 20,
  },
  whishlistIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  wrapper: {
    width: calculateWidth(100),
    height: calculateHeight(100),
  },
  inputContainer: {
    justifyContent: "center",
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    width: "98%",
  },
  textRight: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: -15,
  },
  bgImg: {
    width: 457,
    height: 220,
    alignSelf: "center",
  },
  imgFLuid: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  iconFLuid: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  home_bgImg: {
    width: 457,
    height: 120,
    alignSelf: "center",
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -15,
    borderTopEndRadius: 20,
  },
  jaCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "95%",
    alignSelf: "center",
    margin: 10,
    justifyContent: "space-around",
  },
  headingPlacement: {
    top: 20,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
  },
  positionAbsolute: {
    position: "absolute",
  },
  positionRelative: {
    position: "relative",
  },
  fontWeight600: {
    fontWeight: "600",
  },
  tabHomeIcon: {
    marginTop: -20,
    height: 60,
    width: 60,
  },
  circular: {
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.18)",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.black,
    opacity: 0.50,
    borderRadius: 20,
  },
  horizontalCategoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: calculateWidth(100) - 32,
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingTop: 16
  },
  safeContainerBottom: {
    height: 380,
    width: 200
  },
});
