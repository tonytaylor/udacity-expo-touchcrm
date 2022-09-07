import { View, Text, SafeAreaView, FlatList, SectionList } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomerListEntry from "./CustomerListEntry";
import CustomerProfile from "./CustomerProfile";

import { salesRegions } from "../../utils/_DATA";
import styles from "../../components/styles";

const CustomerList = ({ customers }) => {
  const customersByRegion = Object.entries(salesRegions).reduce((p, c) => {
    const [regionId, regionTitle] = c;
    const groupedCustomers = Object.values(customers).filter((customer) => customer.salesRegion === regionId);
    return (groupedCustomers.length > 0) ?
      p.concat([{ title: regionTitle, data: groupedCustomers }]) : p.concat([]);
  }, []);
  const onItemRender = ({ item }) => <CustomerListEntry customer={item} />;
  const onSectionRender = ({ section: { title } }) => (<Text style={styles.textMedium}>{title}</Text>);
  return (
    <SafeAreaView style={{ width: '100%' }}>
      <SectionList
        renderSectionHeader={onSectionRender}
        renderItem={onItemRender}
        keyExtractor={(item, index) => index}
        sections={customersByRegion} />
      {/*<FlatList data={Object.values(customers)} renderItem={onItemRender} keyExtractor={(c) => c.id} />*/}
    </SafeAreaView>
  )
};

CustomerList.propTypes = {
  customers: PropTypes.objectOf(CustomerProfile.propTypes.customer)
};

const mapStateToProps = ({ customers }) => ({ customers });

export default connect(mapStateToProps)(CustomerList);

