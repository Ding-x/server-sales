const comboList = [
    {
        id:12312,
        type:"Virtual Server",
        data:[
            {
                id:1,
                title:"Microsoft Windows",
                detail:"Windows 2016|4GB RAM|100GB OS disk",
                price:680.00,
            },
            {
                id:2,
                title:"Linux",
                detail:"Ubuntu 18.04|2GB RAM|20GB OS disk",
                price:313.00,
            }
        ],
        options:[
            {
                id:1,
                name:"Additional Disk",
                price:0.64,
                unit:"GB",
                type:"INPUT"
            },
            {
                id:2,
                name:"Additional Memory",
                price:41.00,
                unit:"GB",
                type:"INPUT"
            },
            {
                id:3,
                name:"Database",
                type:"RADIOBOX",
                index:-1,
                options:[{name:"N/A", price:0, unit:"Database"},{name:"SQL - instance on Shared server", price:739.88, unit:"Database"},{name:"Oracle - instance on Shared server", price:714.38, unit:"Database"}]
            },
            {
                id:4,
                name:"MS Exchange Mailbox",
                price:83.13,
                unit:"USER",
                type:"INPUT"
            },
            
            {
                id:5,
                name:"Active Directory User License",
                price:11.00,
                unit:"USER",
                type:"INPUT"
            },
            {
                id:6,
                name:" Symantec EndPoint Protection",
                price:12.00,
                unit:"USER",
                type:"INPUT"
            },
            {
                id:7,
                name:"Nimsoft/Service Modeling Add-On",
                price:500.00,
                unit:"ITEM",
                type:"CHECKBOX"
            },
            {
                id:8,
                name:"Support Hours",
                type:"RADIOBOX",
                index:-1,
                options:[{name:"5 x 9", price:900.00, unit:"Support Hours"},{name:"7 x 16", price:2500.00, unit:"Support Hours"},{name:"7 x 16", price:3500.00, unit:"Support Hours"}]
            }
        ]

    },
    {
        id:131212,
        type:"Physical Server",
        data:[
            {
                id:7,
                title:"Microsoft Windows",
                detail:"Windows 2016|32GB RAM|600GB storage",
                price:3800.00,
            }
        ]
    },
    {
        id:34534,
        type:"Virtual PC",
        data:[
            {
                id:8,
                title:"Virtual PC",
                detail:"4GB RAM|80GB disk",
                price:348.00,
            }
        ]
    },
    {
        id:12331231,
        type:"Database Server",
        data:[
            {
                id:9,
                title:"Seperate SQL Virtual Server",
                detail:"Windows 2016|4GB RAM|100GB OS disk|100GB Bin/sysDB|50GB SQL logs|100GB SQL userDB|100GB SQL logs",
                price:904.00,
            },
            {
                id:10,
                title:"Seperate Orcale Virtual Server",
                detail:"Windows 2012|4GB RAM|100GB OS disk|100GB Bin|20GB Redo  logs|100GB Orcale  userDB|20GB redo logs",
                price:833.00,
            }
        ]
    }



]

export default comboList