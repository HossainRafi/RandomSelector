import React from "react";
import "./Answer.css";
const Answer = () => {
  return (
    <div>
      <div className="qna">
        <h2 className="question">How React Works?</h2>
        <h4>
          আমরা React এ যে Code গুলো লিখি React সেগুলোকে JavaScript এ Convert করে
          ফেলে। React এ Virtual DOM থাকে। React আমাদের লিখা Code কে Virtual DOM
          এ রুপান্তর করে ব্রাউজার এর dom tree এর সাথে compare করে দেখে যে
          specific ঠিক কোন Elemnet টা Change করা হয়েছে। সেই Change অনুসারে
          React পুরো DOM কে আবার re-render না করে শুধু যেই Element Change হয়েছে
          সেখানেই Change করে।এতে Browser এর আর বাড়তি কাজ করা লাগেনা। যার ফলে
          React এত দ্রুত Render হয়।
        </h4>
      </div>
      <div className="qna">
        <h2 className="question">Difference Between Props & State</h2>
        <h4>
          PROPS: Props are read only. যার মানে Props কে Modify করা যায়না। Props
          এর মান যেটা Declare করা হয় Props এর মান সেটাই থাকে। মূলত Props থেকে
          Data পাঠানো হয়।
        </h4>
        <h4>
          STATE: State এর মান Asynchronous ভাবে Change হয়। State এর মান
          this.setState use করে Change করা যায়। React এর মধ্যে কোনো Value
          Updated করার প্রয়োজন হতেপারে এমন Situation কে Handle করার জন্য State
          Use করা হয়।
        </h4>
      </div>
    </div>
  );
};

export default Answer;
