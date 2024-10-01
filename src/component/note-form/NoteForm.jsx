import React from "react";
import NoteTitleValidation from "./NoteTitleValidation";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onTitleCharHandler = this.onTitleCharHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleCharHandler(event) {
    const title = event.target.value.length;
    const maxLength = 50;

    title < 50
      ? console.log(maxLength - title + " batas karakter lagi")
      : console.log("karakter limit terpenuhi");
  }
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-form" onSubmit={this.onSubmitEventHandler}>
        <NoteTitleValidation
          text={
            this.state.title.length < 50
              ? 50 - this.state.title.length + " batas karakter lagi"
              : "batas karakter terpenuhi"
          }
        />
        <input
          type="text"
          placeholder="Judul catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          onInput={this.onTitleCharHandler}
        />
        <input
          type="textarea"
          placeholder="Isi catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah Catatan</button>
      </form>
    );
  }
}

export default NoteForm;
