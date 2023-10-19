import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Values from "../components/Values";
import Transaction from "../components/Transaction";
import LeaderBoardWithCoin from "../components/LeaderBoardWithCoin";
import { useGlobalContext } from "../context/UserAndTransactionContext";
const style = require("../styles/myprofile.module.css").default;

// interface user {
//   coins: number;
//   name;
//   coins;
//   tenacious;
//   resourceful;
//   open_minded;
//   problem_solving;
//   holistic;
//   inquisitive;
//   celebrating;
// }

interface eachTransactionValue {
  celebrating_value: string;
  celebration_moment: string;
  date: string;
  image: string;
}

function MyProfile() {
  // const [userDetails, setUserDetails] = useState<any>();
  // const [allTransaction, setAllTransaction] = useState<any>();
  // const [loading, setLoading] = useState<any>(true);

  const { allTransaction, userDetails, loading } = useGlobalContext() || {};

  useEffect(() => {
    console.log("setAllTransaction", allTransaction, userDetails, loading);
  }, [allTransaction, userDetails, loading]);

  const valueInfo = [
    "Tenacious",
    "Resourceful",
    "Open-Minded",
    "Problem Solving",
    "Holistic",
    "Inquisitive",
    "Celebrating",
  ];

  if (loading) return <>Loading</>;

  return (
    <>
      <div className={style["profile"]}>
        <div className={style["profile__header"]}>
          <Header />
        </div>

        <div className="leaderboard">
          <LeaderBoardWithCoin userDetails={userDetails} />
        </div>

        <div className={style["profile__secondpart"]}>
          <div className="profile__secondpart-values">
            <div className="profile__secondpart-title">Values</div>
            <div className="profile__secondpart-content">
              {valueInfo.map((eachValue: string) => (
                <Values valuesInfo={eachValue} userDetails={userDetails} />
              ))}
            </div>
          </div>
          <div className={style["profile__secondpart-transaction"]}>
            <div className="profile__secondpart-title">TRANSACTION HISTORY</div>
            <div className={style["profile__secondpart-content"]}>
              {allTransaction.map(
                (eachTransaction: eachTransactionValue, index: number) => {
                  return (
                    <Transaction
                      key={index}
                      eachTransaction={eachTransaction}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
