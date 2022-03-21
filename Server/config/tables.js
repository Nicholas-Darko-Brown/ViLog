const tables = {
    employees: {
        name: "vilog_db.employees", 
        colums: {
            idCol1: "Id",
            fullNameCol1: "Full_Name",
            emailCol1: "Email",
            positionCol1: "Position",
            phoneNumberCol1: "Phone_number"
        }
    },

    visitors: {
        name: "vilog_db.visitors",
        colums: {
            idCol: "Id",
            fullNameCol: "Full_name",
            companyCol: "Company",
            phoneNumberCol: "Phone_Number",
            emailCol: "Email",
            hostCol: "Host",
            positionCol: "Position",
            signIn: "Time_In",
            signOut: "Time_Out",
            month: "Months"
        }
    }
};

module.exports = tables;