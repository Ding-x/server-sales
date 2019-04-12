//data schema for fixedOptions. The fixed option means additional opption that is irrelated with final price.

const fixedOptions = [
    {
        id:0,
        name:"Vendor requirement for CPUs",
        value:1,
        type:"NUMBERINPUT"
    },
    {
        id:1,
        name:"Will server contain an Oracle RDMS or MS SQL Server (Not including MS SQL Express) database?",
        type:"COMPUNDRADIOBOX",
        value:false,
        options:[{name:"No", value:false},{name:"Yes", value:true}],
        subOption:{
            name:"Which server?",
            type:"RADIOBOX",
            index:0,
            options:[{name:"Oracle"},{name:"MS SQL",}],
        }
    },
    
    {
        id:2,
        name:"Will this contain a web server?",
        type:"COMPUNDRADIOBOX",
        value:false,
        options:[{name:"No", value:false},{name:"Yes", value:true}],
        subOption:{
            name:"Which software? (IIS, Apache, etc.)",
            type:"INPUT",
            value:"",
            error:false,
            errorMess:"*Please type the software",
        }
    },
    {
        id:3,
        name:"Long term backup of data required?",
        type:"RADIOBOX",
        index:0,
        options:[{name:"No", value:false},{name:"Yes", value:true}]
    },
    {
        id:4,
        name:"Will this server contain or manage any credit card information?",
        type:"RADIOBOX",
        index:0,
        options:[{name:"No", value:false},{name:"Yes", value:true}]
    },
    {
        id:5,
        name:"Will this server contain or manage any PCI or FIPPA information?",
        type:"RADIOBOX",
        index:0,
        options:[{name:"No", value:false},{name:"Yes", value:true}]
    },
    {
        id:6,
        name:"Does this server need to access anything on the Internet?",
        type:"RADIOBOX",
        index:0,
        options:[{name:"No", value:false},{name:"Yes", value:true}]
    },
    {
        id:7,
        name:"Does anything on the Internet need to access this server?",
        type:"RADIOBOX",
        index:0,
        options:[{name:"No", value:false},{name:"Yes", value:true}]
    },
    {
        id:8,
        name:"Admin User/Group",
        value:"",
        type:"INPUT",
        error:false,
        errorMess:"*Please type admin info",
    },
    {
        id:9,
        name:"Template Name (If applicable)",
        value:"",
        type:"INPUT"
    },
    {
        id:10,
        name:"Reboot Day and Time",
        value:"",
        type:"INPUT"
    },
    {
        id:11,
        name:"Any other notes or comments",
        value:"",
        type:"INPUT"
    }
]


export default fixedOptions