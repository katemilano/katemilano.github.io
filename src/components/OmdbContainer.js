import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Table from "./Table";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import Header from "./Header";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Header></Header>
        </Row>
        <Row>
          <SearchForm>

          </SearchForm>
        </Row>
        <Row>
          <Col size="md-12">
            <Table>
              
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
