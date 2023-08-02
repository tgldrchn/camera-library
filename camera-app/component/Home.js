import { TouchableOpacity, View, Text, SafeAreaView } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          <Text>camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("library")}>
          <Text>library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
