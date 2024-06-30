import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import {
  normalizeFont,
  normalizeHorizontalPaddingAndMargin,
  normalizeVerticalPaddingAndMargin,
} from '../constants/normalizeLayout';
import ImageWrapper from '../components/ImageWrapper';
const {width} = Dimensions.get('window');

const Search = () => {
  const showToast = () => {
    if (Platform.OS === 'ios') {
      Alert.alert('Coming soon!');
    } else {
      ToastAndroid.show('Coming soon!', ToastAndroid.SHORT);
    }
  };

  const SectionHeader = ({title, onPress}) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.seeAllText} onPress={onPress}>
        See all
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Discover the world</Text>
      <TextInput
        placeholder="Search"
        style={styles.placeholder}
        placeholderTextColor="#788487"
      />
      <ImageBackground
        source={{
          uri: `https://picsum.photos/400/300`,
        }}
        style={styles.headerImgContainer}
        imageStyle={styles.headerImg}>
        <Text style={styles.treadingText}>#Top search of the day</Text>
      </ImageBackground>
      <SectionHeader title="Trending hashtags" onPress={showToast} />
      <ScrollView
        nestedScrollEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {[...Array(10).keys()].map((item, index) => (
          <ImageWrapper idx={index}>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageTextHeading}>#Trending</Text>
              <Text style={styles.imageText}>5.3m</Text>
            </View>
          </ImageWrapper>
        ))}
      </ScrollView>
      <SectionHeader title="Top community" onPress={showToast} />
      <ScrollView
        nestedScrollEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {[...Array(10).keys()].map((item, index) => (
          <ImageWrapper idx={index}>
            <Text style={styles.communityTopText}>175posts/day</Text>
            <View style={styles.communityTextContainer}>
              <Text style={styles.communityText}>Place of</Text>
              <Text style={[styles.communityText, styles.textBold]}>
                France
              </Text>
            </View>
          </ImageWrapper>
        ))}
      </ScrollView>
      <SectionHeader title="Top nomads" onPress={showToast} />
      <ScrollView
        nestedScrollEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {[...Array(10).keys()].map((item, index) => (
          <View key={index} style={styles.userContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri: `https://picsum.photos/seed/${Math.random()}/300/300?women`,
              }}
            />
            <Text style={styles.userName}>@username{index + 1}</Text>
            <Text style={styles.userFollowers}>260k followers</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalizeVerticalPaddingAndMargin(15),
    backgroundColor: '#EEF1F5',
  },
  heading: {
    fontSize: normalizeFont(24),
    color: 'black',
    textAlign: 'left',
    marginTop: normalizeVerticalPaddingAndMargin(10),
    fontWeight: 'bold',
    color: '#788487',
  },
  placeholder: {
    backgroundColor: 'white',
    padding: normalizeVerticalPaddingAndMargin(10),
    borderRadius: normalizeVerticalPaddingAndMargin(5),
    marginTop: normalizeVerticalPaddingAndMargin(10),
    borderColor: '#788487',
    color: '#788487',
    placeholderTextColor: '#788487',
    fontSize: normalizeFont(16),
  },
  treadingText: {
    color: 'white',
    fontSize: normalizeFont(20),
    fontWeight: 'bold',
    textAlign: 'left',
    padding: normalizeVerticalPaddingAndMargin(5),
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  seeAllText: {
    color: '#788487',
    fontSize: normalizeFont(16),
    textAlign: 'right',
    marginTop: normalizeVerticalPaddingAndMargin(10),
  },
  imageTextContainer: {
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    padding: normalizeVerticalPaddingAndMargin(5),
    paddingBottom: normalizeVerticalPaddingAndMargin(10),
  },
  imageTextHeading: {
    fontSize: normalizeFont(16),
    fontWeight: 'bold',
    color: 'white',
  },
  imageText: {
    fontSize: normalizeFont(13),
    color: 'white',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImgContainer: {
    width: '100%',
    height: normalizeVerticalPaddingAndMargin(180),
    marginTop: normalizeVerticalPaddingAndMargin(10),
  },
  headerImg: {
    borderRadius: normalizeVerticalPaddingAndMargin(10),
    resizeMode: 'cover',
    elevation: 4,
  },
  scrollView: {
    marginTop: normalizeVerticalPaddingAndMargin(14),
  },
  communityTopText: {
    fontSize: normalizeFont(13),
    color: 'white',
    textAlign: 'right',
    paddingRight: normalizeHorizontalPaddingAndMargin(10),
    paddingTop: normalizeVerticalPaddingAndMargin(6),
  },
  communityTextContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: normalizeVerticalPaddingAndMargin(5),
    paddingBottom: normalizeVerticalPaddingAndMargin(10),
    paddingLeft: normalizeHorizontalPaddingAndMargin(10),
  },
  communityText: {
    fontSize: normalizeFont(24),
    color: 'white',
  },
  textBold: {
    fontWeight: 'bold',
  },
  userContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeVerticalPaddingAndMargin(10),
    marginBottom: normalizeVerticalPaddingAndMargin(10),
  },
  userImage: {
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: 60,
    margin: normalizeHorizontalPaddingAndMargin(10),
  },
  userName: {
    fontSize: normalizeFont(14),
    fontWeight: 'bold',
    color: 'black',
  },
  userFollowers: {
    fontSize: normalizeFont(13),
    color: 'black',
  },
});

export default Search;
