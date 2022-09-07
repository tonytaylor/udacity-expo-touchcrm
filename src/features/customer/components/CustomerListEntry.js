import { View, Text, Image } from "react-native";
import { Link } from '@react-navigation/native';

import styles from "../../../components/styles";

const CustomerListEntry = ({ customer }) => {
  return (
    <View style={styles.listItem}>
      <Link to={{ screen: 'Customer', params: { id: customer.id }}}>
        <View style={{ height: 48, alignItems: 'center', flexDirection: 'row', width: '100%' }}>
          <View style={{ justifyContent: 'space-around', paddingLeft: 6 }}>
            <Image
              style={{ width: 40, height: 40, resizeMode: 'contain' }}
              source={require('../../../../assets/img_avatar.png')} />
          </View>
          <View style={{ justifyContent: 'space-around', padding: 12 }}>
            <Text>{`${customer.lastName}, ${customer.firstName}`}</Text>
          </View>
          <View style={{ justifyContent: 'space-around', padding: 12 }}>
            <Text>{customer.email}</Text>
          </View>
          <View style={{ justifyContent: 'flex-end', padding: 12 }}>
            <Text>{customer.salesRegion.toUpperCase()}</Text>
          </View>
        </View>
      </Link>
    </View>
  );
};


export default CustomerListEntry;