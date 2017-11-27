import React, { Component } from "react";

/* #################### */
/* ##### Gallery ###### */
/* #################### */

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };
  }
  render() {
    const images = this.state.gallery.map((image, key) => {
      return (
        <Image
          key={key}
          id={image.id}
          format={image.format}
          height={image.height}
          width={image.width}
          deleteImage={this.deleteImage.bind(this)}
        />
      );
    });
    return (
      <div>
        <Header addImage={this.addImage.bind(this)} />
        <ul className="grid">{images}</ul>
      </div>
    );
  }
  addImage(format) {
    const { gallery } = this.state;
    const galleryLength = gallery.length;

    // generating randomised dimensions between 500 and 520px
    const width = Math.floor(Math.random() * 21 + 500);
    const height = Math.floor(Math.random() * 21 + 500);

    const newImage = {
      id: galleryLength + 1,
      format: format,
      width: width,
      height: height
    };
    this.setState({
      gallery: gallery.concat(newImage)
    });
  }
  deleteImage(id) {
    const newState = this.state.gallery.filter(item => {
      return item.id !== id;
    });
    this.setState({
      gallery: newState
    });
  }
}

/* ################### */
/* ##### Header ###### */
/* ################### */

const Header = ({ addImage }) => (
  <header className="header">
    <h1 className="header__title">scifgif - image search</h1>
    <p className="header__intro">
      Type a <code>keyword</code> to filter on and then click the image to copy it's URL to your clipboard.
    </p>
    <Controls addImage={addImage} />
  </header>
);

/* ####################### */
/* ##### UI Buttons ###### */
/* ####################### */

class Controls extends Component {
  render() {
    const sizes = ["giphy", "xkcd", "dilbert"];
    const buttons = sizes.map((size, key) => {
      return (
        <button
          className="header__button"
          key={key}
          onClick={this.handleClick.bind(this, size)}
        >
          {size}
        </button>
      );
    });
    return <div className="controls">{buttons}</div>;
  }
  handleClick(size) {
    this.props.addImage(size);
  }
}

/* ####################### */
/* ##### Image Item ###### */
/* ####################### */

class Image extends Component {
  render() {
    const { id, format, height, width } = this.props;
    let formatClass;
    switch (format) {
      case "wide":
        formatClass = "grid__item--wide";
        break;
      case "tall":
        formatClass = "grid__item--tall";
        break;
      case "big":
        formatClass = "grid__item--big";
        break;
      default:
        formatClass = "";
    }
    return (
      <li className={`grid__item ${formatClass}`}>
        <img
          className="grid__image"
          src={`https://unsplash.it/${width}/${height}`}
          alt=""
        />
        <button
          className="grid__close"
          onClick={this.handleDelete.bind(this, id)}
        >
          &times;
        </button>
      </li>
    );
  }
  handleDelete(id) {
    this.props.deleteImage(id);
  }
}

/* ########################## */
/* ##### Render Method ###### */
/* ########################## */

// ReactDOM.render(<Gallery />, document.getElementById("root"));
