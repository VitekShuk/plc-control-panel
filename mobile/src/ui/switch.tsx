import React, { FC, useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import ModbusTcp from 'react-native-modbus-tcp';


interface IProps {
    text: string
    number?: number
}

export const CustomSwitch: FC<IProps> = ({text, number = 0}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
        ModbusTcp.connectToModbusMaster('192.168.1.10', 502, (res: any) => {
            if (res === 'Modbus4Android init success') {
                ModbusTcp.writeCoil(1, number, !isEnabled, (res: any) => {
                    console.log(!isEnabled, res);
                    if (res === 'Success') {
                        setIsEnabled(previousState => !previousState);
                    };
                    ModbusTcp.destroyConnection((res: any) => {
                        console.log(res);
                    });
                });
            } else {
                ModbusTcp.destroyConnection((res: any) => {
                    console.log(res);
                });
            };
        });
    };

  return (
    <View style={styles.container}>
        <Text style={{marginBottom: 5}}>{text}</Text>

        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  }
});
