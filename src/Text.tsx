import React from "react";
import { ReadonlyTextComponentProps, EditableTextState} from "./types";

// Created class fucntion in one of the components to demonstrate familiarity with class and functional components
class EditableText extends React.Component<ReadonlyTextComponentProps, EditableTextState> {
  constructor(props: ReadonlyTextComponentProps) {
    super(props);
    this.state = {
      id: props.id || "",
      name: props.name,
      type: props.type || "text",
      value: props.value || "",
      editClassName: props.editClassName,
      field: props.field || "",
      isEditActive: false,
      key: props.key,
      backup: props.value || "",
      updateUserField: props.updateUserField
    };
  }

  edit() {
    this.setState({ isEditActive: this.state.isEditActive !== false });
  }

  // we only need to update the state when the enter happens
  // pass in the id, the value, and the field to the function to update the state
  render() {
    return (
      (this.state.isEditActive === true && (
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
          onBlur={() => {
            this.setState({ isEditActive: false, value: this.state.backup });
          }}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Escape") {
              this.setState({ isEditActive: false, value: this.state.backup });
            }
            if (event.key === "Enter") {
              if (event.currentTarget.value) {
                this.setState({ isEditActive: false, value: this.state.value });
                this.props.updateUserField(
                  this.state.id,
                  this.state.field,
                  this.state.value
                );
                return;
              }
              this.setState({ isEditActive: false, value: this.state.backup });
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
          onClick={() => {
            this.setState({ isEditActive: this.state.isEditActive !== true });
          }}
        >
          {this.state.value}
        </span>
      )
    );
  }
}

export default EditableText;
