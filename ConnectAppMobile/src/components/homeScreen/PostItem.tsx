import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text} from 'react-native';
import {PostImage} from './PostImage';
import {styles} from '../../styles/HomeScreenBodyStyles';
import {Profile} from './Profile';
import {useState, useRef} from 'react';
import React from 'react';
import {LikesAndComments} from './LikesandComments';
import {Caption} from './PostCaption';
import {PostType} from './Body';
import PropTypes from 'prop-types';
import {LikeContext} from './LikeContext';


export function PostItem(props: PostType) {
  const images: ArrayLike<string[]> & readonly string[][] = props.Images;
  const length = props.Images.length;
  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);
  console.log(Boolean(props.LikeStatus));
  console.log(props);
  const [likesCount, setLikesCount] = useState(props.LikesCount);
  const [likeStatus, setLikeStatus] = useState(Boolean(props.LikeStatus));
  console.log(likeStatus);
  const renderImages = ({item}: any) => {
    return (
      <View style={styles.imageContainer}>
        <PostImage image={item} />
      </View>
    );
  };
  return (
    <LikeContext.Provider
      value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
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
          style={styles.carousel}></Carousel>

        <Pagination
          dotContainerStyle={styles.dotContainer}
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
        <LikesAndComments likes_count={props.LikesCount} post={props}/>
        <Caption description={props.Caption} />
      </View>
    </LikeContext.Provider>
  );
}
