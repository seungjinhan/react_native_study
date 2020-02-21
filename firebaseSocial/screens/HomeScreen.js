import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

const posts = [
  {
    id: "1",
    name: "Han",
    text:
      "If you know how to write apps using JavaScript you can customize any part of React Navigation.",
    timestamp: 1234556677,
    avatar: require("../assets/join_back.jpg"),
    image: require("../assets/join_back2.png")
  },
  {
    id: "2",
    name: "Han",
    text:
      "If you know how to write apps using JavaScript you can customize any part of React Navigation.",
    timestamp: 1234556677,
    avatar: require("../assets/join_back.jpg"),
    image: require("../assets/join_back2.png")
  },
  {
    id: "3",
    name: "Han",
    text: "good man",
    timestamp: 1234556677,
    avatar: require("../assets/join_back.jpg"),
    image: require("../assets/join_back2.png")
  },
  {
    id: "4",
    name: "Han",
    text:
      "If you know how to write apps using JavaScript you can customize any part of React Navigation.",
    timestamp: 1234556677,
    avatar: require("../assets/join_back2.png"),
    image: require("../assets/join_back.jpg")
  }
];
export default class HomeScreen extends React.Component {
  renderPost = post => {
    return (
      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>

            <Ionicons name="ios-more" size={24} color="#73788B" />
          </View>
          <Text style={styles.posts}>{post.text}</Text>

          <Image
            source={post.image}
            style={styles.postImage}
            resizeMode="cover"
          />

          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-heart-empty"
              size={24}
              color="#73788B"
              style={{ marginRight: 16 }}
            />
            <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
        </View>
        <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4"
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500"
  },
  feed: {
    marginHorizontal: 16
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65"
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  posts: {
    marginTop: 16,
    fontSize: 15,
    color: "#838899"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
  }
});
