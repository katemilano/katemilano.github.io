import React, {Component} from "react";
import TableData from "./TableData";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Table from "./Table";
import SearchForm from "./SearchForm";
import Header from "./Header";
import API from "../utils/API";
import "../styles/Table.css";

export default class TableArea extends Component{
    state={
        users: [{}],
        order: "descend",
        filterUsers: [{}],
    }

    headings=[
        {name: "Image", width: "10%", },
        {phone: "phone"},
        {email: "email"},
        {dob: "dob"}
        //name, phone, email, DOB
    ]

    //function Sort() 


    //function Compare

     filter = name => {
        const filtered = this.state.users.filter(users => users.filterUsers == filterUsers);

        this.setState({
            users: filtered
        });
     } 

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

// export default TableArea;
