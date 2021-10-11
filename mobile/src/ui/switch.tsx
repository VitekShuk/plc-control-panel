import React, { FC, useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import ModbusTcp from 'react-native-modbus-tcp';

interface IProps {
    text: string
    number?: number
}

const PLC_IP = '192.168.1.10';
const PLC_PORT = 502;
const PLC_MODBUS_ADDRESS = 1;

const destroyConnection = () => {
    ModbusTcp.destroyConnection((res: any) => {
        console.log(res);
    });
}

export const CustomSwitch: FC<IProps> = ({text, number = 0}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
        ModbusTcp.connectToModbusMaster(PLC_IP, PLC_PORT, (res: any) => {
            if (res === 'Modbus4Android init success') {
                ModbusTcp.writeCoil(PLC_MODBUS_ADDRESS, number, !isEnabled, (res: any) => {
                    console.log(!isEnabled, res);

                    if (res === 'Success') {
                        setIsEnabled(previousState => !previousState);
                    };

                    destroyConnection();
                });
            } else {
                destroyConnection();
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
