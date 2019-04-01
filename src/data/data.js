const comboList = [
    {
        id:1,
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
        ]
    },
    {
        id:2,
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
        id:3,
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
        id:4,
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
    },
    {
        id:5,
        type:"Database Instance on Shared Server",
        data:[
            {
                id:11,
                title:"SQL Database Instance",
                detail:"",
                price:739.88,
            },
            {
                id:12,
                title:"Oracle Database Instance",
                detail:"",
                price:714.38,
            }
        ]
    },
    {
        id:6,
        type:"Other Sevices",
        data:[
            {
                id:13,
                title:"MS Exchange Mailbox Per User",
                detail:"",
                price:83.13,
            },
            {
                id:14,
                title:"Active Directory User License Per User",
                detail:"",
                price:11.00,
            },
            {
                id:15,
                title:"Symantec EndPoint Protection Per User",
                detail:"",
                price:12.00,
            }
        ]
    }



]

export default comboList