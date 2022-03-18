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
            fullNameCol: "Full_name",
            companyCol: "Company",
            phoneNumberCol: "Phone_Number",
            emailCol: "Email",
            hostCol: "Host",
            positionCol: "Position"
        }
    }
};

module.exports = tables;