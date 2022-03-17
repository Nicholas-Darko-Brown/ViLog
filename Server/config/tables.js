const tables = {
    hosts: {
        name: "vilog_db.hosts", 
        colums: {
            fullNameCol: "Full_Name",
            emailCol: "Email",
            positionCol: "Position",
            phoneNumberCOl: "Phone_number"
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