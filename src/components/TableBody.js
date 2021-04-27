import React from "react";
import "../styles/Table.css";

function TableBody () {
            function Date (date) {
                const dateArr = date.split("-");
                const year = dateArr[0];
                const month = dateArr[1];
                const dayArr = dateArr[2].split("T");
                const day = dayArr[0];
                const formattedDate = [month, day, year].join("-");
                return formattedDate;
            }
        return(
            <tbody>
                {users[0] !== undefined && users[0].name !== undefined ? (
                    users.map(({ login, name, picture, phone, email, DOB }) => {
                        return (
                            <tr key={login.uuid}>
                                <td data-th="Image" className="align-middle">
                                    <img
                                    src={picture.medium}
                                    alt={"needtofill"}
                                    className="image-responsive"
                                    />
                                </td>
                            </tr>
                        )
                    })) 
                }
            </tbody>
        )
}

//add in concatonation in alt
