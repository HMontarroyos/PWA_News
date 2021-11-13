//TODO: criar aquivos de rotas

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, Post } from "./views";

function App() {
    return (
        <main>
            <section>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/:subject/:id">
                                <Post />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </section>
        </main>
    );
}

export default App;
