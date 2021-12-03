import React from "react";
import { StyleSheet, View, StatusBar, Image, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Button from "./Button";

const RepositoryItemHeader = ({
  fullName,
  description,
  language,
  avatarUrl,
}) => {
  return (
    <View style={styles.itemHeaderContainer}>
      <View style={styles.itemHeaderAvatarWrapper}>
        <Image
          style={styles.itemAvatar}
          source={{
            uri: avatarUrl,
          }}
        />
      </View>
      <View style={styles.itemHeaderBodyWrapper}>
        <Text fontSize="subheading" fontWeight="bold">
          {fullName}
        </Text>
        <Text color="textSecondary" mt={2}>
          {description}
        </Text>
        <Button>
          <Text color="white">{language}</Text>
        </Button>
      </View>
    </View>
  );
};

const RepositoryItemStats = ({
  starsCount,
  forksCount,
  reviewsCount,
  ratingAverage,
}) => {
  const formatNumber = (number) => {
    if (number >= 1000) {
      return `${parseFloat((number / 1000).toFixed(1))}k`;
    }
    return `${parseFloat(number)}`;
  };

  return (
    <View style={styles.itemStatsContainer}>
      <View style={styles.itemStatsColumn}>
        <Text fontWeight="bold">{formatNumber(starsCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.itemStatsColumn}>
        <Text>{forksCount}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.itemStatsColumn}>
        <Text>{reviewsCount}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.itemStatsColumn}>
        <Text>{ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <RepositoryItemHeader
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        avatarUrl={item.ownerAvatarUrl}
      />
      <RepositoryItemStats
        starsCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewsCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: theme.colors.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    fontSize: 12,
  },
  itemHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },
  itemHeaderAvatarWrapper: {
    flex: 0.3,
  },
  itemAvatar: {
    width: 50,
    height: 50,
  },
  itemHeaderBodyWrapper: {
    flex: 1,
  },
  itemStatsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  itemStatsColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RepositoryItem;
