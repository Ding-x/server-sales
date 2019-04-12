//data schema for options. The options means additional opption that is related with final price.


const options = [
            {
                id:1,
                name:"Additional Disk",
                price:0.64,
                unit:"GB",
                type:"INPUT",
                value:0
            },
            {
                id:2,
                name:"Additional Memory",
                price:41.00,
                unit:"GB",
                type:"INPUT",
                value:0
            },
            {
                id:7,
                name:"Nimsoft/Service Modeling Add-On",
                price:500.00,
                type:"CHECKBOX",
                value:false
            },
            {
                id:8,
                name:"Support Hours",
                type:"RADIOBOX",
                index:0,
                options:[{name:"5 x 9", price:900.00},{name:"7 x 16", price:2500.00},{name:"7 x 16", price:3500.00}],
                error:false,
                erroMess:"Please select a support hours"
            }
        ]


export default options