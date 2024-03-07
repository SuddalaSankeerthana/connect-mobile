import {images, PostDetails} from '../seeder/PostDetails';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View} from 'react-native';
import {PostImage} from './PostImage';
import {styles} from '../styles/HomeScreenBodyStyles';
import {Profile} from './Profile';
import {useState, useRef} from 'react';
import React from 'react';
import {LikesAndComments} from './LikesandComments';
import {Caption} from './Caption';
import {LikesContext} from './LikeContext';

export function PostItem({
  profile_pic,
  name,
  images,
  likes_count,
  description,
}: PostDetails) {
  var like_status = false;
  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);
  const [likesCount, setLikesCount] = useState(likes_count);
  const [likeStatus, setLikeStatus] = useState(like_status);
  const renderImages = ({item}: {item: images}) => {
    return (
      <View style={styles.imageContainer}>
        <PostImage image={item.image} />
      </View>
    );
  };
  return (
    <LikesContext.Provider
      value={{likesCount, setLikesCount, likeStatus, setLikeStatus}}>
      <View style={styles.postConitainer}>
        <Profile
          profile_pic={profile_pic}
          name={name}
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
        />
        <Pagination
          activeDotIndex={page}
          carouselRef={isCarousel}
          tappableDots={true}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          dotsLength={images.length}
          dotStyle={{
            width: 10,
            borderRadius: 18,
            backgroundColor: '#0074FF',
          }}
          containerStyle={{
            paddingTop: -20,
          }}
          inactiveDotStyle={{
            backgroundColor: 'grey',
          }}
        />
        <LikesAndComments />
        <Caption description={description} />
      </View>
    </LikesContext.Provider>
  );
}
