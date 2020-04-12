import React, {Component} from "react";
import {formatTweet} from "../utils/helpers";
import {connect} from "react-redux";

class Tweet extends Component {
    render() {
        const {tweet} = this.props.tweet;

        if (tweet === null) {
            return <p>This tweet id doesn't exist</p>
        }

        return (
            <div className="tweet">

            </div>
        );
    }
}

function mapStateToProps({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet);
