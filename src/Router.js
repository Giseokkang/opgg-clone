import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/champion/analysis" exact component={Analysis} />
        <Route path="/champion/statistics" exact component={Statistics} />
        <Route path="/ranking/ladder" exact component={LadderRanking} />
        <Route path="/ranking/champions" exact component={ChampionsRanking} />
        <Route path="/ranking/level" exact component={LevelRanking} />
        <Route path="/spectate/pro/" exact component={SpectatePro} />
        <Redirect from="#" to="/" />
      </Switch>
      <Route path="/community" exact component={Community}></Route>
    </>
  </Router>
);
