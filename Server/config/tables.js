const tables = {
    employees: {
        name: "heroku_0ce75785aa78e7b.employees", 
        colums: {
            idCol1: "Id",
            fullNameCol1: "Full_Name",
            emailCol1: "Email",
            positionCol1: "Position",
            phoneNumberCol1: "Phone_number",
            passwordCol1: "Password"
        }
    },

    visitors: {
        name: "heroku_0ce75785aa78e7b.visitors",
        colums: {
            idCol: "Id",
            fullNameCol: "Full_name",
            companyCol: "Company",
            phoneNumberCol: "Phone_Number",
            emailCol: "Email",
            hostCol: "HostId",
            positionCol: "Position",
            signIn: "Time_In",
            signOut: "Time_Out",
            day: "Day",
            month: "Months",
            year: "Year",
            passwordCol: "Password"
        }
    },

    administrators: {
        name: "heroku_0ce75785aa78e7b.administrators",
        colums: {
            emailCol2: "Email",
            passwordCol2: "Password"
        }
    }
};

module.exports = tables;