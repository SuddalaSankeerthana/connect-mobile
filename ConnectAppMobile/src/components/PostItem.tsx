import {images, PostDetails} from '../seeder/PostDetails';
import Carousel, { Pagination } from "react-native-snap-carousel";
import {View, Text, Image} from 'react-native';
import {PostImage} from './PostImage';
import {styles} from '../styles/HomeScreenBodyStyles';
import { Profile } from './Profile';
import { useState, useRef } from 'react';

const renderImages = ({item}: {item: images}) => {
  return (
    <View style={styles.imageContainer}>
      <PostImage image={item.image} />
    </View>
  );
};

export function PostItem({
  profile_pic,
  name,
  images,
  description,
  likes_count,
}: PostDetails) {
    const [page, setPage] = useState(0);
   const isCarousel = useRef(null);
  return (
   <View style={styles.postConitainer}>
<Profile profile_pic={profile_pic} name={name}/>
      <Carousel
      ref={isCarousel}
      onSnapToItem={(page) => setPage(page)}
        layout={'default'}
        data={images}
        renderItem={renderImages}
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
               backgroundColor: "#0074FF",
            }}
            inactiveDotStyle={{
               backgroundColor: "grey",
            }}
         />
      </View>
    
  );
}
