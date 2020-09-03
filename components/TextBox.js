import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { global } from "../style/global";
export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      err: "",
    };
  }
  componentDidMount() {
    console.log(this.props.valid);
  }
  Onchange = (value) => {
    this.props.datatext({
      CauTraLoi: value,
      IDCauHoi: this.props.data.IDCauHoi,
      name: this.props.data.name ? this.props.data.name : null,
    });
    this.setState(
      {
        value,
      },
      () => {
        this.setState({
          err: this.props.valid ? "" : "vui lòng nhập thông tin",
        });
      }
    );
  };
  render() {
    return (
      <View style={[global.inputGroup, global.flex]}>
        <View style={{ width: "100%" }}>
          <Text style={global.titleCauHoi}>
            {this.props.data.TieuDe}{" "}
            <Text style={{ color: "rgb(217, 48, 37)" }}>
              {this.props.data.BatBuoc ? "*" : ""}
            </Text>
          </Text>
          <TextInput
            placeholder="Vui lòng nhập thông tin"
            style={styles.input}
            onChangeText={this.Onchange}
          />
          <Text style={{ color: "red" }}>{this.state.err}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginTop: 20,
    borderBottomWidth: 1,
    width: "100%",
  },
});
