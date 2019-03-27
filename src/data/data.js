const comboList = [
    {
        id:12312,
        type:"Virtual Server",
        data:[
            {
                id:1,
                title:"Microsoft Windows",
                detail:"Windows 2016|4GB RAM|100GB OS disk",
                price:680,
            },
            {
                id:2,
                title:"Linux",
                detail:"Ubuntu 18.04|2GB RAM|20GB OS disk",
                price:313,
            }
        ],
        options:[
            {
                id:3,
                name:"Disk Storage",
                price:"23.5",
                unit:"GB",
                type:"INPUT"
            },
            {
                id:4,
                name:"Memory",
                price:"12.8",
                unit:"GB",
                type:"INPUT"
            },
            {
                id:5,
                name:"Service 1",
                price:"88.5",
                unit:"ITEM",
                type:"CHECKBOX"
            },
            {
                id:6,
                name:"Service 2",
                price:"134",
                unit:"ITEM",
                type:"CHECKBOX"
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
                price:3800,
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
                price:348,
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
                price:904,
            },
            {
                id:10,
                title:"Seperate Orcale Virtual Server",
                detail:"Windows 2012|4GB RAM|100GB OS disk|100GB Bin|20GB Redo  logs|100GB Orcale  userDB|20GB redo logs",
                price:833,
            }
        ]
    }



]

export default comboList