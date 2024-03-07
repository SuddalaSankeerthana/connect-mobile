import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View} from 'react-native';
import {PostImage} from './PostImage';
import {styles} from '../styles/HomeScreenBodyStyles';
import {Profile} from './Profile';
import {useState, useRef} from 'react';
import React from 'react';
import {LikesAndComments} from './LikesandComments';
import {Caption} from './Caption';
import {PostType} from './Body';

const renderImages = ({item}: any) => {
  return (
    <View style={styles.imageContainer}>
      <PostImage image={item} />
    </View>
  );
};

export function PostItem(props: PostType) {
  const images: ArrayLike<string[]> & readonly string[][] = props.Images;
  const length = props.Images.length;
  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.postConitainer}>
      <Profile
        profile_pic={props.ProfileImageAddress}
        name={props.Username}
        containerStyle={styles.profileContainer}
        imageStyle={styles.profileImage}
      />
      <Carousel
        ref={isCarousel}
        onSnapToItem={page => setPage(page)}
        layout={'default'}
        data={images}
        renderItem={renderImages}
        sliderHeight={100}
        sliderWidth={400}
        itemWidth={350}
        testID="images"
      />
      <Pagination
        activeDotIndex={page}
        carouselRef={isCarousel}
        tappableDots={true}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotsLength={length}
        dotStyle={styles.dotStyle}
        containerStyle={styles.containerStyle}
        inactiveDotStyle={styles.inDotStyle}
      />

      <LikesAndComments likes_count={props.LikesCount} />

      <Caption description={props.Caption} />
    </View>
  );
}
