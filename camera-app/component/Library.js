import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get("window").width;

const imageWidth = windowWidth * 0.3;
const LibraryPage = () => {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    if (permissionResponse && permissionResponse.granted) {
      getPhotos();
    }
  }, [permissionResponse]);

  if (!permissionResponse) {
    return <View />;
  }

  const { granted, canAskAgain } = permissionResponse;

  if (!granted && canAskAgain) {
    return (
      <View>
        <Text>kjhkh</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>sent request</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!granted && !canAskAgain) {
    return (
      <View>
        <Text>bey</Text>
        <TouchableOpacity>
          <Text>sent request</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const getPhotos = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: ["creationTime"],
    });
    setPhotos(media.assets);
  };

  const HandleUp = async () => {};

  return (
    <FlatList
      numColumns={3}
      data={photos}
      renderItem={({ item }) => (
        <ImageItem
          photo={item}
          selected={
            selectedPhotos.findIndex((selected) => selected.id == item.id) + 1
          }
          onSelect={() => setSelectedPhotos([...selectedPhotos, item])}
          onRemove={() =>
            setSelectedPhotos(
              selectedPhotos.filter((selected) => selected.id !== item.id)
            )
          }
        />
      )}
      keyExtractor={(item) => item.uri}
    />
  );
};
export default LibraryPage;
const ImageItem = ({ photo, onSelect, onRemove, selected }) => {
  return (
    <TouchableOpacity onPress={() => (selected ? onRemove() : onSelect())}>
      <View>
        <Image
          source={{ uri: photo.uri }}
          style={{ width: imageWidth, height: imageWidth, margin: 1 }}
        />
        {!!selected && (
          <View>
            <Text>{selected}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
