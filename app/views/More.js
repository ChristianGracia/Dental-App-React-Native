import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  TextInput
} from "react-native";
import { iOSColors } from "react-native-typography";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOther: true,
      showReview: false,
      showSuggestion: false,
      patientReview: ""
    };
    this.handleReview = this.handleReview.bind(this);
  }
  handleReview = e => {
    this.setState({ showOther: false, showReview: true });
  };
  handleSuggestion = e => {
    this.setState({ showOther: false, showSuggestion: true });
  };
  onChangeReview = e => {
    this.setState({ patientReview: e.nativeEvent.text });
    console.log(this.state.patientReview);
  };
  onChangeSuggestion = e => {
    this.setState({ patientSuggestion: e.nativeEvent.text });
    console.log(this.state.patientSuggestion);
  };
  handleReviewSubmit = e => {
    if (this.state.patientReview !== "") {
      fetch("https://sendpoint.io/id/ADCEMAIL", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "anonymous",
          review: this.state.patientReview
        })
      });
      this.setState({
        patientReview: "",

        showReview: false
      });
      alert("Review Received!");
    } else {
      alert("Please leave a review!");
    }
  };
  handleSuggestionSubmit = e => {
    if (this.state.patientSuggestion !== "") {
      fetch("https://sendpoint.io/id/ADCEMAIL", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "suggestion",
          review: this.state.patientSuggestion
        })
      });
      this.setState({
        patientSuggestion: "",

        showReview: false
      });
      alert("Review Received!");
    } else {
      alert("Please leave a review!");
    }
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.headerDiv}>
            <Text style={{ ...styles.header }}>More</Text>
          </View>
          <View style={styles.headerSpacing} />

          <View style={styles.formsContainer}>
            <Text style={styles.formHeader}>Tell us what you think!</Text>
            {this.state.showSuggestion ? null : (
              <View>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={this.handleReview}
                >
                  <Text style={styles.formButtonText}>Anonymous Review</Text>
                </TouchableOpacity>
              </View>
            )}
            {this.state.showReview ? null : (
              <View>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={this.handleSuggestion}
                >
                  <Text style={styles.formButtonText}>App Suggestions</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={{ marginBottom: 20 }}></View>

            {this.state.showReview ? (
              <View>
                <TextInput
                  multiline={true}
                  type="text"
                  name={"patientReview"}
                  onChange={this.onChangeReview}
                  placeholder="Leave an anonymous review/comment"
                  value={this.state.patientReview}
                  style={{ marginTop: 5, width: wp("80%") }}
                />
                <TouchableOpacity
                  onPress={this.handleReviewSubmit}
                  style={styles.formText}
                >
                  <Text style={styles.formButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {this.state.showSuggestion ? (
              <View>
                <TextInput
                  multiline={true}
                  type="text"
                  name={"patientSugesstion"}
                  onChange={this.onChangeSuggestion}
                  placeholder="Tell us what you want us to add to this App!"
                  value={this.state.patientSuggestion}
                  style={{ marginTop: 5, width: wp("80%") }}
                />
                <TouchableOpacity
                  onPress={this.handleSubmit}
                  style={styles.formText}
                >
                  <Text style={styles.formButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            ) : null}

            {this.state.showOther ? (
              <View>
                <Text style={styles.formHeader}>Forms</Text>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.ident.ws/template_include/new_patient_sign_in.do?site=14740&practiceId=22404"
                    )
                  }
                >
                  <Text style={styles.formButtonText}>New Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.adcofnorton.com/Content/Patient-Forms/Financial-Policy-2012.pdf"
                    )
                  }
                >
                  <Text style={styles.formButtonText}>Financial Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.adcofnorton.com/Content/Patient-Forms/ADC-Medical-Spa-Patient-Information.pdf"
                    )
                  }
                >
                  <Text style={styles.formButtonText}>Spa Patient Info</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  style={styles.formsText}
                  onPress={() =>
                    this.setState({
                      showOther: true,
                      showReview: false,
                      showSuggestion: false
                    })
                  }
                >
                  <Text style={styles.formButtonText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  headerDiv: {
    backgroundColor: "#fcec01",
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#114260",
    marginTop: 15
  },
  headerSpacing: {
    paddingTop: 30
  },
  formsContainer: {
    alignItems: "center",
    flex: 1
  },
  formHeader: {
    fontSize: 25,
    color: "#114260",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  formsText: {
    marginTop: 10,
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  formButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  },
  buttonHeaders: {
    color: iOSColors.blue,
    marginTop: 20,
    fontWeight: "bold"
  }
});

export default Contact;
