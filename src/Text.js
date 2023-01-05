import React from "react";

// Created class fucntion in one of the components to demonstrate familiarity with class and functional components
class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || "",
      name: props.name,
      type: props.type || "text",
      value: props.value || "",
      editClassName: props.editClassName,
      field: props.field || "",
      edit: false,
      key: props.key
    };
  }

  edit() {
    this.setState({ edit: this.state.edit !== false });
  }

  // we only need to update the state when the enter happens
  // pass in the id, the value, and the field to the function to update the state
  render() {
    return (
      (this.state.edit === true && (
        <input
          key={this.state.key}
          name={this.state.name}
          type={this.state.type}
          value={this.state.value}
          className={this.state.editClassName}
          autoFocus
          onFocus={(event) => {
            const value = event.target.value;
            event.target.value = "";
            event.target.value = value;
            this.setState({ backup: this.state.value });
          }}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          onBlur={(event) => {
            this.setState({ edit: false, value: this.state.backup });
          }}
          onKeyUp={(event) => {
            if (event.key === "Escape") {
              this.setState({ edit: false, value: this.state.backup });
            }
            if (event.key === "Enter") {
              if (event.target.value) {
                this.setState({ edit: false, value: this.state.value });
                this.props.updateUserField(
                  this.state.id,
                  this.state.field,
                  this.state.value
                );
                return;
              }
              this.setState({ edit: false, value: this.state.backup });
              this.props.updateUserField(
                this.state.id,
                this.state.field,
                this.state.backup
              );
            }
          }}
        />
      )) || (
        <span
          onClick={(event) => {
            this.setState({ edit: this.state.edit !== true });
          }}
        >
          {this.state.value}
        </span>
      )
    );
  }
}

export default EditableText;
