import React, {Component} from "react";
import "./faq.css";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

class FAQ extends Component {
  state = {
    faqs: []
  }

  async componentDidMount() {
    let res = await http.get(apiRoot + '/site-data/faq/');
    this.setState({faqs: res.data.data});
  }

  render() {

    return (
        <div class="faqs gray-light-bg">
          <div class="container">


       
        
                <div class="section-header ">
                  <h2>Frequently asked questions?</h2>
                </div>
                <div className="row"  id="accordion ">

                  {[...this.state.faqs.entries()].map(([index, faq]) =>
                      <div key={index} class=" col-lg-6 col-sm-6 col-xs-6">
                      <div className="card">


                        <div class="card-header">
                          <a class="card-link"
                             data-toggle="collapse"
                             href={`#collapse${index}`}>
                            <span>{index + 1}</span> {faq.question}
                          </a>
                        </div>
                        <div
                            id={`collapse${index}`}
                            class="collapse"
                            data-parent="#accordion"
                        >
                          <div class="card-body">{faq.answer}</div>
                        </div>
                      </div>
                         </div>
                  )}


                </div>
                <a class="btn" href="">Have more questions?</a>
      
            </div>
          </div>

    );
  }
}

export default FAQ;
