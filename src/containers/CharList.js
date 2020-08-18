import React from "react";
import Char from "../components/Char.js";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { setNewWordTime } from "../actions";

const mapStateToProps = (state) => {
  return {
    // charTimestamp: state.changeCardState.charTimestamp,
    // keyPressed: state.changeInputBox.keyPressed,
    indexCurrentCard: state.changeCardState.indexCurrentCard,
    cardStateList: state.changeCardState.cardStateList,
    onHintedCard: state.changeCardState.onHintedCard,
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

  setCardState = (idx) => {
    const { indexCurrentCard, cardStateList, onHintedCard } = this.props;
    var className = "";
    if (idx === indexCurrentCard) {
      className = className.concat(` highlighted `);
    } else {
      className = className.concat(onHintedCard ? ` o-30 ` : ` o-90 `);
    }
    var cardState = cardStateList[idx];
    className = className.concat(` ${cardState} `);
    return className;
  };

  render() {
    const charsArrayDisplay = this.props.charsToRead.map((item, idx) => {
      return (
        <Grid item key={idx}>
          <Char char={item.char} key={idx} cardState={this.setCardState(idx)} />
        </Grid>
      );
    });

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing="1"
      >
        {charsArrayDisplay}
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharList);
