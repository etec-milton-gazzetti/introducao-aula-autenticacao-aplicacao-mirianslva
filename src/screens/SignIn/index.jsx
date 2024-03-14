import { Image, Text, View } from "react-native";
import password from "../../../assets/password.png"

export default function SignIn() {
    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            <Text>SignIn</Text>
            <Image source={password} style={{ width: "15%", height: "15%" }}>  </Image>
            <View style={{ width: "100%", padding: 10 }}>

                <View style={{
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Text>Email</Text>

                </View>

            </View>
        </View>
    );

}