// Libraries
import {connect} from "react-redux"
// Other components
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.messageText,
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;