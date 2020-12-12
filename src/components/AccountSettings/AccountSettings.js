import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/img/Images/Images";

function AccountSettings(props) {
  return (
    <div>
      <div id="accountSettings">
        <div className="container">
          <h3>ACCOUNT SETTINGS</h3>
          <hr className="line5 ml-0" />
          <div id="exTab1" className="">
            <ul className="nav nav-tabs">
              <li class="nav-item active">
                <Link className="active nav-link" to="#1a" data-toggle="tab">
                  Account{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#2a" data-toggle="tab">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#3a" data-toggle="tab">
                  Payment{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#4a" data-toggle="tab">
                  Balans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#5a" data-toggle="tab">
                  Shop
                </Link>
              </li>
            </ul>

            <div className="tab-content clearfix p-0">
              <div className="tab-pane active" id="1a">
                <div className="">
                  <div className="account-photo d-flex justify-content-center">
                    <div className="pink">
                      <div className="pink-circle">
                        <img
                          className="user-icon"
                          src="images/Icon.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-6 offset-3">
                        <div className="row pl-0">
                          <div className="col-6">
                            <div className="gamer">Gamer1303</div>
                          </div>
                          <div className="col-6">
                            <div className="gamer-id">ID: 15485A</div>
                          </div>
                        </div>
                        <Form id="form" className="form">
                          <div className="formControl">
                            <input
                              type="text"
                              placeholder="Name ,Surname"
                              id="username1"
                            />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                          </div>
                          <div className="formControl">
                            <input
                              type="email"
                              placeholder="E-mail"
                              id="email1"
                            />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                          </div>
                          <div className="formControl">
                            <input
                              type="password"
                              placeholder="Password"
                              id="password1"
                            />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button id="save-btn">Save</button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane orders" id="2a">
                <div>
                  <Table
                    style="width: 100%;"
                    className="accordion"
                    id="accordionExample"
                    id="orders-table"
                  >
                    <tr>
                      <th></th>
                      <th>ORDER NUMBER</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          className="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                          className="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                          className="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                          class="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                          className="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="row">
                        <img
                          className="game-image1"
                          src={Images.Rectangle87}
                          alt=""
                        />
                        <div className="game-name1">
                          {" "}
                          Star Wars Squadrons PC Origin Key
                        </div>
                      </td>
                      <td className="orderNumber">09375901AZ</td>
                      <td>
                        <div className="quantity">
                          <div className="quantity-number">2</div>
                        </div>
                      </td>
                      <td className="total">59 &#x20bc;</td>
                      <td>
                        <button
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                          className="showDetailsButton collapsed"
                        >
                          Show details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordionExample"
                        >
                          <div className="hiddenRow row">
                            <div className="offset-1 col-7">
                              <h6>About order</h6>
                              <div className="aboutOrder">
                                How to Play PlayerUnknown's Battlegrounds (PUBG)
                                Mobile? In the first version of PUBG, which was
                                first introduced to game lovers in 2017, players
                                start the game by falling from the sky on a
                                deserted island. (battle royale) The PUBG Mobile
                                game is trying to dominate its opponents with
                                the weapons and other equipment they find on
                                this island with their own efforts. At the end
                                of the fight, the surviving team or player wins
                                the game.
                              </div>
                            </div>
                            <div className="paymentMethode col-4">
                              <h6>Payment methode </h6>
                              <div className="row">
                                <div className="aboutPayment1">
                                  Name, Surname:{" "}
                                </div>
                                <div className="aboutPayment2">John</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Card: </div>
                                <div className="aboutPayment2">VISA MASTER</div>
                              </div>
                              <div className="row">
                                <div className="aboutPayment1">Date: </div>
                                <div className="aboutPayment2">15.12.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Table>
                </div>
              </div>
              <div className="tab-pane payment" id="3a">
                <h5>CREDIT CARD</h5>
                <div>
                  {" "}
                  <Link className="addMethod" to="">
                    <i className="fas fa-plus fa-2x"></i> Add payment method
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link className="addMethod" to="">
                    <i className="fas fa-plus fa-2x"></i> Add payment method
                  </Link>
                </div>
              </div>
              <div className="tab-pane balans" id="4a"></div>
              <div className="tab-pane shop" id="5a"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountSettings;
