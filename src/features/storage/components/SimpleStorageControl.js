import { connect } from "react-redux";

import Btn from "../../../components/button";
import { load } from "../../customer/customerSlice";
import { clearStorage } from "../index";

const SimpleStorageControl = ({ dispatch }) => {
  return (
    <Btn title={"RESET STORAGE"} onPress={async () => {
      // TODO: Some or all of this belongs in a saga.
      await clearStorage()
      dispatch(load({}));
    }} />
  );
};

const mapStateToProps = (state, { dispatch }) => ({ dispatch });

export default connect(mapStateToProps)(SimpleStorageControl);