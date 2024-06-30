import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  Platform,
} from 'react-native';
import { normalizeFont, normalizeVerticalPaddingAndMargin, normalizeHeight } from '../constants/normalizeLayout';
const {height, width} = Dimensions.get('window');

const Home = () => {
  const [data, setData] = useState([...Array(10).keys()]);
  const flatListRef = useRef(null);

  const renderItem = ({item, index}) => (
    <ImageBackground
      source={{
        uri: `https://picsum.photos/500/800?random=${item + 1}`,
      }}
      style={styles.image}>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Image {index + 1}</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </View>
    </ImageBackground>
  );

  const handleScrollEnd = event => {
    const {contentOffset} = event.nativeEvent;
    const heighty =
      Platform.OS === 'ios'
        ? height - normalizeVerticalPaddingAndMargin(100)
        : height - normalizeVerticalPaddingAndMargin(50);
    const newIndex = Math.round(contentOffset.y / heighty);
    if (flatListRef.current) {
      if (newIndex !== data.length - 1) {
        flatListRef.current.scrollToIndex({index: newIndex, animated: true});
      }
    }
  };

  const loadMoreData = () => {
    setData(prevData => [
      ...prevData,
      ...[...Array(10).keys()].map((_, i) => prevData.length + i),
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        ref={flatListRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        snapToInterval={
          Platform.OS === 'ios'
            ? height - normalizeVerticalPaddingAndMargin(100)
            : height - normalizeVerticalPaddingAndMargin(50)
        }
        decelerationRate="fast"
        snapToAlignment="start"
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: height,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: width,
    height: Platform.OS === 'ios'
      ? height - normalizeVerticalPaddingAndMargin(90)
      : height - normalizeVerticalPaddingAndMargin(50),
    resizeMode: 'contain',
  },
  topText: {
    position: 'absolute',
    top: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomText: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: normalizeFont(18),
    color: 'white',
    textAlign: 'center',
    marginTop: normalizeVerticalPaddingAndMargin(10),
  },
  description: {
    fontSize: normalizeFont(14),
    color: 'white',
    textAlign: 'left',
    marginBottom: normalizeVerticalPaddingAndMargin(10),
    bottom: 0,
    paddingLeft: normalizeVerticalPaddingAndMargin(10),
  },
  imageContainer: {
    justifyContent: 'space-between',
    paddingVertical: normalizeVerticalPaddingAndMargin(20),
    flex: 1,
  },
});

export default Home;
