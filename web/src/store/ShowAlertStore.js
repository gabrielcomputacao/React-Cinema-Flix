import {
  action,
  makeObservable,
  observable
} from "mobx";

class ShowAlertStore {
  message = "";
  severity = "success";
  show = false

  constructor() {
    makeObservable(this, {
      severity: observable,
      message: observable,
      show: observable,
      onClose: action,
      setSeverity: action,
      setMessage: action,
      setshowAlert: action
    });
  }


  setMessage(value) {
    this.message = value
  }

  setSeverity(value) {
    this.severity = value
  }


  onClose() {
    this.show = false
  }

  setshowAlert(message, severity) {
    this.severity = severity;
    this.message = message;
    this.show = true
  }

  setOnClose(value) {
    this.onClose = value
  }

}

export default new ShowAlertStore()