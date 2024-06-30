import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {normalizeVerticalPaddingAndMargin} from '../constants/normalizeLayout';
const {width} = Dimensions.get('window');

const ImageWrapper = ({children, idx}) => {
  return (
    <ImageBackground
      key={idx}
      source={{
        uri: `https://picsum.photos/seed/${Math.random()}/300/300`,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.38,
    height: width * 0.38,
    borderRadius: normalizeVerticalPaddingAndMargin(10),
    margin: normalizeVerticalPaddingAndMargin(5),
  },
  image: {
    borderRadius: normalizeVerticalPaddingAndMargin(10),
    resizeMode: 'cover',
  },
});

export default ImageWrapper;
