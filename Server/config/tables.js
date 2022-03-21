const tables = {
    employees: {
        name: "vilog_db.employees", 
        colums: {
            fullNameCol: "Full_Name",
            emailCol: "Email",
            positionCol: "Position",
            phoneNumberCol: "Phone_number"
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