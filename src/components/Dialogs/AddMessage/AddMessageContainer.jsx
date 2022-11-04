// Libraries;
import { connect } from "react-redux";

// Action creators
import {changeMessageTextActionCreator} from "../../../redux/dialogs-reducer"
import {sendMessageActionCreator} from "../../../redux/dialogs-reducer"

// App components 
import AddMessage from './AddMessage'

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageText: (text) => {
            dispatch(changeMessageTextActionCreator(text));
        },

        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const AddMessageContainer = connect(mapDispatchToProps)(AddMessage);

export default AddMessageContainer;