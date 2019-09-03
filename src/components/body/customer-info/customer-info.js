/* eslint-disable */
import React from 'react';
import './customer-info.scss'
// import arrow from '../../../images/arrow.png'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'



class CustomerInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }

    async componentDidMount() {
        const response = await fetch('/customers');
        const customersData = await response.json();
        const detailed = customersData.data.data
        this.setState({
            customers: detailed
        })
        // console.log(this.state.customers)
    }


    render() {
        // console.log(this.props)
        return (
            <div className="info">
                <h2 className="info-heading">Customer Risk Scores Table</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers.map((customer, index) => {
                            let name = customer[0]
                            let date = customer[1]
                            let rate = customer[2]
                            return (
                                <TableRow>
                                    <TableCell key={index} className="customer">{name}</TableCell>
                                    <TableCell key={index} className="customer">{date}</TableCell>
                                    <TableCell key={index} className="customer">{rate}</TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }


}

export default CustomerInfo