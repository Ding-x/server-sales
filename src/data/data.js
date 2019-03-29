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
                price:23.5,
                unit:"GB",
                type:"INPUT"
            },
            {
                id:2,
                name:"Additional Memory",
                price:12.8,
                unit:"GB",
                type:"INPUT"
            },
            {
                id:3,
                name:"Check 1",
                price:88.5,
                unit:"ITEM",
                type:"CHECKBOX"
            },
            {
                id:4,
                name:"Check 2",
                price:134.00,
                unit:"ITEM",
                type:"CHECKBOX"
            },
            {
                id:5,
                name:"Radio 1",
                type:"RADIOBOX",
                index:-1,
                options:[{name:"O1", price:111.00, unit:"ITEM"},{name:"O2", price:222.00, unit:"ITEM"},{name:"O3", price:333.00, unit:"ITEM"}]
            },
            {
                id:6,
                name:"Radio 2",
                type:"RADIOBOX",
                index:-1,
                options:[{name:"P1", price:11.00, unit:"ITEM"},{name:"P2", price:22.00, unit:"ITEM"},{name:"P3", price:33.00, unit:"ITEM"},{name:"P4", price:44.00, unit:"ITEM"}]
            },
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