import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Start() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <view>
          <image source={require("../../Assets/icons/logo3.png")} />
          <text>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "}
            o melhor nível.
          </text>
        </view>
      </ScrollView>
    </View>
  );
}
