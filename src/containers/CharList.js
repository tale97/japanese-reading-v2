import React from "react";
import Char from "../components/Char.js";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { setNewWordTime } from "../actions";
import "../scss/components/Char.scss";

const mapStateToProps = (state) => {
  return {
    indexCurrentCard: state.changeCardState.indexCurrentCard,
    cardStateList: state.changeCardState.cardStateList,
    onHintedCard: state.changeCardState.onHintedCard,
    wordCompleted: state.changeCardState.wordCompleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewWordTime: (time) => {
      dispatch(setNewWordTime(time));
    },
  };
};

class CharList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatchTime: 0,
    };
  }

  componentDidMount = () => {
    this.props.setNewWordTime(Date.now());
  };

  componentDidUpdate = (prevProps) => {
    if (
      JSON.stringify(this.props.charsToRead) !==
      JSON.stringify(prevProps.charsToRead)
    ) {
      this.props.setNewWordTime(Date.now());
    }
  };

  setCardState = (idx, char) => {
    const {
      indexCurrentCard,
      cardStateList,
      onHintedCard,
      wordCompleted,
    } = this.props;
    var className = "";

    if (wordCompleted) {
      className = className.concat(` completed `);
    }
    if (wordCompleted && this.props.clickedJapChar !== "") {
      if (char === this.props.clickedJapChar) {
        className = className.concat(` clicked `);
      } else {
        className = className.concat(` o-100 `); // default o-100
      }
    }
    if (idx === indexCurrentCard) {
      className = className.concat(onHintedCard ? ` current-hinted ` : ` highlighted `);
    } else {
      className = className.concat(
        onHintedCard ? ` o-30 ` : wordCompleted ? "" : ` o-60 `
      );
    }
    var cardState = cardStateList[idx];
    className = className.concat(` ${cardState} `);
    return className;
  };

  render() {
    const charsArrayDisplay = this.props.charsToRead.map((item, idx) => {
      return (
        <Grid item key={idx}>
          <Char
            char={item.char}
            key={idx}
            cardState={this.setCardState(idx, item.char)}
            onClickCard={this.props.onClickCard}
            wordCompleted={this.props.wordCompleted}
          />
        </Grid>
      );
    });

    return (
      <Grid
        container
        className="japanese-word"
        direction="row"
        justify="center"
        alignItems="center"
        spacing="0"
      >
        <div className="word">
          {charsArrayDisplay}
        </div>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharList);
